/**
 * 目录下所有文件中模块的批量处理
 * @param {function} r 导出函数，require.context() 的返回内容
 * @param {function} callback 得到导入的文件后的回调，默认为第一个参数 `r`
 */
export function importAll(r, callback = r) {
  r.keys().forEach(callback);
}
