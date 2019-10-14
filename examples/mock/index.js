/**
 * mock 服务的入口
 * @description
 * 开发环境才会引入该服务。
 * 1. mock 服务的配置
 * 2. mock 数据的导入
 * 3. mock 服务的创建
 */
import Mock from 'mockjs';

import { importAll } from '../utils/import-all';

// 将所有的 mock 数据放入数组中
let mockList = [];

// 批量导入 `./data` 下所有的 mock 数据
const requireContext = require.context('./data/', true, /\.js$/);
importAll(requireContext, (item) => {
  const module = requireContext(item);
  mockList = Object.values(module);
});

// eslint-disable-next-line
console.log(`生成的 mock 数据有：\n${mockList.map((item) => item.url).join()}`);

// 配置请求返回的时间
Mock.setup({
  timeout: 1000
});

// 为每一个数据集合创建 mock 服务
mockList.forEach(createMock);

/**
 * 创建 mock 服务方法
 * @param {string} url 请求的 url, 如：/login
 * @param {string} method 请求方式 get/post，默认 get
 * @param {any} response 请求的响应内容
 */
export function createMock({ url, method = 'get', response }) {
  Mock.mock(new RegExp(process.env.VUE_APP_BASE_API + url), method, response);
}
