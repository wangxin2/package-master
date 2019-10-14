import GM from './common';
let validate = {
    // 验证自然数
    naturalNumber: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^(([0-9]*[1-9][0-9]*)|(0+))$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入自然数'));
            }
        }
    },
    // 微信号
    wechat: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的微信号码'));
            }
        }
    },
    // 英文
    english: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^.[A-Za-z]+$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入英文字符'));
            }
        }
    },
    // 座机
    telephone: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/; //座机
            const patt = /^1[34578]\d{9}$/; //手机
            if (reg.test(value) || patt.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的电话号'));
            }
        }
    },
    // 银行卡号码
    bankCard: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[1-9]\d{9,19}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的银行卡号码'));
            }
        }
    },
    // 证件号码
    IDNumber: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[a-z0-9A-Z]{0,50}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的证件号码'));
            }
        }
    },
    // 身份证号码,包括15位和18位的
    IDCard: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{7}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的身份证号码'));
            }
        }
    },
    // QQ号码
    qq: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[1-9]\d{4,11}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确的QQ号码'));
            }
        }
    },
    // 网址, 仅支持http和https开头的
    url: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入以http和https开头的网址'));
            }
        }
    },
    // 0到20位的英文字符和数字
    enNum0to20: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[a-z0-9A-Z]{0,20}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入20位以内的英文字符和数字'));
            }
        }
    },
    // 2到100位的中英文字符和空格
    cnEnSpace2to100: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[a-zA-Z\u4E00-\u9FA5\s*]{2,100}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入2到100位的中英文字符和空格'));
            }
        }
    },
    // 数字和换行符
    numLinefeed: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[0-9\n*]+$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入数字和换行符'));
            }
        }
    },
    // 255位以内的字符
    char0to255: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^.{0,255}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入255位以内的字符'));
            }
        }
    },
    // 特殊字符
    specialChar: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[^`~!@#$^&*()=|{}':;',/\\[\].<>?]*$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请删除特殊字符'));
            }
        }
    },
    // 保留两位小数
    twoDecimal: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,2})))$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('小数点保留最多两位'));
            }
        }
    },
    // 用户名 第一个是字母,长度是4-20
    loginname: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[a-zA-Z]\w{3,19}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('字母开头，长度为4-20'));
            }
        }
    },
    // 密码  6-20位字母，数字和符号两种以上组合
    password: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            // const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*_,]+$)[a-zA-Z\d!@#$%^&*_,]+$/g;
            const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*_,]+$)[a-zA-Z\d!@#$%^&*_,]{6,20}$/g;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('6-20位字母，数字和符号两种以上组合'));
            }
        }
    },
    // 必填
    required: {
        required: true,
        message: '必填'
    },
    phone: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^((0\d{2,3}-\d{7,8})|((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8})$/g;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('必须为合法电话'));
            }
        }
    },
    // 汉字加字字母
    normalchar: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /([\u4e00-\u9fa5]|\w)+$/g;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('只能为汉字数字字母'));
            }
        }
    },
    // email
    email: {
        type: 'email',
        message: '请输入正确的邮箱'
    },
    // 数值
    number: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^\d*(\.\d+)?$/g;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('只能是数字'));
            }
        }
    },
    // 正整数
    zhengnumber: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^([1-9]\d*|[0]{1,1})$/g;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('只能是正整数和0'));
            }
        }
    },
    // 验证密码一致
    compareToFirstPassword: {
        validator: (rule, value, callback) => {
            const getFieldValue = this.props.form;
            if (value && value !== getFieldValue('password')) {
                const msg = '两次输入不一致!';
                callback(new Error('msg'));
            } else {
                callback();
            }
        }
    },
    isExternal: (path) => {
        return /^(https?:|mailto:|tel:)/.test(path);
    },
    // 邮政编码验证
    postalcode: {
        validator: (rule, value, callback) => {
            if (GM.CommonOper.isStrNullOrEmpty(value)) {
                callback();
            }
            const reg = /^[1-9][0-9]{5}$/g;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('必须为合法邮政编码'));
            }
        }
    }
}
export default validate;
