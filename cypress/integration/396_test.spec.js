describe('396', function() {
    before(function () {
        //beforeAll
    })
    beforeEach(function () {
      cy.wait(3000)
      cy.visit('http://192.168.60.24:3000/#/capaa/dbserver/db')
      cy.contains('数据治理').click()
      cy.contains('敏感数据发现').click()
    })
    it('按钮测试',function(){
        cy.url().should('be','http://192.168.60.24:3000/#/capaa/dbserver/dataGovernance/discoverTask')
        cy.get('input[name="taskName"]').type('taskName')
        cy.get('input[name="dbName"]').type('dbName')
        // cy.get('button').contains('搜 索').then(($node)=>{
        //     $node.click()
        // })
        cy.contains('搜 索').click()
        cy.contains('清 空').parents('.ant-col-12').should('have.css','text-align','right')
        cy.contains('确认删除全部敏感任务吗？').should('not.exist')
        cy.contains('清 空').click().then(()=>{
            cy.contains('确认删除全部敏感任务吗？').should('exist')
        })
        cy.get('.ant-modal').should('exist')
        cy.contains('取 消').click(()=>{
            cy.get('.ant-modal').should('not.exist')
        })
        
        //https://docs.cypress.io/api/commands/contains.html#Preferences
        cy.contains('删 除').should('be.disabled').should('have.css','background-color','rgb(245, 245, 245)')

        cy.get(':nth-child(1) > .ant-table-selection-column > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.contains('删 除').should('not.be.disabled').should('have.css','background-color','rgb(255, 255, 255)')
        cy.contains('添加').click().then(()=>{
            cy.url().should('be','http://192.168.60.24:3000/#/capaa/dbserver/dataGovernance/discoverTask/add').then(()=>{
                cy.get('input[value="schema"]').should('be.checked')
                cy.get('input[value="table"]').should('not.be.checked')
                cy.get('input[value="table"]').click()
                cy.get('input[value="schema"]').should('not.be.checked')
                cy.get('input[value="table"]').should('be.checked')
            })
        })
        cy.contains('取 消').click().then(()=>{
            cy.url().should('be','http://192.168.60.24:3000/#/capaa/dbserver/dataGovernance/discoverTask')
        })
    })

    it('全选反选测试',function(){
        //选中第一个，断言是否只有第一个选中
        cy.get(':nth-child(1) > .ant-table-selection-column > :nth-child(1) > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-table-tbody').children().each(($el, index, $lis) => {
            if(index === 0){
                cy.wrap($el).find('.ant-checkbox-input').should('be.checked')
            }else{
                cy.wrap($el).find('.ant-checkbox-input').should('not.be.checked')
            }
        })
        //全选
        cy.get('.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-table-tbody').children().each(($el, index, $lis) => {
            cy.wrap($el).find('.ant-checkbox-input').should('be.checked')
        })
        //反选
        cy.get('.ant-table-selection > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').click()
        cy.get('.ant-table-tbody').children().each(($el, index, $lis) => {
            cy.wrap($el).find('.ant-checkbox-input').should('not.be.checked')
        })
    })

    it('表格字段测试',function(){
        let arr = ['任务名称','数据库名','发现结果','状态','创建用户','创建时间','操作']
        cy.get('.ant-table-thead > tr').children().each(($el, index, $lis) => {
            if(index < arr.length){
                cy.wrap($lis[index+1]).contains(arr[index]).should('exist')
            }
        })
    })

    it('antd select和穿梭框功能测试',function(){
        //数据库类型选中Oracle
        cy.contains('添加').click().then(()=>{
            cy.url().should('be','http://192.168.60.24:3000/#/capaa/dbserver/dataGovernance/discoverTask/add').then(()=>{
                cy.get('label[for="dbType"]').parents('.ant-form-item').find('.ant-select').click().then(()=>{
                    cy.get('body').find('.ant-select-dropdown').find('li').contains('Oracle').click()
                })
                cy.get('label[for="dbName"]').parents('.ant-form-item').find('.ant-select').click().then(()=>{
                    cy.get('body').find('.ant-select-dropdown').find('li').contains('orcl').click().then(()=>{
                        // cy.request('GET', '/capaa/assetProtectObject/query/1').then((response) => {
                        //     cy.log(response.body.data)
                        //     cy.get('input[name="instanceName"]').should('have.attr','value',response.body.data[0].instanceName)
                        // })
                        cy.get('input[name="instanceName"]').should('have.attr','value','orcl')
                    })
                })
            })
        })
        //校验
        cy.contains('请填写任务名称').should('not.exist')
        cy.contains('下一步').click()
        cy.contains('请填写任务名称').should('exist')
        cy.contains('敏感资产发现（数据库需已填数据库账号和密码）').should('exist')
        cy.get('input[name="taskName"]').type('test').then(()=>{
            cy.contains('请填写任务名称').should('not.exist')
        })
        //穿梭框功能
        cy.get('.ReactVirtualized__Grid__innerScrollContainer').children().each(($el, index, $lis) => {
            // 选中第一个
            if(index === 0){
                cy.wrap($el).click().then(()=>{
                    let selectItemText = $el.text()
                    cy.log(selectItemText)
                    cy.get('.anticon-right').parents('.ant-btn').click()
                    // cy.get('.transfer').find('.transfer-list').eq(0).contains(selectItemText).should('exist')
                    cy.get('.transfer').find('.transfer-list').eq(1).contains(selectItemText).should('exist')
                })
            }
        })
    })

    it('快照测试',function(){
        cy.wait(3000)
        cy.get('body').toMatchSnapshot({
            threshold: 0,
        })
    })
    it('图片比对',function(){
        cy.wait(3000)
        // cy.contains('添加').click()
        // cy.get('input[name="taskName"]').type('555555555555555555')
        cy.get('body').toMatchImageSnapshot({
            threshold: 0,
        })
    })
    it.only('cypress 截图功能',function(){
        cy.screenshot()
    })
})