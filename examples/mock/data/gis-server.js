/**
 * gis-server mock
 * @description
 * 1. url = '/example'
 * 2. method = 'get'
 * 3. response = [object]
 */

// 模拟数据
export const mapConfigData = {
  url: '/mapConfig',
  method: 'get',
  response: {
    code: 200,
    data: [
      {
        DL: 'X',
        XZQHDM: '510183',
        ZT: 'TDXZ',
        BLC: 'G',
        ND: '2017',
        DES: {
          X: '现状',
          TDXZ: '土地利用现状',
          XZQHMC: '邛崃',
          G: '1:10000'
        },
        LAYERS: {
          PZWJSTD: '批准未建设土地',
          DLTB: '地类图斑',
          XZQ: '行政区'
        }
      }
    ]
  }
};
