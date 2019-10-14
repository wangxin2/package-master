/**
 * 代理配置
 * @description
 * 具体配置项参考：https://cli.vuejs.org/zh/config/#devserver-proxy
 */

const gisServer = 'https://server.tyht.com';

module.exports = {
  // 普通的接口代理
  '/api': {
    target: process.env.VUE_APP_BASE_HOST
  },
  /**
   * 内网的 gis-server 代理
   * 1. 所有以 `/gisServer` 开头的接口将被代理。
   * 2. 接口中的 gisServer 开头在代理发送正式时会被去掉，真实路径中不包含这个名字。
   * 3. router 中匹配特殊的路径的接口，例如 6443 端口。
   */
  '/gisServer': {
    target: gisServer,
    pathRewrite: {
      '^/gisServer': ''
    },
    // 特殊接口，使用端口 6443
    router: {
      '/gisServer/arcgis': `${gisServer}:6443`
    }
  }
};
