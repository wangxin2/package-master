# uums 统一用户管理系统

## 开始
### 项目地址 [gitlab上的链接](http://192.168.1.44:8888/framework/package)
- `git clone http://192.168.1.44:8888/framework/package` 
- `npm install` 安装依赖包
- `npm start` 开启开发服务器
- `npm run build` 进行打包
- `npm run build-analyzer` 进行打包与体积分析
- `npm run lint` 运行代码校验
 
## 简介

基于vue-cli@3.0, 并使用
- UI框架 [element-ui](https://element.eleme.cn/2.0/#/zh-CN/component/installation)
- 路由管理 [vue-router]
- HTTP请求 [axios]
- 模拟数据 [mockjs]
- 状态管理 [vuex]


## 目录结构说明
```
uums-package
  - examples - 使用uums包的demo
  - lib - 打包文件
  - src - 主业务代码目录
    - api - 数据的请求方法
    - components - 共用的组件
      - gmDicSelect.vue 字典值下拉框
      - gmDicSpan.vue 字典值span
      - gmTreeSelect.vue 下拉树组件
      - gmPagination.vue 分页组件
    - config - 后台服务的配置
    - modal - 模态框组件
    - plugins - 使用的插件
    - styles - 样式
    - utils - 工具函数存放目录
      - axios.js 对axios的封装
      - common.js 一些公用的方法 全部存储在GM对象中
      - validate.js 对element-ui中表单验证的封装
    - views - 模块组件
      - app-manage - 子系统管理
      - area       - 区域管理
      - dictionary - 字典管理
      - organization - 机构管理 
      - permission - 权限管理
      - role-manage - 角色管理
      - user-manage - 用户管理
    - index.js - 所有模块的引入/导出口
```

## uums包的使用方法
```
example中的引用方式
例如：引用用户管理的模块

创建一个user.vue文件，从lib引入所需组件包
import { UserManage } from '../../lib';
<UserManage></UserManage>
```
## uums功能介绍

### 子系统管理

1. 子系统的增，删，改，查。
2. 子系统信息（系统名称，appKey, 系统地址, 表单地址, 系统图标等）

### 用户管理

1. 用户的增，删，改，查。
2. 用户的角色分配
3. 用户信息（登录名，姓名，联系方式，密码等）
### 角色管理

1. 角色的增，删，改，查。
2. 用户分配
3. 角色信息（角色名称，角色显示名，角色类型等）
### 权限管理

1. 权限（子级权限）的增，删，改，查。
2. 权限信息（子系统，上级权限，权限名称，权限标识符，权限类型等）

### 机构管理

1. 机构（子级机构）的增，删，改，查。
2. 机构信息（上级机构，机构名称，机构编码，机构类型，归属区域，区域类型等）

### 区域管理

1. 区域(子级区域)的增，删，改，查。
2. 区域信息（区域名称，区域编码，区域类型）

### 字典值管理

1. 字典值的增，删，改，查。
2. 字典信息（子系统，上级字典，类型，代码，代码名称）

### 模块间的关系--> word文档

## 开发中遇到的问题

### element-UI的版本问题

1. table组件: v2.9.2+ 新增 tree-props属性（渲染嵌套数据的配置选项）, 树形表格中配置子级数据更加方便。
2. image组件: v.2.8.2+ 才拥有此组件。


