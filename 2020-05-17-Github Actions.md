---
layout: post
title: "Github Actions"
date: 2020-05-17 14:22:45 +0800
featured-img: shane-rounce-205187
#published: false
---

<div style="position: relative; height: 0; z-index: -1;"><img alt="github actions" src="https://github.githubassets.com/images/modules/actions/actions-hero.png" style="position: absolute; top: 0; right: 0;" /></div>


## Github Actions

GitHub Actions可帮助您在存储代码的同一位置自动执行软件开发工作流程，并就请求请求和问题进行协作。您可以编写单个任务（称为操作），并将其组合以创建自定义工作流程; 工作流是自定义的自动化流程，您可以在存储库中对其进行设置，以在GitHub上构建，测试，打包，发布或部署任何代码项目。 借助GitHub Actions，您可以直接在存储库中构建端到端的持续集成（CI）和持续部署（CD）功能。

## [核心概念](https://help.github.com/en/actions/getting-started-with-github-actions/core-concepts-for-github-actions)

**CI**<br>
持续集成指的是，频繁地将代码集成到主干，集成到主干之前，必须通过自动化测试。
优点：1、快速发现错误。2、防止分支大幅偏离主干

**CD**<br>
持续部署是持续交付的下一步，指的是代码通过评审后，自动部署到生产环境

**Workflow**<br>
在 Github 上配置构建、测试、打包、发布或部署的自动化工作流程，工作流由一个或多个 Job 组成

**Job**<br>
由多个步骤组成的，工作流程中的一个作业步骤，可以定义工作流文件中作业的运行方式和依赖关系

**Step**<br>
步骤可以运行命令或 action 的单个任务

**Action**<br>
单独的任务，是工作流中最小的可移植构建快。

**Event**<br>
触发工作流程运行的特定事件

**Runner**<br>
github 分配的用来执行 workflow 的构建服务器 (也可以自建 runner)


## 配置文件

Github Actions 的 **[Workflow file](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions)**（配置文件）采用的是 YAML 类型的文件，文件存放在仓库根目录的 `.github/workflows` 目录中。仓库中存放至少一个作业。Github 发现仓库中存在配置文件就会在特定的事件触发后，自动执行配置的工作流程

YAML 学习资源：

[YAML 语言教程 - 阮一峰](http://www.ruanyifeng.com/blog/2016/07/yaml.html)<br>
[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)

### 配置字段

* name<br>
`name` 字段是 workflow 的名称。如果省略该字段，Github默认使用workflow文件名称

* on<br>
required `on` 字段指定触发 workflow 的条件，通常是单个事件名称，或者事件数组，可以关联特定文件，标记或分支更改。

单个事件：
```yml
# Trigger on push
on: push
```

事件列表：
```yml
# Trigger the workflow on push or pull request
on: [push, pull_request]
```

多种类型示例：[活动、外部事件、定时运行等](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions#onevent_nametypes)
```yml
on:
  # Trigger the workflow on push or pull request,
  # but only for the master branch
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event abve
      - created
```

* jobs<br>
workflow 文件由一个或多个 `job` 组成，每个作业必须包含一个ID，所有的 `job` 都是并行的，但往往都会有依赖关系。下面 `my_first_job` `my_second_job` 就是每个 Job 的 ID, 必须以字母或 `_` 开头，并且仅包含字母数字字符

```yml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

* jobs.<job_id>.name
* jobs.<jobid>.needs<br>
  `needs` 指定 `job` 依赖关系

```yml
# 测试通过后，才能部署
jobs:
  test:
  deploy:
    needs: test
```

* jobs.<job_id>.runs-on<br>
指定 `github actions` 的运行环境，github 默认会分配一个[服务器](https://help.github.com/en/actions/reference/virtual-environments-for-github-hosted-runners)给我们的构建工作流程使用

Virtual environment |	YAML workflow label
:- | :-
Windows Server 2019 |	windows-latest or windows-2019
Ubuntu 18.04 | ubuntu-latest or ubuntu-18.04
Ubuntu 16.04 | ubuntu-16.04
macOS Catalina 10.15 | macos-latest or macos-10.15

* jobs.<job_id>.steps
  `job` 包含一系列称为 steps 的任务。step可以运行命令，安装依赖、编译代码等

* jobs.<job_id>.steps.name

* jobs.<job_id>.setps.run<br>
  step 需要在 `shell` 执行的命令

```yml
- name: install dependencies
  run: npm install

- name: install and build
  run: |
    npm install
    npm run build
```

* jobs.<job_id>.steps.uses<br>
  选择使用已有的 `action`，有利于代码复用。

```yml
- name: GitHub Checkout
  uses: actions/checkout@v1
```

## 实战

部署 create-react-app 生成的项目：[demo](https://github.com/liuswin/github-actions-demo)
