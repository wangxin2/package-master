<template>
	<div id="app">
		<el-container>
			<el-header>
				头部
			</el-header>
			<el-container>
				<el-aside width="200px">
					<el-menu
						router
						class="el-menu-vertical-demo">
						<el-menu-item index="/permission">
							<i class="el-icon-menu"></i>
							<span slot="title">权限管理</span>
						</el-menu-item>
						<el-menu-item index="/role">
							<i class="el-icon-document"></i>
							<span slot="title">角色管理</span>
						</el-menu-item>
						<el-menu-item index="/user">
							<i class="el-icon-setting"></i>
							<span slot="title">用户管理</span>
						</el-menu-item>
						<el-menu-item index="/application">
							<i class="el-icon-setting"></i>
							<span slot="title">子系统管理</span>
						</el-menu-item>
						<el-menu-item index="/dictionary">
							<i class="el-icon-setting"></i>
							<span slot="title">字典管理</span>
						</el-menu-item>
						<el-menu-item index="/orgnization">
							<i class="el-icon-setting"></i>
							<span slot="title">机构管理</span>
						</el-menu-item>
						<el-menu-item index="/area">
							<i class="el-icon-setting"></i>
							<span slot="title">区域管理</span>
						</el-menu-item>
						<el-menu-item index="/test">
							<i class="el-icon-setting"></i>
							<span slot="title">测试</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
				<el-container>
					<router-view />
				</el-container>
			</el-container>
			<el-footer>尾部</el-footer>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	},
	data() {
		return {
			config: {
				UNIFY_IP: 'http://192.168.5.43:8189/',
				// LOGIN_SERVER: 'http://wh.greatmap.com.cn:5050/gm-sso-server/', // 单点登录服务路劲
				LOGIN_SERVER: 'http://wh.greatmap.com.cn:8005/gm-sso-server/', // 单点登录服务路劲    
				// UUMS_SERVER: 'http://wh.greatmap.com.cn:8005/uums-server/',
				UUMS_SERVER: 'http://wh.greatmap.com.cn:8005/uums-server/',
				// UUMS_SERVER: 'http://wh.greatmap.com.cn:5050/uums-server/',
				FMS_SERVER: 'http://192.168.5.35:82/fms-server/', // FMS服务
				LOGIN_PATH: 'http://wh.greatmap.com.cn:8005/ldimp/gs-login',
				// LOGIN_PATH: 'http://wh.greatmap.com.cn:5050/ldimp/gs-login',
				APP_KEY: 'gm-uums'
			},
			dicList: [
				{
					"id": "148926be001940be9b9980c19459ebb5",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "2c4ec9a2f6c348209c1184f4eea307de",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "148926be001940be9b9980c19459ebb5",
							"pids": "148926be001940be9b9980c19459ebb5,",
							"value": "0",
							"label": "滞后",
							"type": "优先级",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "2e8266a104c744fe825fcff215b04334",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "148926be001940be9b9980c19459ebb5",
							"pids": "148926be001940be9b9980c19459ebb5,",
							"value": "2",
							"label": "优先",
							"type": "优先级",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "6f8beb3f749e4fe09c028d2eb92c8c71",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "148926be001940be9b9980c19459ebb5",
							"pids": "148926be001940be9b9980c19459ebb5,",
							"value": "1",
							"label": "正常",
							"type": "优先级",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "优先级",
					"type": "优先级",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "2c07fd0481954cdab39046e7497590f1",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "52059bc905f84bfd9e09f2ec5260d36f",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "2c07fd0481954cdab39046e7497590f1",
							"pids": "2c07fd0481954cdab39046e7497590f1,",
							"value": "3",
							"label": "查询",
							"type": "角色类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "655fdcc3c6264080a0dbe9ea0ff8a8be",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "2c07fd0481954cdab39046e7497590f1",
							"pids": "2c07fd0481954cdab39046e7497590f1,",
							"value": "1",
							"label": "监管",
							"type": "角色类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "b8442188be7a4169af007450dd79e2b8",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "2c07fd0481954cdab39046e7497590f1",
							"pids": "2c07fd0481954cdab39046e7497590f1,",
							"value": "2",
							"label": "审核",
							"type": "角色类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "d19f8d0255f54a4887b93bf3398b4b59",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "2c07fd0481954cdab39046e7497590f1",
							"pids": "2c07fd0481954cdab39046e7497590f1,",
							"value": "0",
							"label": "管理员",
							"type": "角色类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "角色类型",
					"type": "属性值字典",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "409711b4e5e54f8b8b3ce4f4787bbbbc",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "172a3fdfb7344d65b9e97649f6fd7f9e",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "409711b4e5e54f8b8b3ce4f4787bbbbc",
							"pids": "409711b4e5e54f8b8b3ce4f4787bbbbc,",
							"value": "0",
							"label": "否",
							"type": "是否",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "39604e235586445083ea7f5bce01e165",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "409711b4e5e54f8b8b3ce4f4787bbbbc",
							"pids": "409711b4e5e54f8b8b3ce4f4787bbbbc,",
							"value": "1",
							"label": "是",
							"type": "是否",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": "",
					"label": "是否",
					"type": "属性值字典",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "81f38d54186841a88f6e269537e26279",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "239df2128d20486f8af99b9085cca26e",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "81f38d54186841a88f6e269537e26279",
							"pids": "81f38d54186841a88f6e269537e26279,",
							"value": "1",
							"label": "景区",
							"type": "知识库类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "e9628889491b4ae9a9a9d966fce7c559",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "81f38d54186841a88f6e269537e26279",
							"pids": "81f38d54186841a88f6e269537e26279,",
							"value": "2",
							"label": "旅行社",
							"type": "知识库类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "fe68dae071bd4183ba41c56b18e9b1d4",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "81f38d54186841a88f6e269537e26279",
							"pids": "81f38d54186841a88f6e269537e26279,",
							"value": "3",
							"label": "酒店",
							"type": "知识库类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "知识库分类",
					"type": "属性值字典",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "948a5fa9afd842c0a21e9f32b2d844b1",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "11edd564e38b4c10ab4a373e5c6877d2",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "948a5fa9afd842c0a21e9f32b2d844b1",
							"pids": "948a5fa9afd842c0a21e9f32b2d844b1,",
							"value": "1",
							"label": "已发布",
							"type": "发布状态",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "afa19fb351d04bb48e3e558b894dcdcc",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "948a5fa9afd842c0a21e9f32b2d844b1",
							"pids": "948a5fa9afd842c0a21e9f32b2d844b1,",
							"value": "0",
							"label": "未发布",
							"type": "发布状态",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "发布状态",
					"type": "发布状态",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "970f05218fef442297f0b2986868e874",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "1d1311055ff84336a42c491796b8a825",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "07",
							"label": "服务态度",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "2d54ed697a2f4e709b1efa0b3389d9bd",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "10",
							"label": "合同纠纷",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "2d59fc436b9a4329963e3c5fb7a09240",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "03",
							"label": "年票",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "4cf8152d1053408794b5c06f8fd8053e",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "09",
							"label": "服务设施",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "73683dd896094f928726178be9092426",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "06",
							"label": "周边乱象",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "73b308e708054c848dc5e8156cb7b501",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "01",
							"label": "门票",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "85d16d9bfef1416e909505a61cf95ae6",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "12",
							"label": "非旅行社",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "aab7b1dee73d4f6eaf745afd6556524b",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "99",
							"label": "其它",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "b2075ea3e3df4fafad88ffb32f2d9169",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "04",
							"label": "收费问题",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "b25c9f5684f249d48f9604f51c2c5da6",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "05",
							"label": "强制消费",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "c32ca11e80f947a0a822799d14c6722f",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "02",
							"label": "小交通",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "d0b903be5c62473984d7440f0736e70f",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "11",
							"label": "低价团",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "f7c52427da234487bfed778fca77c156",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "970f05218fef442297f0b2986868e874",
							"pids": "970f05218fef442297f0b2986868e874,",
							"value": "08",
							"label": "安全设施",
							"type": "投诉类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": "投诉类型",
					"label": "投诉类型",
					"type": "投诉类型",
					"description": "投诉类型",
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "d839131a0a0b4349a59ed393651023a1",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "5590f5dc9eee4577b4acc0cfd42a639a",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "d839131a0a0b4349a59ed393651023a1",
							"pids": "d839131a0a0b4349a59ed393651023a1,",
							"value": "2",
							"label": "女",
							"type": "性别",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "99df6fb6a7ed4ec690f486d45c6c42c2",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "d839131a0a0b4349a59ed393651023a1",
							"pids": "d839131a0a0b4349a59ed393651023a1,",
							"value": "1",
							"label": "男",
							"type": "性别",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "性别",
					"type": "属性值字典",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "dc771a6cb45d46dd8ac9c317bb7e1126",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "018ba5232f0b4cbfa7154ede4c075508",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc771a6cb45d46dd8ac9c317bb7e1126",
							"pids": "dc771a6cb45d46dd8ac9c317bb7e1126,",
							"value": "1",
							"label": "风景",
							"type": "公告类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "57affb9b34f3429c90deda943071c634",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc771a6cb45d46dd8ac9c317bb7e1126",
							"pids": "dc771a6cb45d46dd8ac9c317bb7e1126,",
							"value": "4",
							"label": "门票",
							"type": "公告类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "aec52ffb70db4c25b28b35e0c5489ec4",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc771a6cb45d46dd8ac9c317bb7e1126",
							"pids": "dc771a6cb45d46dd8ac9c317bb7e1126,",
							"value": "3",
							"label": "交通",
							"type": "公告类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "f410071c7436452781a6a19309574be1",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc771a6cb45d46dd8ac9c317bb7e1126",
							"pids": "dc771a6cb45d46dd8ac9c317bb7e1126,",
							"value": "2",
							"label": "新闻",
							"type": "公告类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "公告类型",
					"type": "公告类型",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				}, {
					"id": "dc8bb59a14c64ed281599550a8f440d6",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": null,
					"parent": null,
					"childrens": [
						{
							"id": "1a1e536dc5994c31aad159b6c2ce23c7",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc8bb59a14c64ed281599550a8f440d6",
							"pids": "dc8bb59a14c64ed281599550a8f440d6,",
							"value": "2",
							"label": "子系统权限",
							"type": "权限类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "b483d179c13444e08cca1f0b7162e2b2",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc8bb59a14c64ed281599550a8f440d6",
							"pids": "dc8bb59a14c64ed281599550a8f440d6,",
							"value": "0",
							"label": "菜单权限",
							"type": "权限类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}, {
							"id": "e3b47fdde1264adbbb44064ac1b8b4dc",
							"ctime": null,
							"utime": null,
							"status": 1,
							"orders": null,
							"parent": null,
							"childrens": null,
							"pid": "dc8bb59a14c64ed281599550a8f440d6",
							"pids": "dc8bb59a14c64ed281599550a8f440d6,",
							"value": "1",
							"label": "资源权限",
							"type": "权限类型",
							"description": null,
							"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
						}
					],
					"pid": null,
					"pids": "",
					"value": "",
					"label": "权限类型",
					"type": "属性值字典",
					"description": null,
					"appId": "e9ff23a439b1496cbaf9be6ec974e60e"
				},
				{
					"id": "d263caffbde34f058522d675d4011575",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": 19,
					"parent": null,
					"childrens": [
						{
						"id": "1230de675f9f4f839c888ad5075a3c1f",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 20,
						"parent": null,
						"childrens": null,
						"pid": "d263caffbde34f058522d675d4011575",
						"pids": "d263caffbde34f058522d675d4011575,",
						"value": "1",
						"label": "国家",
						"type": "区域类型",
						"description": "区域类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
						},
						{
						"id": "e7db9fd42ca44dbd842b2240702cda7c",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 21,
						"parent": null,
						"childrens": null,
						"pid": "d263caffbde34f058522d675d4011575",
						"pids": "d263caffbde34f058522d675d4011575,",
						"value": "2",
						"label": "省份、直辖市",
						"type": "区域类型",
						"description": "区域类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
						},
						{
						"id": "ed7406caa44540ff995a44a7b6a568c1",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 22,
						"parent": null,
						"childrens": null,
						"pid": "d263caffbde34f058522d675d4011575",
						"pids": "d263caffbde34f058522d675d4011575,",
						"value": "3",
						"label": "地市",
						"type": "区域类型",
						"description": "区域类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
						},
						{
						"id": "e87ac49b44334ce48157739fb5ec4d56",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 23,
						"parent": null,
						"childrens": null,
						"pid": "d263caffbde34f058522d675d4011575",
						"pids": "d263caffbde34f058522d675d4011575,",
						"value": "4",
						"label": "区县",
						"type": "区域类型",
						"description": "区域类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
						}
					],
					"pid": null,
					"pids": "",
					"value": null,
					"label": "区域类型",
					"type": "属性值字典",
					"description": "属性值字典",
					"appId": "f5343dc38b5946ddb54a39139995d192"
				},
				{
					"id": "40769466c339450fbd187f9712faa340",
					"ctime": null,
					"utime": null,
					"status": 1,
					"orders": 16,
					"parent": null,
					"childrens": [
					{
						"id": "39ee95352837410c947bed211d99a60c",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 1,
						"parent": null,
						"childrens": null,
						"pid": "40769466c339450fbd187f9712faa340",
						"pids": "40769466c339450fbd187f9712faa340,",
						"value": "4",
						"label": "旅行社",
						"type": "机构类型",
						"description": "机构类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
					},
					{
						"id": "819639225b284c7c8b292bcde59a56de",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 1,
						"parent": null,
						"childrens": null,
						"pid": "40769466c339450fbd187f9712faa340",
						"pids": "40769466c339450fbd187f9712faa340,",
						"value": "5",
						"label": "酒店",
						"type": "机构类型",
						"description": "机构类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
					},
					{
						"id": "d0c28c15c5c148a885f77af9056b1f94",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 1,
						"parent": null,
						"childrens": null,
						"pid": "40769466c339450fbd187f9712faa340",
						"pids": "40769466c339450fbd187f9712faa340,",
						"value": "3",
						"label": "景区",
						"type": "机构类型",
						"description": "机构类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
					},
					{
						"id": "d6e057a3355141c98e2df5ed05360528",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 17,
						"parent": null,
						"childrens": null,
						"pid": "40769466c339450fbd187f9712faa340",
						"pids": "40769466c339450fbd187f9712faa340,",
						"value": "1",
						"label": "机构",
						"type": "机构类型",
						"description": "机构类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
					},
					{
						"id": "5204de7fe80e4d9486b34f66e8c4def1",
						"ctime": null,
						"utime": null,
						"status": 1,
						"orders": 18,
						"parent": null,
						"childrens": null,
						"pid": "40769466c339450fbd187f9712faa340",
						"pids": "40769466c339450fbd187f9712faa340,",
						"value": "2",
						"label": "部门",
						"type": "机构类型",
						"description": "机构类型",
						"appId": "f5343dc38b5946ddb54a39139995d192"
					}
					],
					"pid": null,
					"pids": null,
					"value": null,
					"label": "机构类型",
					"type": "属性值字典",
					"description": "属性值字典",
					"appId": "f5343dc38b5946ddb54a39139995d192"
				},
			]
		};
	},
	provide() {
		return {
			config: this.config,
			dicList: this.dicList
		}
	},
	methods: {
	}
};
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	body,
	html {
		height: 100%;
		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}
	#app {
		font-family: Monaco;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		height: 100%;
	}
</style>

<style lang="scss" scoped>
.el-container{
  	height: 100%;
}
.el-header,.el-aside,.el-footer{
  	background: #f5f5f5;
}
</style>
