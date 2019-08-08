describe('组件库访问', function() {
    beforeEach(function () {
      cy.viewport(1440,900)
      cy.wait(3000)
      cy.visit('http://192.168.200.178:6006')
    })
    // it('主页面可访问测试', function() {
    //     cy.visit('/capaa/login.jspx')
    //     cy.pause()
    //     cy.visit('/#/capaa/home')
    //     cy.contains('数据库服务').click()
    //     cy.contains('数据治理').click()
    //     cy.contains('敏感数据发现').click()
    // })
    
    // describe('敏感数据发现模块功能测试', function() {
    //     it('搜索功能测试', function(){
    //         cy.get('[name="taskName"]').type('dm')
    //         // cy.contains('搜 索').click()
    //     })
    // })
    it('简单的点击和输入测试',function(){
      cy.title().should('include', 'AdvancedSearch')
      cy.wait(3000)
      cy.get('iframe').iframe('#root').find('input[name="name"]').type('18', {force: true})
      cy.get('iframe').iframe('body').find('input[name="name"]').should('have.class','ant-input')
      cy.get('#showConfig').click()
      cy.contains('BaseForm').click()
      cy.contains('基础使用(with formitem)').click()
      cy.get('iframe').iframe('body').should('exist')
      cy.wait(1000)
      cy.get('iframe').iframe('#root').find('input[name="name"]').type('18', {force: true})
      cy.get('iframe').iframe('body').find('input[name="age"]').type('18', {force: true})
      cy.get('iframe').iframe('body').find('input[name="age"]').clear()
      cy.get('iframe').iframe('body').find('input[name="sex"]').type('男', {force: true})
    })

    it('ButtonGroups 组件测试',function(){
      cy.get("#buttongroups").click()
      cy.get('#buttongroups--基础使用 > :nth-child(3)').click()
      cy.wait(1000)
      cy.get('input[name="showSize"]').clear()
      cy.get('input[name="showSize"]').should('have.attr','value','5')
      cy.get('input[name="showSize"]').type(123)
      cy.get('select[name="viewMode"]').select('"text"')
      cy.contains('"text"').should('exist')
      cy.get('iframe').iframe('body').find('.ant-btn-group > :nth-child(1)').trigger('mouseover').should('have.class','ant-tooltip-open')
      cy.get('#buttongroups--handleclick > :nth-child(3)').click()
      cy.wait(1000)
      // 测试注意一点:有些想当然的文字可能中间会有空格
      cy.get('iframe').iframe('body').contains('新 增').should('not.exist')
      cy.get('select[name="viewMode"]').select('"icon"')
      cy.get('iframe').iframe('body').contains('新 增').should('exist')
    })


    it('DataTable 组件测试',function(){
      cy.contains('DataTable').click()
      cy.get('#datatable--基础使用').click()
      cy.wait(1000)
      cy.get('iframe').iframe('body').find('.ant-table-pagination').should('exist')
      cy.contains('去除分页').click()
      cy.wait(1000)
      cy.get('iframe').iframe('body').find('.ant-table-pagination').should('not.exist')
    })

    it('DetailTable 组件测试',function(){
      cy.contains('DetailTable').click()
      cy.get('#detailtable--基础使用-data为json > :nth-child(3)').click()
      cy.get('iframe').iframe('body').find('.ant-table-tbody >:nth-child(1)').find('th').its('length').should('eq', 2)
      cy.get('input[name="columnNumber"]').clear()
      cy.get('iframe').iframe('body').contains('列数必须大于0').should('exist')
      cy.get('input[name="columnNumber"]').clear().type('3')
      cy.wait(1000)
      cy.get('iframe').iframe('body').find('.ant-table-tbody >:nth-child(1)').find('th').its('length').should('be.gt', 2)
      cy.get('iframe').iframe('body').find('.ant-table-tbody >:nth-child(1)').find('th').its('length').should('eq', 3)
    })

    it('Ellipsis 组件测试',function(){
      cy.contains('Ellipsis').click()
      cy.get('#ellipsis--text值与鼠标移上时不同 > :nth-child(3)').click()
      cy.get('textarea[name="text"]').should('have.value', '这是一个Ellipsis基础用法接收的text')
      cy.get('textarea[name="tooltiptext"]').should('have.value', '这是一个tooltiptext扩展用法自定义的tooltiptext值')
      cy.get('iframe').iframe('body').contains('这是一个Ellipsis基础用法接收的text').should('exist')
      cy.get('iframe').iframe('body').contains('这是一个tooltiptext扩展用法自定义的tooltiptext值').should('not.exist')
      cy.get('iframe').iframe('body').contains('这是一个Ellipsis基础用法接收的text').trigger('mouseover').then(($node)=>{
        cy.get($node).should('have.class','ant-tooltip-open')
        cy.get('iframe').iframe('body').contains('这是一个Ellipsis基础用法接收的text').should('exist')
        cy.get('iframe').iframe('body').contains('这是一个tooltiptext扩展用法自定义的tooltiptext值').should('exist')
      })
    })

    it('Panel 组件测试', function(){
      cy.contains('Panel').click()
      cy.get('#panel--基础用法').click()
      cy.get('iframe').iframe('body').find('.ant-spin-spinning').should('not.exist')
      cy.wait(300)
      cy.get('input[name="loading"]').should('be.visible').click().then(($node) => {
        cy.get('iframe').iframe('body').find('.ant-spin-spinning').should('exist')
      })
      cy.get('iframe').iframe('body').contains('确定').should('not.exist')
      cy.get('#okText').type('确定').then(($node) => {
        cy.get('iframe').iframe('body').contains('确定').should('exist')
      })
      cy.get('iframe').iframe('body').contains('取消吧').should('not.exist')
      cy.get('#cancelText').type('取消吧').then(($node) => {
        cy.get('iframe').iframe('body').contains('取消吧').should('exist')
      })
    })


    //https://github.com/meinaart/cypress-plugin-snapshots 配置介绍
    it('快照测试', function(){
      cy.contains('Panel').click()
      cy.get('#panel--基础用法').click().then(()=>{
        cy.wait(1000)
        cy.document().toMatchSnapshot()
      })
    })

    it('图片比对',function(){
      cy.contains('Panel').click()
      cy.get('#panel--基础用法').click()
      // cy.get('#advancedsearch--更多查询项时出现扩展').click()
      cy.document().toMatchImageSnapshot()
    })


    //cypress run --record --key 4643a91f-1dd5-46f0-9fdb-71e707a7d611


    // it('登录yapi',function(){
    //     cy.visit('http://192.168.200.178:3000/login')
    //     cy.get('#email').type('1045083424@qq.com')
    //     cy.get('#password').type('ljn199379')
    //     cy.contains('登 录').click()
    // })

    // it('新建mock接口',function(){
    //     cy.get('h4[class="ui-title"]').contains('资产').click()
    //     cy.url().should('include', '/project/115/interface/api')
    // })
})