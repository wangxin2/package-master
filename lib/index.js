import 'core-js/modules/es6.regexp.split';
import 'element-ui/lib/theme-chalk/message-box.css';
import 'element-ui/lib/theme-chalk/base.css';
import _MessageBox from 'element-ui/lib/message-box';
import 'element-ui/lib/theme-chalk/message.css';
import _Message from 'element-ui/lib/message';
import 'element-ui/lib/theme-chalk/loading.css';
import _Loading from 'element-ui/lib/loading';
import 'element-ui/lib/theme-chalk/col.css';
import _Col from 'element-ui/lib/col';
import 'element-ui/lib/theme-chalk/row.css';
import _Row from 'element-ui/lib/row';
import 'element-ui/lib/theme-chalk/icon.css';
import _Icon from 'element-ui/lib/icon';
import 'element-ui/lib/theme-chalk/tree.css';
import _Tree from 'element-ui/lib/tree';
import 'element-ui/lib/theme-chalk/popover.css';
import _Popover from 'element-ui/lib/popover';
import 'element-ui/lib/theme-chalk/option-group.css';
import _OptionGroup from 'element-ui/lib/option-group';
import 'element-ui/lib/theme-chalk/option.css';
import _Option from 'element-ui/lib/option';
import 'element-ui/lib/theme-chalk/select.css';
import _Select from 'element-ui/lib/select';
import 'element-ui/lib/theme-chalk/radio-group.css';
import _RadioGroup from 'element-ui/lib/radio-group';
import 'element-ui/lib/theme-chalk/radio.css';
import _Radio from 'element-ui/lib/radio';
import 'element-ui/lib/theme-chalk/input.css';
import _Input from 'element-ui/lib/input';
import 'element-ui/lib/theme-chalk/button.css';
import _Button from 'element-ui/lib/button';
import 'element-ui/lib/theme-chalk/tab-pane.css';
import _TabPane from 'element-ui/lib/tab-pane';
import 'element-ui/lib/theme-chalk/tabs.css';
import _Tabs from 'element-ui/lib/tabs';
import 'element-ui/lib/theme-chalk/form-item.css';
import _FormItem from 'element-ui/lib/form-item';
import 'element-ui/lib/theme-chalk/form.css';
import _Form from 'element-ui/lib/form';
import 'element-ui/lib/theme-chalk/table-column.css';
import _TableColumn from 'element-ui/lib/table-column';
import 'element-ui/lib/theme-chalk/table.css';
import _Table from 'element-ui/lib/table';
import 'element-ui/lib/theme-chalk/footer.css';
import _Footer from 'element-ui/lib/footer';
import 'element-ui/lib/theme-chalk/main.css';
import _Main from 'element-ui/lib/main';
import 'element-ui/lib/theme-chalk/aside.css';
import _Aside from 'element-ui/lib/aside';
import 'element-ui/lib/theme-chalk/header.css';
import _Header from 'element-ui/lib/header';
import 'element-ui/lib/theme-chalk/container.css';
import _Container from 'element-ui/lib/container';
import 'element-ui/lib/theme-chalk/dialog.css';
import _Dialog from 'element-ui/lib/dialog';
import 'element-ui/lib/theme-chalk/pagination.css';
import _Pagination from 'element-ui/lib/pagination';
import Vue from 'vue';
import 'core-js/modules/es6.function.name';
import 'core-js/modules/es7.symbol.async-iterator';
import 'core-js/modules/es6.symbol';
import 'core-js/modules/web.dom.iterable';
import 'core-js/modules/es6.array.find';
import 'core-js/modules/es6.regexp.constructor';
import 'core-js/modules/es6.regexp.to-string';
import 'core-js/modules/es6.regexp.replace';
import $ from 'jquery';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import isArray$1 from 'core-js/library/fn/array/is-array';
import getIterator$1 from 'core-js/library/fn/get-iterator';
import 'util';

Vue.use(_Pagination);
Vue.use(_Dialog);
Vue.use(_Container);
Vue.use(_Header);
Vue.use(_Aside);
Vue.use(_Main);
Vue.use(_Footer);
Vue.use(_Table);
Vue.use(_TableColumn);
Vue.use(_Form);
Vue.use(_FormItem);
Vue.use(_Tabs);
Vue.use(_TabPane);
Vue.use(_Button);
Vue.use(_Input);
Vue.use(_Radio);
Vue.use(_RadioGroup);
Vue.use(_Select);
Vue.use(_Option);
Vue.use(_OptionGroup);
Vue.use(_Popover);
Vue.use(_Tree);
Vue.use(_Icon);
Vue.use(_Row);
Vue.use(_Col);
Vue.use(_Loading.directive);
Vue.prototype.$loading = _Loading.service;
Vue.prototype.$message = _Message;
Vue.prototype.$confirm = _MessageBox.confirm;

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "[class*=\" webgis-\"],[class^=webgis-]{-webkit-box-sizing:border-box;box-sizing:border-box}.webgis-transition-fade-enter-active,.webgis-transition-fade-leave-active{-webkit-transition:all .3s;transition:all .3s}.webgis-transition-fade-enter,.webgis-transition-fade-leave-to{opacity:0}.webgis-absolute-layer{position:absolute;z-index:1}.webgis-box-shadow-default{-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.webgis-box-shadow-base{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04)}.webgis-list-unstyled{list-style-type:none;padding-left:0}";
styleInject(css);

var css$1 = "@media only screen and (min-width:1080px){html{font-size:5.73px!important}}@media only screen and (min-width:1260px){html{font-size:6.667px!important}}@media only screen and (min-width:1346px){html{font-size:7.5px!important}}@media only screen and (min-width:1660px){html{font-size:8.75px!important}}@media only screen and (min-width:1900px){html{font-size:10px!important}}.container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;padding:15px 15px 0}.container .el-form-item{margin-bottom:18px}.container .radio-wrap{padding:10px 0}.container .el-main{padding:0;margin-top:10px}.container .table .el-table__body-wrapper::-webkit-scrollbar{width:6px;height:6px}.container .table .el-table__body-wrapper::-webkit-scrollbar-thumb{background-color:rgba(144,147,153,.3);border-radius:4px}.container .table .el-button+.el-button{margin-left:20px}.container .table .el-button--text{padding:0}.container .table th{background-color:#f2f7ff;color:#333;font-weight:400}.el-pagination{margin-top:10px}.el-dialog .el-dialog__header{padding:1rem 2rem;border-bottom:1px solid #ddd}.el-dialog .el-dialog__header .el-dialog__title{font-size:2rem}.el-dialog .el-dialog__header .el-dialog__headerbtn{top:1.5rem;right:2rem}.el-dialog .el-dialog__body{padding:2rem 1.5rem;font-size:1.6rem}.el-dialog .el-dialog__body .el-form .el-form-item.title{margin-bottom:1rem}.el-dialog .el-dialog__body .el-form .el-form-item.title .el-form-item__content{font-size:2rem;margin-left:2rem!important;font-weight:800}.el-dialog .el-dialog__body .el-form .el-form-item.title label{font-size:2rem;line-height:4rem}.el-dialog .el-dialog__body .el-form .el-form-item{margin:0 2rem 2rem}.el-dialog .el-dialog__body .el-form .el-form-item label{font-size:1.8rem;line-height:4rem;padding:0 1.5rem 0 0}.el-dialog .el-dialog__footer{padding:1rem 3rem 2rem;border-top:1px solid #ddd}.el-dialog .el-select{width:100%}::-webkit-scrollbar{width:6px;height:6px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{background-color:rgba(144,147,153,.3);border-radius:4px}";
styleInject(css$1);

var script = {
  name: 'gmTreeSelect',
  model: {
    prop: 'value',
    event: 'selected'
  },
  props: {
    value: String,
    width: String,
    treeData: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: '请选择'
    },
    props: {
      type: Object,
      required: false,
      default: function _default() {
        return {
          value: 'value',
          label: 'label',
          children: 'children'
        };
      }
    }
  },
  data: function data() {
    return {
      showStatus: false,
      treeWidth: 'auto',
      labelModel: '',
      valueModel: ''
    };
  },
  watch: {
    labelModel: function labelModel(val) {
      if (!val) {
        this.valueModel = '';
      }

      this.$refs.tree.filter(val);
    },
    value: function value(val) {
      this.labelModel = this.queryTree(this.treeData, val);
    }
  },
  created: function created() {
    var _this = this;

    if (this.value) {
      this.labelModel = this.queryTree(this.treeData, this.value);
    }

    this.$nextTick(function () {
      _this.treeWidth = "".concat((_this.width || _this.$refs.input.$refs.input.clientWidth) - 24, "px");
    });
  },
  methods: {
    onClickNode: function onClickNode(node) {
      this.labelModel = node[this.props.label];
      this.valueModel = node[this.props.value];
      this.onCloseTree();
    },
    onCloseTree: function onCloseTree() {
      this.$refs.popover.showPopper = false;
    },
    onShowPopover: function onShowPopover() {
      this.showStatus = true;
      this.$refs.tree.filter(false);
    },
    onHidePopover: function onHidePopover() {
      this.showStatus = false;
      this.$emit('selected', this.valueModel);
    },
    filterNode: function filterNode(query, data) {
      if (!query) return true;
      return data[this.props.label].indexOf(query) !== -1;
    },
    queryTree: function queryTree(tree, id) {
      var stark = [];
      stark = stark.concat(tree);

      while (stark.length) {
        var temp = stark.shift();

        if (temp[this.props.children]) {
          stark = stark.concat(temp[this.props.children]);
        }

        if (temp[this.props.value] === id) {
          return temp[this.props.label];
        }
      }

      return '';
    }
  }
};

var css$2 = ".el-input.el-input--suffix[data-v-106ba2ef]{cursor:pointer;overflow:hidden}.el-input.el-input--suffix.rotate .el-input__suffix[data-v-106ba2ef]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.select-tree[data-v-106ba2ef]{max-height:200px;overflow-y:scroll}.select-tree[data-v-106ba2ef]::-webkit-scrollbar{z-index:11;width:6px}.select-tree[data-v-106ba2ef]::-webkit-scrollbar-corner,.select-tree[data-v-106ba2ef]::-webkit-scrollbar-track{background:#fff}.select-tree[data-v-106ba2ef]::-webkit-scrollbar-thumb{border-radius:5px;width:6px;background:#b4bccc}.select-tree[data-v-106ba2ef]::-webkit-scrollbar-track-piece{background:#fff;width:6px}";
styleInject(css$2);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }

  var options = typeof script === 'function' ? script.options : script;

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }

  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    hook = function hook(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }

      if (style) {
        style.call(this, createInjectorSSR(context));
      }

      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };

    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-popover",
    {
      ref: "popover",
      attrs: { placement: "bottom-start", trigger: "click" },
      on: { show: _vm.onShowPopover, hide: _vm.onHidePopover }
    },
    [
      _c("el-tree", {
        ref: "tree",
        staticClass: "select-tree",
        style: "min-width: " + _vm.treeWidth,
        attrs: {
          data: _vm.treeData,
          "expand-on-click-node": false,
          "filter-node-method": _vm.filterNode,
          "default-expand-all": false,
          "highlight-current": "",
          props: _vm.props
        },
        on: { "node-click": _vm.onClickNode }
      }),
      _c("el-input", {
        ref: "input",
        class: { rotate: _vm.showStatus },
        style: "width: " + _vm.width + "px",
        attrs: {
          slot: "reference",
          clearable: "",
          "suffix-icon": "el-icon-arrow-down",
          placeholder: _vm.placeholder
        },
        slot: "reference",
        model: {
          value: _vm.labelModel,
          callback: function($$v) {
            _vm.labelModel = $$v;
          },
          expression: "labelModel"
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-106ba2ef";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var gmTreeSelect = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var script$1 = {
  name: 'gmPagination',
  props: {
    config: Object
  },
  data: function data() {
    return {
      currentPage: '',
      sizes: '',
      pagesize: '',
      total: '99999',
      layout: 'prev, pager, next',
      pagesizes: []
    };
  },
  created: function created() {
    this.currentPage = this.config.currentPage ? this.config.currentPage : 1;
    this.sizes = this.config.sizes ? this.config.sizes : 10;
    this.pagesize = this.config.pagesize ? this.config.pagesize : 10;
    this.total = this.config.total ? this.config.total : 0;

    if (this.config.layout && this.config.layout.length > 0) {
      this.getLayout();
    } else {
      this.layout = this.layout + ',total,jumper';
    }

    if (this.layout.indexOf('sizes') !== -1) {
      this.getPagesizes();
    }
  },
  watch: {
    'config.total': function configTotal(val) {
      if (val !== this.total) {
        this.total = val;
      }
    },
    'config': function config(val) {
      this.currentPage = val.currentPage;
    }
  },
  methods: {
    getLayout: function getLayout() {
      for (var i = 0; i < this.config.layout.length; i++) {
        this.layout = this.layout + ',' + this.config.layout[i];
      }
    },
    getPagesizes: function getPagesizes() {
      for (var i = 0; i < 3; i++) {
        if (i === 0) {
          this.pagesizes[i] = this.pagesize;
        } else {
          this.pagesizes[i] = this.pagesize + this.sizes * i;
        }
      }
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.$emit("changeCurrent", val);
    },
    handleSizeChange: function handleSizeChange(val) {
      this.$emit("changeSize", val);
    }
  }
};

var css$3 = ".pagination-container[data-v-ff3f121a]{background:#fff;padding:5px 0}";
styleInject(css$3);

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "pagination-container" },
    [
      _vm.total < "99999"
        ? _c("el-pagination", {
            attrs: {
              "current-page": _vm.currentPage,
              "page-sizes": _vm.pagesizes,
              "page-size": _vm.pagesize,
              layout: _vm.layout,
              total: _vm.total
            },
            on: {
              "current-change": _vm.handleCurrentChange,
              "size-change": _vm.handleSizeChange
            }
          })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = "data-v-ff3f121a";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var gmPagination = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var script$2 = {
  name: 'gmDicSpan',
  props: {
    type: String,
    binddata: String,
    data: Array
  },
  data: function data() {
    return {
      dicSpan: ''
    };
  },
  watch: {
    binddata: function binddata(value) {
      var _this = this;

      if (this.data) {
        var dicArr = this.data.find(function (item) {
          return item.label === _this.type;
        });
        var filterObj = dicArr.childrens.filter(function (item) {
          return item.value === value;
        });

        if (filterObj.length > 0) {
          this.dicSpan = filterObj[0].label;
        } else {
          this.dicSpan = '';
        }
      }
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.type) {
      if (this.data) {
        var dicArr = this.data.find(function (item) {
          return item.label === _this2.type;
        });

        if (dicArr.childrens) {
          var filterObj = dicArr.childrens.filter(function (item) {
            return item.value === _this2.binddata;
          });

          if (filterObj.length > 0) {
            this.dicSpan = filterObj[0].label;
          } else {
            this.dicSpan = '';
          }
        }
      }
    }
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", [_vm._v(_vm._s(_vm.dicSpan))])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var gmDicSpan = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var GM$1 = {};
window.GM = GM$1;
GM$1.CommonOper = {
  extend: function extend(dest) {
    var sources = Array.prototype.slice.call(arguments, 1);
    var i;
    var j;
    var len;
    var src;

    for (j = 0, len = sources.length; j < len; j++) {
      src = sources[j] || {};

      for (i in src) {
        if (src.hasOwnProperty(i)) {
          dest[i] = src[i];
        }
      }
    }

    return dest;
  },
  isStrNullOrEmpty: function isStrNullOrEmpty(str) {
    if (str == null) {
      return true;
    }

    if (!this.isString(str)) {
      return false;
    }

    var bEmpty = true;
    var pTempStr = GM$1.CommonOper.trimStr(str);

    for (var ii = 0; ii < pTempStr.length; ii++) {
      var pTempChar = pTempStr[ii];

      if (pTempChar !== ' ' && pTempChar !== '↵') {
        bEmpty = false;
        break;
      }
    }

    return bEmpty;
  },
  trimStr: function trimStr(str) {
    if (str == null || !this.isString(str)) {
      return str;
    }

    var pTempStr = str.replace(/(^\r\n*)|(\r\n*$)/g, '');
    pTempStr = pTempStr.replace(/(^\n*)|(\n*$)/g, '');
    pTempStr = pTempStr.replace(/(^\s*)|(\s*$)/g, '');
    pTempStr = pTempStr.replace(/(^\r*)|(\r*$)/g, '');
    return pTempStr;
  },
  isString: function isString(obj) {
    if (obj == null) {
      return false;
    }

    return Object.prototype.toString.call(obj) === '[object String]';
  },
  isFunction: function isFunction(pObj) {
    if (!pObj) {
      return false;
    }

    var bMethod = Object.prototype.toString.call(pObj) === '[object Function]';
    return bMethod;
  },
  getParamFromUrlOrCookie: function getParamFromUrlOrCookie(strName, strCookieName) {
    var strValue = null;
    strCookieName = strCookieName == null ? strName : strCookieName;
    var strUrl = window.location.href;
    var pParams = GM$1.LayoutOper.getURLParams(strUrl);

    if (pParams[strName]) {
      strValue = pParams[strName];
    } else {
      strValue = this.getCookie(strCookieName);
    }

    return strValue;
  },
  getCookie: function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split('; ');

    for (var i = 0; i < arrCookie.length; i++) {
      var arr = arrCookie[i].split('=');

      if (arr[0] === name) {
        return unescape(arr[1]);
      }
    }

    return '';
  },
  addCookie: function addCookie(name, value, expiresDays) {
    var cookieString = name + '=' + escape(value);

    if (expiresDays > 0) {
      var date = new Date();
      date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
      cookieString = cookieString + ';expires=' + date.toGMTString();
    }

    cookieString += ';path=/';
    document.cookie = cookieString;
  },
  removeCookie: function removeCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 1);
    var cookieString = name + '=temp' + ';expires=' + date.toGMTString();
    cookieString += ';path=/';
    document.cookie = cookieString;
  },
  trimEnd: function trimEnd(str, c) {
    if (!c || c == null || c === '') {
      return c;
    } else {
      var rg = new RegExp(c);
      var i = str.length;

      while (rg.test(str.charAt(--i))) {
      }

      return str.slice(0, i + 1);
    }
  },
  ajaxRequest: function ajaxRequest(strUrl, pData, settings, bAddToken) {
    var result = null;
    var header = {};

    if (bAddToken !== false) {
      header.token = GM$1.token;
    }

    if (settings && settings.type && settings.type.toUpperCase() === 'GET') {
      var strTime = new Date().getTime();
      strUrl = GM$1.LayoutOper.addURLParam(strUrl, 'timestamplp', strTime);
    }

    var defaultSettings = {
      type: 'post',
      url: strUrl,
      data: pData,
      async: false,
      headers: header,
      dataType: 'json',
      success: function success(response, status, request) {
        var strToken = request.getResponseHeader('token');

        if (strToken != null) {
          response.token = strToken;
          GM$1.token = strToken;
        }

        result = response;
      }
    };
    defaultSettings = this.extend(defaultSettings, settings);
    $.ajax(defaultSettings);
    return result;
  },
  getObjectValue: function getObjectValue(pObject, strName) {
    if (pObject != null && !this.isStrNullOrEmpty(strName)) {
      try {
        var arrayName = strName.split('.');
        var pResult = null;

        if (arrayName.length === 1) {
          pResult = pObject[arrayName[0]];
        } else if (arrayName.length === 2) {
          pResult = pObject[arrayName[0]][arrayName[1]];
        } else if (arrayName.length === 3) {
          pResult = pObject[arrayName[0]][arrayName[1]][arrayName[2]];
        }

        return pResult;
      } catch (ex) {
        return null;
      }
    } else {
      return null;
    }
  },
  paramObject: function paramObject(obj) {
    if (obj == null) {
      return '';
    }

    var query = '';
    var name;
    var value;
    var fullSubName;
    var subName;
    var subValue;
    var innerObj;
    var i;
    var strTempQuery;

    for (name in obj) {
      value = obj[name];

      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];

          if (subValue instanceof Object) {
            fullSubName = name + '[' + i + ']';
          } else {
            fullSubName = name;
          }

          innerObj = {};
          innerObj[fullSubName] = subValue;
          strTempQuery = this.paramObject(innerObj);

          if (!this.isStrNullOrEmpty(strTempQuery)) {
            query += strTempQuery + '&';
          }
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '.' + subName;
          innerObj = {};
          innerObj[fullSubName] = subValue;
          strTempQuery = this.paramObject(innerObj);

          if (!this.isStrNullOrEmpty(strTempQuery)) {
            query += strTempQuery + '&';
          }
        }
      } else if (value !== undefined && value !== null) {
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  },
  arrangeTree: function arrangeTree(param, AtreeData) {
    if (!param) {
      return;
    }

    var newAtreeData = AtreeData;
    pushChildren(AtreeData, newAtreeData);

    function pushChildren(ArrayData, newArrayData) {
      for (var index in ArrayData) {
        newArrayData[index]['children'] = ArrayData[index][param];

        if (ArrayData[index][param]) {
          pushChildren(ArrayData[index][param], newArrayData[index]['children']);
        }
      }
    }

    return newAtreeData;
  },
  hasChildren: function hasChildren(param, AtreeData) {
    pushChildren(AtreeData);

    function pushChildren(ArrayData) {
      for (var index in ArrayData) {
        if (ArrayData[index][param] && ArrayData[index][param].length > 0) {
          ArrayData[index].hasChildren = true;
          pushChildren(ArrayData[index][param]);
        }
      }
    }

    return AtreeData;
  },
  judgeFileType: function judgeFileType(file, type) {
    var filetype = file[0].name.substring(file[0].name.lastIndexOf('.')).toLowerCase();
    type = type || 'File';
    var fileTypeArray = {
      Excel: '.xlsx,.xls',
      Img: '.jpg,.jpeg,.png',
      File: '.jpg,.jpeg,.png,.pdf,.doc,.docx'
    };

    if (fileTypeArray[type].indexOf(filetype) === -1) {
      return false;
    }

    return true;
  },
  isObject: function isObject(obj) {
    if (!obj) {
      return false;
    }

    return Object.prototype.toString.call(obj) === '[object Object]';
  },
  _equalObject: function _equalObject(pObj1, pObj2) {
    if (!this.isObject(pObj1) || !this.isObject(pObj2)) {
      return false;
    }

    var bRt = true;

    for (var key in pObj1) {
      if (this.isObject(pObj1[key])) {
        bRt = this._equalObject(pObj1[key], pObj2[key]);

        if (bRt === false) {
          bRt = false;
          return bRt;
        }
      } else {
        if (pObj1[key] !== pObj2[key]) {
          return false;
        }
      }
    }

    return bRt;
  },
  equalValue: function equalValue(val1, val2) {
    var bRt = false;

    if (this.isObject(val1)) {
      bRt = this._equalObject(val1, val2);
    } else {
      bRt = val1 === val2;
    }

    return bRt;
  },
  isArrayContainsEle: function isArrayContainsEle(pArray, pEle) {
    if (pArray == null) {
      return false;
    }

    var bRt = false;

    for (var ii = 0; ii < pArray.length; ii++) {
      bRt = this.equalValue(pEle, pArray[ii]);

      if (bRt === true) {
        return true;
      }
    }

    return bRt;
  }
};
GM$1.LayoutOper = {
  addURLParam: function addURLParam(strUrl, strName, strValue) {
    if (GM$1.CommonOper.isStrNullOrEmpty(strUrl)) {
      return strUrl;
    }

    if (strUrl.indexOf('?') >= 0) {
      strUrl += '&' + strName + '=' + strValue;
    } else {
      strUrl += '?' + strName + '=' + strValue;
    }

    return strUrl;
  },
  removeURLParam: function removeURLParam(strUrl, strName) {
    var pParams = this.getURLParams(strUrl);
    delete pParams[strName];
    var strResult = this.getURLWithoutParams(strUrl);

    for (var key in pParams) {
      strResult = this.addURLParam(strResult, key, pParams[key]);
    }

    return strResult;
  },
  simplyURL: function simplyURL(pData, strUrl) {
    if (pData == null) {
      return null;
    }

    strUrl = strUrl == null ? window.location.href : strUrl;
    var pParams = GM$1.LayoutOper.getURLParams(strUrl);
    var bReload = false;

    if (pData) {
      for (var key in pData) {
        if (pParams[key] != null) {
          if (key === 'GMSSO_CLIENT_EC') {
            GM$1.CommonOper.addCookie(CONFIG.APP_KEY, pParams[key]);
          } else {
            GM$1.CommonOper.addCookie(pData[key], pParams[key]);
          }

          strUrl = GM$1.LayoutOper.removeURLParam(strUrl, key);
          bReload = true;
        }
      }
    } else {
      GM$1.CommonOper.addCookie(CONFIG.APP_KEY, pParams['GMLOGIN_SERVER_EC']);
      strUrl = GM$1.LayoutOper.removeURLParam(strUrl, 'GMLOGIN_SERVER_EC');
      strUrl = GM$1.LayoutOper.removeURLParam(strUrl, 'GMSSO_CLIENT_EC');
    }

    if (bReload === true) {
      window.location.href = strUrl;
    }
  },
  getURLParams: function getURLParams(strURL) {
    if (GM$1.CommonOper.isStrNullOrEmpty(strURL)) {
      return null;
    }

    strURL = GM$1.CommonOper.trimEnd(strURL, '/');
    var result = {};

    if (strURL.indexOf('?') < 0) {
      return result;
    }

    var strPath = strURL.slice(strURL.indexOf('?') + 1);

    if (strPath.indexOf('#!') > 0) {
      strPath = strPath.slice(0, strPath.indexOf('#!'));
    }

    var arrayParam = strPath.split('&');

    for (var ii = 0; ii < arrayParam.length; ii++) {
      var pParam = arrayParam[ii];
      var sub = pParam.indexOf('=');
      var arrayKeyP = pParam.substring(0, sub);
      var arrayKeyValue = pParam.substring(sub + 1, pParam.length);
      result[arrayKeyP] = decodeURIComponent(arrayKeyValue);
    }

    return result;
  },
  getURLWithoutParams: function getURLWithoutParams(strAbsUrl) {
    var strPath = strAbsUrl;

    if (strAbsUrl.indexOf('?') > 0) {
      strPath = strAbsUrl.slice(0, strAbsUrl.indexOf('?'));
    }

    if (strPath.indexOf('#!') > 0) {
      strPath = strPath.slice(0, strPath.indexOf('#!'));
    }

    return strPath;
  },
  getFormatDateDate: function getFormatDateDate(value) {
    var date = new Date(value);
    var y = date.getFullYear();
    var MM = date.getMonth() + 1;
    MM = MM < 10 ? '0' + MM : MM;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + MM + '-' + d;
  },
  encryptByDES: function encryptByDES(strMessage, key) {
    key = key || "greatmap";
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(strMessage, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  },
  decryptByDES: function decryptByDES(strMessage, key) {
    key = key || "greatmap";
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
      ciphertext: CryptoJS.enc.Base64.parse(strMessage)
    }, keyHex, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
};
GM$1.UserOper = {
  getUserFromToken: function getUserFromToken(strUrl, strToken) {
    var pResponse = GM$1.CommonOper.ajaxRequest(strUrl, {
      token: strToken
    }, {
      type: 'get'
    });
    var result = null;

    if (pResponse != null) {
      result = pResponse.data;
    }

    return result;
  },
  getUserInfo: function getUserInfo(strUserId, strGetUserUrl, strGetAreaUrl, strGetRoleUrl, strOrganizationUrl) {
    GM$1.userInfo = GM$1.userInfo || top.GM.userInfo;

    if (GM$1.userInfo == null) {
      var pResponse = GM$1.CommonOper.ajaxRequest(strGetUserUrl, {
        userId: strUserId
      }, {
        type: 'get'
      });

      if (pResponse == null) {
        return null;
      }

      var userInfo = pResponse.data;
      var organizations = userInfo.organizations;
      var permissions = userInfo.permissions || [];
      var arrayAreas = [];

      var allAreaData = this._getAreaData(strGetAreaUrl);

      var strWhereSql = '';
      var arrayCodes = [];

      for (var ii = 0; ii < organizations.length; ii++) {
        var pOrgnization = organizations[ii];
        var strAreaId = pOrgnization.areaId;

        var pAreaData = this._getDataFromAreaId(strAreaId, allAreaData.data);

        if (pAreaData != null) {
          arrayAreas.push(pAreaData);
        }

        var arrayTemp = this._getArrayCodesFromArea(pAreaData);

        if (arrayTemp != null) {
          arrayCodes = arrayCodes.concat(arrayTemp);
        }
      }

      strWhereSql += arrayCodes.join(',');
      userInfo.whereSql = strWhereSql;
      userInfo.arrayCodes = arrayCodes;
      userInfo.areas = arrayAreas;
      GM$1.userInfo = userInfo;

      if (GM$1.userInfo.areas != null && GM$1.userInfo.areas[0] != null && GM$1.userInfo.areas[0].childrens != null) {
        GM$1.userInfo.regions = [GM$1.userInfo.areas[0]];
        GM$1.userInfo.regions = GM$1.userInfo.regions.concat(GM$1.userInfo.areas[0].childrens);
      } else {
        GM$1.userInfo.regions = GM$1.userInfo.areas;
      }

      this._setAreaSql(userInfo.areas);

      GM$1.userInfo.permissions = [];

      if (permissions && permissions.length > 0) {
        for (var jj = 0; jj < permissions.length; jj++) {
          GM$1.userInfo.permissions.push(permissions[jj].permValue);
        }
      }

      this._setOrganization(strOrganizationUrl);

      top.GM.userInfo = top.GM.userInfo || GM$1.userInfo;
    }
  },
  _setOrganization: function _setOrganization(strOrganizationUrl) {
    var pResponse = GM$1.CommonOper.ajaxRequest(strOrganizationUrl, {}, {
      type: 'get'
    });

    if (pResponse == null) {
      return;
    }

    var pData = pResponse.data;
    var arrayAllData = GM$1.TreeOper.getAllNodes(pData, 'childrens');
    var arrayOrganizations = [];

    for (var ii = 0; ii < GM$1.userInfo.organizations.length; ii++) {
      var strId = GM$1.userInfo.organizations[ii].id;

      for (var jj = 0; jj < arrayAllData.length; jj++) {
        if (arrayAllData[jj].id === strId) {
          arrayOrganizations.push(arrayAllData[jj]);
          break;
        }
      }
    }

    GM$1.userInfo.organizations = arrayOrganizations;
  },
  _setPermission: function _setPermission(strGetRoleUrl) {
    GM$1.userInfo.permissions = [];

    if (GM$1.userInfo.roles) {
      var roles = GM$1.userInfo.roles;

      for (var ii = 0; ii < roles.length; ii++) {
        var pRole = roles[ii];
        var pResponse = GM$1.CommonOper.ajaxRequest(strGetRoleUrl, {
          roleId: pRole.id
        }, {
          type: 'get'
        });

        if (pResponse) {
          var roleData = pResponse.data;
          pRole.roleData = roleData;

          if (roleData.permissions) {
            for (var jj = 0; jj < roleData.permissions.length; jj++) {
              GM$1.userInfo.permissions.push(roleData.permissions[jj].permValue);
            }
          }
        }
      }
    }
  },
  _setAreaSql: function _setAreaSql(areas) {
    if (areas == null || areas.length <= 0) {
      return;
    }

    for (var ii = 0; ii < areas.length; ii++) {
      var pArea = areas[ii];

      var arrayTemp = this._getArrayCodesFromArea(pArea);

      if (arrayTemp != null) {
        pArea.whereSql = arrayTemp.join(',');
      }

      if (pArea.childrens) {
        this._setAreaSql(pArea.childrens);
      }
    }
  },
  _getAreaData: function _getAreaData(strGetAreaUrl) {
    var pResponse = GM$1.CommonOper.ajaxRequest(strGetAreaUrl, {
      type: 'get'
    });

    if (pResponse) {
      return pResponse;
    }
  },
  _getDataFromAreaId: function _getDataFromAreaId(strAreaId, arrayData) {
    if (arrayData == null) {
      return null;
    }

    for (var ii = 0; ii < arrayData.length; ii++) {
      var pData = arrayData[ii];

      if (pData.id === strAreaId) {
        return pData;
      } else {
        if (pData.childrens) {
          var result = this._getDataFromAreaId(strAreaId, pData.childrens);

          if (result != null) {
            return result;
          }
        }
      }
    }
  },
  _getArrayCodesFromArea: function _getArrayCodesFromArea(pAreaData) {
    if (pAreaData == null) {
      return null;
    }

    if (pAreaData.code.substring(2) === '0000') {
      return;
    }

    var result = null;

    if (pAreaData.childrens) {
      var arrayCode = [];

      for (var ii = 0; ii < pAreaData.childrens.length; ii++) {
        arrayCode.push("'" + pAreaData.childrens[ii].code + "'");
      }

      result = arrayCode;
    } else {
      result = ["'" + pAreaData.code + "'"];
    }

    return result;
  }
};
GM$1.SysDicOper = {
  getSysdic: function getSysdic(strUrl, strAppId) {
    GM$1.SysDicOper.dicData = GM$1.SysDicOper.dicData || top.GM.SysDicOper.dicData;

    if (GM$1.SysDicOper.dicData == null) {
      var pResponse = GM$1.CommonOper.ajaxRequest(strUrl, {
        appId: strAppId
      }, {
        type: 'get'
      });

      if (pResponse && pResponse.data) {
        this.recordDic(pResponse.data);
      }
    }
  },
  recordDic: function recordDic(pData) {
    GM$1.SysDicOper.dicData = GM$1.SysDicOper.dicData || top.GM.SysDicOper.dicData;

    if (!GM$1.SysDicOper.dicData) {
      GM$1.SysDicOper.dicData = {};

      for (var ii = 0; ii < pData.length; ii++) {
        this._getLeafNodes(pData[ii], GM$1.SysDicOper.dicData);
      }

      if (top.GM.SysDicOper.dicData == null) {
        top.GM.SysDicOper.dicData = GM$1.SysDicOper.dicData;
      }
    }
  },
  getLabel: function getLabel(strType, strValue) {
    if (!strType || !strValue) {
      return null;
    }

    if (GM$1.SysDicOper.dicData) {
      strValue = strValue.toString();
      var arrValues = strValue.split(',');
      var arrayData = GM$1.SysDicOper.dicData[strType];

      if (arrayData) {
        var labels = [];

        for (var jj = 0; jj < arrValues.length; jj++) {
          for (var ii = 0; ii < arrayData.length; ii++) {
            if (String(arrayData[ii].value) === String(arrValues[jj])) {
              labels.push(arrayData[ii].label);
              break;
            }
          }
        }

        return labels.join(',');
      }
    }

    return null;
  },
  _getLeafNodes: function _getLeafNodes(pData, pResult) {
    if (pData.childrens) {
      for (var ii = 0; ii < pData.childrens.length; ii++) {
        var pChildItem = pData.childrens[ii];

        if (pChildItem.childrens != null) {
          this._getLeafNodes(pChildItem, pResult);
        } else {
          if (pChildItem.type != null && pChildItem.value != null) {
            if (!pResult[pChildItem.type]) {
              pResult[pChildItem.type] = [];
            }

            pResult[pChildItem.type].push(pChildItem);
          }
        }
      }
    }

    if (pData.type != null && pData.value != null) {
      if (!pResult[pData.type]) {
        pResult[pData.type] = [];
      }

      pResult[pData.type].push(pData);
    }
  }
};
GM$1.TreeOper = {
  getAllNodes: function getAllNodes(arrayNodes, attChildren) {
    if (arrayNodes == null) {
      return [];
    }

    attChildren = attChildren == null ? 'children' : attChildren;
    var result = [];

    for (var ii = 0; ii < arrayNodes.length; ii++) {
      var pNode = arrayNodes[ii];
      result.push(pNode);

      if (pNode[attChildren]) {
        var arrayTempNodes = this.getAllNodes(pNode[attChildren], attChildren);
        result = result.concat(arrayTempNodes);
      }
    }

    return result;
  },
  getNodesByParam: function getNodesByParam(arrayNodes, strName, pValue, attChildren) {
    var result = [];
    attChildren = attChildren == null ? 'children' : attChildren;
    var listNodes = this.getAllNodes(arrayNodes, attChildren);

    for (var ii = 0; ii < listNodes.length; ii++) {
      var pNode = listNodes[ii];

      if (String(pNode[strName]) === String(pValue)) {
        result.push(pNode);
      }
    }

    return result;
  },
  getNodesLikeParam: function getNodesLikeParam(arrayNodes, strName, pValue, attChildren) {
    var result = [];
    attChildren = attChildren == null ? 'children' : attChildren;
    var listNodes = this.getAllNodes(arrayNodes, attChildren);

    for (var ii = 0; ii < listNodes.length; ii++) {
      var pNode = listNodes[ii];

      if (pNode[strName] && pNode[strName].indexOf(pValue) >= 0) {
        result.push(pNode);
      }
    }

    return result;
  },
  setParentNode: function setParentNode(arrayNodes, pParent, attChildren) {
    if (arrayNodes == null) {
      return;
    }

    attChildren = attChildren == null ? 'children' : attChildren;

    for (var ii = 0; ii < arrayNodes.length; ii++) {
      var pItem = arrayNodes[ii];

      if (pItem[attChildren]) {
        this.setParentNode(pItem[attChildren], pItem, attChildren);
      }
    }
  },
  getParentNode: function getParentNode(arrayNodes, pNode, attChildren) {
    if (arrayNodes == null) {
      return null;
    }

    var arrayChildrenNodes = [];
    attChildren = attChildren == null ? 'children' : attChildren;

    if (GM$1.CommonOper.isArray(arrayNodes)) {
      arrayChildrenNodes = arrayNodes;
    } else {
      arrayChildrenNodes = arrayNodes[attChildren];
    }

    for (var ii = 0; ii < arrayChildrenNodes.length; ii++) {
      var pItemNode = arrayChildrenNodes[ii];

      if (pNode === pItemNode) {
        if (GM$1.CommonOper.isArray(arrayNodes)) {
          return null;
        } else {
          return arrayNodes;
        }
      }

      if (pItemNode[attChildren]) {
        var pTempParentNode = this.getParentNode(pItemNode, pNode, attChildren);

        if (pTempParentNode != null) {
          return pTempParentNode;
        }
      }
    }

    return null;
  },
  removeNode: function removeNode(arrayNodes, pNode, attChildren) {
    var pParentNode = this.getParentNode(arrayNodes, pNode, attChildren);
    attChildren = attChildren == null ? 'children' : attChildren;
    var bRt = true;

    if (pParentNode) {
      bRt = GM$1.CommonOper.removeItemFromArray(pParentNode[attChildren], pNode);
    } else {
      bRt = GM$1.CommonOper.removeItemFromArray(arrayNodes, pNode);
    }

    return bRt;
  },
  updateNodeChecked: function updateNodeChecked(arrayNodes, attChildren, attCheck) {
    if (arrayNodes == null) {
      return;
    }

    attChildren = attChildren == null ? 'children' : attChildren;
    attCheck = attCheck == null ? 'check' : attCheck;

    for (var ii = 0; ii < arrayNodes.length; ii++) {
      var pNode = arrayNodes[ii];

      if (pNode[attChildren]) {
        this.updateNodeChecked(pNode[attChildren], attChildren, attCheck);
        var bChecked = null;

        for (var jj = 0; jj < pNode[attChildren].length; jj++) {
          var pChildNode = pNode[attChildren][jj];
          pChildNode[attCheck] = pChildNode[attCheck] == null ? false : pChildNode[attCheck];

          if (bChecked == null) {
            bChecked = pChildNode[attCheck];
          } else if (bChecked !== pChildNode[attCheck]) {
            bChecked = null;
            pNode.checkMix = true;
            break;
          }
        }

        if (bChecked != null) {
          pNode.checkMix = false;
          pNode[attCheck] = bChecked;
        }
      }
    }
  },
  setNodesLevel: function setNodesLevel(arrayNodes, attChildren, strLevelName, nLevel) {
    strLevelName = strLevelName == null ? 'level' : strLevelName;
    attChildren = attChildren == null ? 'children' : attChildren;
    nLevel = nLevel == null ? 0 : nLevel;

    if (arrayNodes == null) {
      return false;
    }

    for (var ii = 0; ii < arrayNodes.length; ii++) {
      var pNode = arrayNodes[ii];
      pNode[strLevelName] = nLevel;
      var childrenNodes = pNode[attChildren];
      this.setNodesLevel(childrenNodes, attChildren, strLevelName, pNode[strLevelName] + 1);
    }
  }
};

axios.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
});
axios.interceptors.response.use(function (response) {
  if (response.headers && (response.headers['content-type'] === 'text/xml' || response.headers['content-type'] === 'application/x-msdownload' || response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
    return response;
  }

  return response.data;
}, function (err) {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求';
        break;

      case 401:
        err.message = '未授权，请重新登录';
        break;

      case 403:
        err.message = '拒绝访问';
        break;

      case 404:
        err.message = '请求错误,未找到该资源';
        break;

      case 405:
        err.message = '请求方法未允许';
        break;

      case 408:
        err.message = '请求超时';
        break;

      case 500:
        err.message = '服务器端出错';
        break;

      case 501:
        err.message = '网络未实现';
        break;

      case 502:
        err.message = '网络错误';
        break;

      case 503:
        err.message = '服务不可用';
        break;

      case 504:
        err.message = '网络超时';
        break;

      case 505:
        err.message = 'http版本不支持该请求';
        break;

      default:
        err.message = "\u8FDE\u63A5\u9519\u8BEF".concat(err.response.status);
    }
  } else {
    err.message = '连接到服务器失败';
  }

  return Promise.reject(err);
});
var $axios = {
  post: function post(url, params, contentType) {
    var type = contentType === 'json' ? 'application/json;charset=UTF-8' : 'application/x-www-form-urlencoded';

    if (type === 'json') {
      params = JSON.stringify(params);
    } else {
      params = GM$1.CommonOper.paramObject(params);
    }

    return axios({
      method: 'post',
      url: url,
      data: params,
      timeout: 15000,
      headers: {
        'Content-Type': type
      }
    }).then(function (response) {
      if (response.success === false) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response);
      }
    }).catch(function (res) {
      return Promise.reject(res);
    });
  },
  get: function get(url, params) {
    var strTime = new Date().getTime();
    url = GM$1.LayoutOper.addURLParam(url, 'timestamplp', strTime);
    return axios({
      method: 'get',
      url: url,
      params: params,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(function (response) {
      if (response.success === false) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response);
      }
    }).catch(function (res) {
      return Promise.reject(res);
    });
  },
  uploadRequest: function uploadRequest(strUrl, formData) {
    if (GM$1.CommonOper.isStrNullOrEmpty(strUrl) || formData == null) {
      return;
    }

    return axios({
      method: 'post',
      url: strUrl,
      cache: false,
      data: formData,
      processData: false,
      contentType: false
    }).then(function (response) {
      if (response.success === false) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response);
      }
    }).catch(function (res) {
      return Promise.reject(res);
    });
  }
};

var RESTURL = {
  token: 'checkTokenByAppKey',
  user: {
    query: 'user/page',
    save: 'user/save',
    remove: 'user/delete',
    queryUser: 'user/get',
    addOrDeleteRole: 'user/updateUserRole',
    applyedUser: 'user/pageUserRole',
    exportUrl: 'user/export',
    orgUser: 'user/getOrgUser'
  },
  app: {
    query: 'app/list',
    save: 'app/save',
    remove: 'app/delete',
    updatePermission: 'app/updateAppLoginPerm',
    get: 'app/get'
  },
  organization: {
    query: 'organization/tree',
    save: 'organization/save',
    remove: 'organization/delete'
  },
  holiday: {
    query: 'holiday/list',
    save: 'holiday/save',
    remove: 'holiday/delete',
    setWeekend: 'holiday/settingsWeekends'
  },
  area: {
    query: 'area/tree',
    save: 'area/save',
    remove: 'area/delete',
    upload: 'area/upload'
  },
  permission: {
    query: 'permission/tree',
    save: 'permission/save',
    remove: 'permission/delete'
  },
  role: {
    query: 'role/list',
    save: 'role/save',
    remove: 'role/delete',
    queryRole: 'role/get',
    organByroleId: 'role/getUserByRoleId',
    addOrDeleteUser: 'role/updateUserRole'
  },
  log: {
    query: 'log/list',
    exportUrl: 'log/export'
  },
  sysdic: {
    query: 'dict/tree',
    save: 'dict/save',
    remove: 'dict/delete',
    publics: 'dict/publishDictToApp',
    copy: 'dict/copy'
  },
  file: {
    fileSave: 'file/uploadFile'
  },
  serialize: {
    querySer: 'seq/Sequence/getPage',
    querySerList: 'seq/Sequence/getList',
    queryRule: 'seq/rule/getPageBySeqId',
    saveSer: 'seq/Sequence/insertOrUpdate',
    saveRule: 'seq/rule/insertOrUpdateRule',
    queryRecData: 'seq/Recycle/getPage',
    queryHisData: 'seq/History/getPage',
    getDicsData: 'seq/selectEnums',
    deleteSer: 'seq/Sequence/del',
    recycle: 'seq/Recycle/recycle',
    deleteHis: 'seq/History/del',
    deleteRule: 'seq/rule/del'
  },
  approve: {
    query: 'userRegister/selectPage',
    showDetail: 'userRegister/getById',
    approveUser: 'userRegister/check'
  },
  label: {
    query: 'LabelLabel/getLabelList',
    queryLabelType: 'LabelGroup/getLabelGroupList',
    saveLabel: 'LabelLabel/saveLabelList',
    saveLabelType: 'LabelGroup/addLabelGroup',
    updateLabelType: 'LabelGroup/updateLabelGroup',
    removeLabel: 'LabelLabel/delLabelList',
    removeLabelType: 'LabelGroup/deleteLabelGroup'
  }
};

var userManageService = {
  init: function init(_this) {
    _this.pagination = {
      currentPage: 1,
      layout: ['total', 'jumper']
    };
    _this.userFilters = {
      current: _this.pagination.currentPage
    };
    _this.userDetailModal = {
      title: '用户详情',
      isShow: false
    };
  },
  initApplyModalData: function initApplyModalData(_this) {
    _this.pagination = {
      currentPage: 1
    };
    _this.tabs = [{
      label: '全部角色',
      name: 'true'
    }, {
      label: '已分配角色',
      name: 'false'
    }];
    _this.activeStatus = _this.tabs[0].name;
    _this.userFilters = {
      current: _this.pagination.currentPage,
      bool: _this.activeStatus,
      roleId: _this.roleId
    };
  },
  getUserList: function getUserList(config, params) {
    var url = config + RESTURL.user.query;
    return $axios.get(url, params);
  },
  saveUser: function saveUser(config, params) {
    var url = config + RESTURL.user.save;
    return $axios.post(url, params);
  },
  removeUser: function removeUser(config, params) {
    var url = config + RESTURL.user.remove;
    return $axios.get(url, params);
  },
  getUserInfo: function getUserInfo(config, params) {
    var url = config + RESTURL.user.queryUser;
    return $axios.get(url, params);
  },
  addOrDeleteRole: function addOrDeleteRole(config, params) {
    var url = config + RESTURL.user.addOrDeleteRole;
    return $axios.post(url, params);
  },
  getOrgTree: function getOrgTree(config, params) {
    var url = config + RESTURL.organization.query;
    return $axios.get(url, params);
  }
};

var script$3 = {
  name: 'gmDicSelect',
  model: {
    prop: 'binddata',
    event: 'update'
  },
  props: {
    placeholder: String,
    clearable: Boolean,
    filterable: Boolean,
    data: Array,
    type: String,
    binddata: String
  },
  data: function data() {
    return {
      bindData: '',
      dataList: []
    };
  },
  watch: {
    binddata: function binddata(value) {
      this.bindData = value;
    },
    bindData: function bindData(value) {
      this.$emit('update', this.bindData);
    }
  },
  created: function created() {
    var _this = this;

    if (this.type) {
      if (this.data) {
        var dicArr = this.data.find(function (item) {
          return item.label === _this.type;
        });
        this.dataList = dicArr.childrens;
      }
    }
  }
};

var css$4 = ".el-select[data-v-4b7e1e3d]{width:100%}";
styleInject(css$4);

/* script */
const __vue_script__$3 = script$3;
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-select",
    {
      attrs: {
        clearable: _vm.clearable,
        filterable: _vm.filterable,
        placeholder: _vm.placeholder
      },
      model: {
        value: _vm.bindData,
        callback: function($$v) {
          _vm.bindData = $$v;
        },
        expression: "bindData"
      }
    },
    _vm._l(_vm.dataList, function(item) {
      return _c("el-option", {
        key: item.value,
        attrs: { label: item.label, value: item.value }
      })
    }),
    1
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = "data-v-4b7e1e3d";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var gmDicSelect = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

var _this = undefined;
var validate = {
  naturalNumber: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^(([0-9]*[1-9][0-9]*)|(0+))$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入自然数'));
      }
    }
  },
  wechat: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的微信号码'));
      }
    }
  },
  english: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^.[A-Za-z]+$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入英文字符'));
      }
    }
  },
  telephone: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/;
      var patt = /^1[34578]\d{9}$/;

      if (reg.test(value) || patt.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的电话号'));
      }
    }
  },
  bankCard: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[1-9]\d{9,19}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的银行卡号码'));
      }
    }
  },
  IDNumber: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[a-z0-9A-Z]{0,50}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的证件号码'));
      }
    }
  },
  IDCard: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{7}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的身份证号码'));
      }
    }
  },
  qq: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[1-9]\d{4,11}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入正确的QQ号码'));
      }
    }
  },
  url: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入以http和https开头的网址'));
      }
    }
  },
  enNum0to20: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[a-z0-9A-Z]{0,20}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入20位以内的英文字符和数字'));
      }
    }
  },
  cnEnSpace2to100: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[a-zA-Z\u4E00-\u9FA5\s*]{2,100}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入2到100位的中英文字符和空格'));
      }
    }
  },
  numLinefeed: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[0-9\n*]+$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入数字和换行符'));
      }
    }
  },
  char0to255: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^.{0,255}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请输入255位以内的字符'));
      }
    }
  },
  specialChar: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[^`~!@#$^&*()=|{}':;',/\\[\].<>?]*$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('请删除特殊字符'));
      }
    }
  },
  twoDecimal: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^(([0-9][0-9]*)|(([0]\.\d{1,2}|[0-9][0-9]*\.\d{1,2})))$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('小数点保留最多两位'));
      }
    }
  },
  loginname: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[a-zA-Z]\w{3,19}$/;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('字母开头，长度为4-20'));
      }
    }
  },
  password: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*_,]+$)[a-zA-Z\d!@#$%^&*_,]{6,20}$/g;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('6-20位字母，数字和符号两种以上组合'));
      }
    }
  },
  required: {
    required: true,
    message: '必填'
  },
  phone: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^((0\d{2,3}-\d{7,8})|((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8})$/g;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('必须为合法电话'));
      }
    }
  },
  normalchar: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /([\u4e00-\u9fa5]|\w)+$/g;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('只能为汉字数字字母'));
      }
    }
  },
  email: {
    type: 'email',
    message: '请输入正确的邮箱'
  },
  number: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^\d*(\.\d+)?$/g;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('只能是数字'));
      }
    }
  },
  zhengnumber: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^([1-9]\d*|[0]{1,1})$/g;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('只能是正整数和0'));
      }
    }
  },
  compareToFirstPassword: {
    validator: function validator(rule, value, callback) {
      var getFieldValue = _this.props.form;

      if (value && value !== getFieldValue('password')) {
        callback(new Error('msg'));
      } else {
        callback();
      }
    }
  },
  isExternal: function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
  },
  postalcode: {
    validator: function validator(rule, value, callback) {
      if (GM$1.CommonOper.isStrNullOrEmpty(value)) {
        callback();
      }

      var reg = /^[1-9][0-9]{5}$/g;

      if (reg.test(value)) {
        callback();
      } else {
        return callback(new Error('必须为合法邮政编码'));
      }
    }
  }
};

var script$4 = {
  name: 'userInfo',
  components: {
    gmDicSelect: gmDicSelect,
    gmTreeSelect: gmTreeSelect
  },
  props: {
    userDetailModal: Object,
    gmdisabled: Boolean,
    detailList: Object,
    dicArr: Array,
    ipconfig: Object,
    orgTree: Array
  },
  data: function data() {
    return {
      addOrgList: {},
      addLoading: false,
      treeConfig: {
        value: 'id',
        label: 'name',
        children: 'childrens'
      },
      validator: validate
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      _this.$refs.userDelForm.clearValidate();
    },
    validatePass2: function validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (this.detailList.password !== null && value !== this.detailList.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    saveThisUser: function saveThisUser(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.$set(_this2.detailList, 'orgIds', _this2.detailList.organizationIds);

          _this2.addOrgList = Object.assign({}, _this2.detailList);

          if (_this2.detailList.password) {
            _this2.addOrgList.password = GM$1.LayoutOper.encryptByDES(_this2.detailList.password);
          }

          if (_this2.detailList.confirmPsw) {
            _this2.addOrgList.confirmPsw = GM$1.LayoutOper.encryptByDES(_this2.detailList.confirmPsw);
          }

          userManageService.saveUser(_this2.ipconfig.UUMS_SERVER, _this2.addOrgList).then(function (res) {
            _this2.$message({
              message: '保存成功',
              type: 'success'
            });

            _this2.$emit('fatherMethod');

            _this2.userDetailModal.isShow = false;
          }, function (error) {
            _this2.$message.error(error.message);

            return false;
          });
        } else {
          _this2.$message.error('请完善表单');

          return false;
        }
      });
    },
    cancel: function cancel(formName) {
      this.userDetailModal.isShow = false;
      this.$refs[formName].resetFields();
    }
  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.userDetailModal.title,
        visible: _vm.userDetailModal.isShow,
        width: "60%"
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.userDetailModal, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "userDelForm",
          attrs: { model: _vm.detailList, "label-width": "11rem" }
        },
        [
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-form-item", { staticClass: "title" }, [
                    _c("label", [_vm._v("基本信息")])
                  ]),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "登录名",
                        prop: "loginName",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        attrs: { disabled: _vm.gmdisabled },
                        model: {
                          value: _vm.detailList.loginName,
                          callback: function($$v) {
                            _vm.$set(_vm.detailList, "loginName", $$v);
                          },
                          expression: "detailList.loginName"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "姓名",
                        prop: "realName",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.detailList.realName,
                          callback: function($$v) {
                            _vm.$set(_vm.detailList, "realName", $$v);
                          },
                          expression: "detailList.realName"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "联系电话",
                        prop: "phone",
                        rules: [_vm.validator.required, _vm.validator.phone]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.detailList.phone,
                          callback: function($$v) {
                            _vm.$set(_vm.detailList, "phone", $$v);
                          },
                          expression: "detailList.phone"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "性别",
                        prop: "sex",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("gm-dic-select", {
                        ref: "type",
                        attrs: {
                          clearable: "",
                          data: _vm.dicArr,
                          filterable: "",
                          type: "性别",
                          placeholder: "请选择"
                        },
                        model: {
                          value: _vm.detailList.sex,
                          callback: function($$v) {
                            _vm.$set(_vm.detailList, "sex", $$v);
                          },
                          expression: "detailList.sex"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "标签类型", prop: "label" } },
                    [
                      _c("gm-dic-select", {
                        attrs: {
                          clearable: "",
                          data: _vm.dicArr,
                          filterable: "",
                          type: "标签类型",
                          placeholder: "请选择"
                        },
                        model: {
                          value: _vm.detailList.label,
                          callback: function($$v) {
                            _vm.$set(_vm.detailList, "label", $$v);
                          },
                          expression: "detailList.label"
                        }
                      })
                    ],
                    1
                  ),
                  _vm.gmdisabled
                    ? _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "密码",
                            prop: "password",
                            rules: [_vm.validator.password]
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { "show-password": "" },
                            model: {
                              value: _vm.detailList.password,
                              callback: function($$v) {
                                _vm.$set(_vm.detailList, "password", $$v);
                              },
                              expression: "detailList.password"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm.gmdisabled
                    ? _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "确认密码",
                            prop: "confirmPsw",
                            rules: [{ validator: _vm.validatePass2 }]
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { "show-password": "" },
                            model: {
                              value: _vm.detailList.confirmPsw,
                              callback: function($$v) {
                                _vm.$set(_vm.detailList, "confirmPsw", $$v);
                              },
                              expression: "detailList.confirmPsw"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  !_vm.gmdisabled
                    ? _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "密码",
                            prop: "password",
                            rules: [
                              _vm.validator.required,
                              _vm.validator.password
                            ]
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { "show-password": "" },
                            model: {
                              value: _vm.detailList.password,
                              callback: function($$v) {
                                _vm.$set(_vm.detailList, "password", $$v);
                              },
                              expression: "detailList.password"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  !_vm.gmdisabled
                    ? _c(
                        "el-form-item",
                        {
                          attrs: {
                            label: "确认密码",
                            prop: "confirmPsw",
                            rules: [
                              _vm.validator.required,
                              { validator: _vm.validatePass2 }
                            ]
                          }
                        },
                        [
                          _c("el-input", {
                            attrs: { "show-password": "" },
                            model: {
                              value: _vm.detailList.confirmPsw,
                              callback: function($$v) {
                                _vm.$set(_vm.detailList, "confirmPsw", $$v);
                              },
                              expression: "detailList.confirmPsw"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              ),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-form-item", { staticClass: "title" }, [
                    _c("label", [_vm._v("机构信息")])
                  ]),
                  _c(
                    "el-form-item",
                    { attrs: { label: "所属机构", prop: "organizationIds" } },
                    [
                      _c("gm-tree-select", {
                        attrs: {
                          treeData: _vm.orgTree,
                          props: _vm.treeConfig,
                          placeholder: "请选择机构"
                        },
                        model: {
                          value: _vm.detailList.organizationIds,
                          callback: function($$v) {
                            _vm.$set(_vm.detailList, "organizationIds", $$v);
                          },
                          expression: "detailList.organizationIds"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  return _vm.cancel("userDelForm")
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              nativeOn: {
                click: function($event) {
                  return _vm.saveThisUser("userDelForm")
                }
              }
            },
            [_vm._v("保存")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var userInfo = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

var permissionService = {
  getList: function getList(config, params) {
    var url = config + RESTURL.permission.query;
    return $axios.get(url, params);
  },
  savePermission: function savePermission(config, params) {
    var url = config + RESTURL.permission.save;
    return $axios.post(url, params);
  },
  deletePermission: function deletePermission(config, params) {
    var url = config + RESTURL.permission.remove;
    return $axios.post(url, params);
  }
};

var appService = {
  getAppList: function getAppList(config, params) {
    var url = config + RESTURL.app.query;
    return $axios.get(url, params);
  },
  saveApp: function saveApp(config, params) {
    var url = config + RESTURL.app.save;
    return $axios.post(url, params);
  },
  deleteApp: function deleteApp(config, params) {
    var url = config + RESTURL.app.remove;
    return $axios.post(url, params);
  },
  getRootId: function getRootId(config, params) {
    var url = config + RESTURL.app.get;
    return $axios.get(url, params);
  },
  getDic: function getDic(config, params) {
    var url = config + RESTURL.sysdic.query;
    return $axios.get(url, params);
  }
};

var roleService = {
  init: function init(config, _this) {
    _this.pagination = {
      currentPage: 1
    };
    _this.roleFilters = {
      current: _this.pagination.currentPage
    };
    _this.devRoleModal = {
      title: '配置角色',
      isShow: false
    };
    _this.devApplyUserModal = {
      title: '分配用户',
      isShow: false
    };
    this.getPemissionData(config, _this);
    this.getSystemData(config, _this);
  },
  initAddModalData: function initAddModalData(_this) {
    _this.addRoleList = {};

    if (_this.roleList) {
      _this.addRoleList = Object.assign({}, _this.roleList);
    }

    _this.addRoleList.permissionIds = _this.checkData;
    _this.data = _this.permissionData;

    _this.$refs.tree.setCheckedKeys(_this.checkData);
  },
  initApplyModalData: function initApplyModalData(_this) {
    _this.pagination = {
      currentPage: 1
    };
    _this.tabs = [{
      label: '可分配用户',
      name: 'false'
    }, {
      label: '已分配用户',
      name: 'true'
    }];
    _this.activeStatus = _this.tabs[0].name;
    _this.userFilters = {
      current: _this.pagination.currentPage,
      bool: _this.activeStatus,
      roleId: _this.roleId
    };
  },
  getSystemData: function getSystemData(config, _this) {
    var _this2 = this;

    appService.getAppList(config).then(function (res) {
      if (res && res.success) {
        _this.systemData = res.data.records;
      }
    }, function (error) {
      _this2.$message.error(error.message);
    });
  },
  getPemissionData: function getPemissionData(config, _this) {
    var _this3 = this;

    permissionService.getList(config).then(function (res) {
      if (res && res.success) {
        _this.permissionTreeData = res.data;
      }
    }, function (error) {
      _this3.$message.error(error.message);
    });
  },
  setCheckNodes: function setCheckNodes(arrayArray) {
    if (arrayArray == null) {
      return [];
    }

    var arrayid = [];

    for (var ii = 0; ii < arrayArray.length; ii++) {
      arrayid.push(arrayArray[ii].id);
    }

    return arrayid;
  },
  connectAppPermission: function connectAppPermission(applications, permissions) {
    if (applications == null || permissions == null) {
      return;
    }

    var applicationsCopy = JSON.parse(JSON.stringify(applications));
    var permissionsCopy = JSON.parse(JSON.stringify(permissions));

    for (var i = 0; i < applicationsCopy.length; i++) {
      applicationsCopy[i].childrens = [];

      for (var j = 0; j < permissionsCopy.length; j++) {
        if (permissionsCopy[j].appId === applicationsCopy[i].id) {
          if (permissionsCopy[j].type === 1) {
            permissionsCopy[j].title = permissionsCopy[j].title + ' (数据权限)';
          } else if (permissionsCopy[j].type === 0) {
            permissionsCopy[j].title = permissionsCopy[j].title + ' (菜单权限)';
          }

          if (permissionsCopy[j].childrens && permissionsCopy[j].childrens.length > 0) {
            processData(permissionsCopy[j].childrens);
          }

          applicationsCopy[i].childrens.push(permissionsCopy[j]);
        }
      }
    }

    function processData(permissionsChildrens) {
      var permissionData = permissionsChildrens;

      for (var ii = 0; ii < permissionData.length; ii++) {
        if (permissionData[ii].appId === applicationsCopy[i].id) {
          if (permissionData[ii].type === 1) {
            permissionData[ii].title = permissionData[ii].title + ' (数据权限)';
          } else if (permissionsCopy[j].type === 0) {
            permissionData[ii].title = permissionData[ii].title + ' (菜单权限)';
          }
        }

        if (permissionData[ii].childrens && permissionData[ii].childrens.length > 0) {
          processData(permissionData[ii].childrens);
        }
      }
    }

    return applicationsCopy;
  },
  getRoleList: function getRoleList(config, params) {
    var url = config + RESTURL.role.query;
    return $axios.get(url, params);
  },
  getRoleInfo: function getRoleInfo(config, params) {
    var url = config + RESTURL.role.queryRole;
    return $axios.get(url, params);
  },
  removeRole: function removeRole(config, params) {
    var url = config + RESTURL.role.remove;
    return $axios.post(url, params);
  },
  save: function save(config, params) {
    var url = config + RESTURL.role.save;
    return $axios.post(url, params);
  },
  queryUser: function queryUser(config, params, _this) {
    var _this4 = this;

    var url = config + RESTURL.user.applyedUser;
    _this.listLoading = true;
    $axios.get(url, params).then(function (res) {
      if (res && res.success) {
        console.log(res);
        _this.userTable = res.data.records;

        _this.$set(_this.pagination, 'total', res.data.total);

        _this.listLoading = false;
      }
    }, function (error) {
      _this4.$message.error(error.message);
    });
  },
  addOrDeleteUser: function addOrDeleteUser(config, params) {
    var url = config + RESTURL.role.addOrDeleteUser;
    return $axios.post(url, params);
  }
};

var script$5 = {
  name: 'applyrole',
  props: {
    showApplyRole: Object,
    dicArr: Array,
    ipconfig: Object
  },
  components: {
    gmPagination: gmPagination,
    gmDicSpan: gmDicSpan
  },
  data: function data() {
    return {
      tabs: [],
      activeStatus: '',
      roleFilters: {},
      roleTable: [],
      allRole: [],
      roleIds: [],
      listLoading: false,
      addLoading: false,
      pagination: {}
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      userManageService.initApplyModalData(_this);
      this.queryAllRole();
    },
    tabClick: function tabClick(e) {
      this.activeStatus = e.name;

      if (e.name === 'false') {
        this.queryUserRole();
      } else {
        this.roleTable = this.allRole;
      }
    },
    handleSelectionChange: function handleSelectionChange(e) {
      var _this2 = this;

      this.roleIds = [];
      e.forEach(function (role, index) {
        if (role.id) {
          _this2.roleIds.push(role.id);
        }
      });
    },
    queryUserRole: function queryUserRole() {
      var _this3 = this;

      userManageService.getUserInfo(this.ipconfig.UUMS_SERVER, {
        userId: this.showApplyRole.userId
      }).then(function (res) {
        console.log(res);
        _this3.roleTable = res.data.roles;
      }, function (error) {
        _this3.$message.error(error.message);
      });
    },
    queryAllRole: function queryAllRole() {
      var _this4 = this;

      this.listLoading = true;
      roleService.getRoleList(this.ipconfig.UUMS_SERVER, this.roleFilters).then(function (res) {
        _this4.roleTable = res.data.records;
        _this4.allRole = _this4.roleTable;

        _this4.$set(_this4.pagination, 'total', res.data.total);

        _this4.listLoading = false;
      }, function (error) {
        _this4.$message.error(error.message);
      });
    },
    changeCurrent: function changeCurrent(val) {
      this.roleFilters.current = val;
      this.queryAllRole();
    },
    applyOrDelUser: function applyOrDelUser() {
      var _this5 = this;

      this.$confirm('确认提交吗？', '提示', {}).then(function () {
        _this5.addLoading = true;
        var param = {
          roleIds: _this5.roleIds,
          userId: _this5.showApplyRole.userId,
          bool: _this5.activeStatus
        };
        userManageService.addOrDeleteRole(_this5.ipconfig.UUMS_SERVER, param).then(function (res) {
          _this5.addLoading = false;

          _this5.$message({
            message: '提交成功',
            type: 'success'
          });

          if (_this5.activeStatus === 'false') {
            _this5.queryUserRole();
          }
        }, function (error) {
          _this5.$message.error(error.message);

          _this5.addLoading = false;
        });
      });
    }
  }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.showApplyRole.title,
        visible: _vm.showApplyRole.isShow
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.showApplyRole, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-tabs",
        {
          staticClass: "selftabs",
          on: { "tab-click": _vm.tabClick },
          model: {
            value: _vm.activeStatus,
            callback: function($$v) {
              _vm.activeStatus = $$v;
            },
            expression: "activeStatus"
          }
        },
        _vm._l(_vm.tabs, function(item, index) {
          return _c(
            "el-tab-pane",
            { key: index, attrs: { label: item.label, name: item.name } },
            [
              _c(
                "div",
                { staticClass: "table" },
                [
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.listLoading,
                          expression: "listLoading"
                        }
                      ],
                      attrs: { data: _vm.roleTable },
                      on: { "selection-change": _vm.handleSelectionChange }
                    },
                    [
                      _c("el-table-column", {
                        attrs: { type: "selection", width: "55" }
                      }),
                      _c("el-table-column", {
                        attrs: {
                          prop: "title",
                          label: "显示名称",
                          "min-width": "100",
                          "show-overflow-tooltip": ""
                        }
                      }),
                      _c("el-table-column", {
                        attrs: {
                          prop: "name",
                          label: "名称",
                          "min-width": "80"
                        }
                      }),
                      _c("el-table-column", {
                        attrs: { label: "角色类型", "min-width": "100" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _c("gm-dic-span", {
                                    attrs: {
                                      type: "角色类型",
                                      binddata: scope.row.type + "",
                                      data: _vm.dicArr
                                    }
                                  })
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      }),
                      _c("el-table-column", {
                        attrs: {
                          prop: "description",
                          label: "描述",
                          "min-width": "100"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              item.name === "true"
                ? _c(
                    "el-col",
                    { staticClass: "toolbar", attrs: { span: 24 } },
                    [
                      _c("gm-pagination", {
                        attrs: { config: _vm.pagination },
                        on: { changeCurrent: _vm.changeCurrent }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        }),
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  _vm.showApplyRole.isShow = false;
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.addLoading },
              nativeOn: {
                click: function($event) {
                  return _vm.applyOrDelUser()
                }
              }
            },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeStatus === "true",
                      expression: "activeStatus==='true'"
                    }
                  ]
                },
                [_vm._v("分配")]
              ),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeStatus === "false",
                      expression: "activeStatus==='false'"
                    }
                  ]
                },
                [_vm._v("取消分配")]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var applyrole = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var script$6 = {
  name: 'UserManage',
  components: {
    gmTreeSelect: gmTreeSelect,
    gmDicSpan: gmDicSpan,
    gmPagination: gmPagination,
    userInfo: userInfo,
    applyrole: applyrole
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      userFilters: {},
      userManagementTable: [],
      userDetailModal: {},
      gmdisabled: false,
      detailList: {},
      listLoading: false,
      pagination: {},
      showApplyRole: {
        isShow: false,
        title: '角色分配'
      },
      orgTree: [],
      config: {
        value: 'id',
        label: 'name',
        children: 'childrens'
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    userManageService.init(_this);

    _this.query();

    _this.getOrgTree();
  },
  methods: {
    getOrgTree: function getOrgTree() {
      var _this2 = this;

      userManageService.getOrgTree(this.ipconfig.UUMS_SERVER).then(function (res) {
        if (res && res.success) {
          _this2.orgTree = res.data;
        }
      });
    },
    query: function query() {
      var _this3 = this;

      this.listLoading = true;
      userManageService.getUserList(this.ipconfig.UUMS_SERVER, this.userFilters).then(function (res) {
        if (res && res.success) {
          var tableData = res.data.records;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = tableData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              item.userInfo.sex = item.userInfo.sex + '';
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          _this3.userManagementTable = tableData;

          _this3.$set(_this3.pagination, 'total', res.data.total);

          _this3.listLoading = false;
        }
      }, function (error) {
        _this3.listLoading = false;

        _this3.$message.error(error.message);
      });
    },
    changeCurrent: function changeCurrent(val) {
      this.userFilters.current = val;
      this.query();
    },
    queryData: function queryData() {
      this.userFilters.childOrg = true;
      this.userFilters.current = 1;
      this.query();
    },
    clear: function clear() {
      this.pagination.currentPage = 1;
      this.userFilters = {
        current: this.pagination.currentPage
      };
      this.query();
    },
    add: function add() {
      this.gmdisabled = false;
      this.userDetailModal.isShow = true;
      this.userDetailModal.title = '新增用户';
      this.detailList = {};
      this.$nextTick(function () {
        this.$refs.userDetail.loadDialogData(this);
      });
    },
    modify: function modify(index, row) {
      this.gmdisabled = true;
      this.userDetailModal.isShow = true;
      this.userDetailModal.title = '修改用户信息';
      this.$nextTick(function () {
        this.detailList = {};
        this.detailList = Object.assign({}, row);
        this.$set(this.detailList, 'phone', row.userInfo.phone);
        this.detailList.label = row.userInfo.label;
        this.detailList.sex = row.userInfo.sex + '';
        this.$refs.userDetail.loadDialogData();
      });
    },
    deleteRow: function deleteRow(index, row) {
      var _this4 = this;

      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this4.listLoading = true;
        var params = {
          userIds: row.id
        };
        userManageService.removeUser(_this4.ipconfig.UUMS_SERVER, params).then(function (res) {
          _this4.listLoading = false;

          _this4.$message({
            message: '删除成功',
            type: 'success'
          });

          _this4.query();
        }, function (error) {
          _this4.$message.error(error.message);

          _this4.listLoading = false;
        });
      });
    },
    exportData: function exportData() {
      var params = this.ipconfig.UUMS_SERVER + RESTURL.user.exportUrl + '?token=' + GM.token + '&';

      if (this.userFilters.loginName) {
        params = params + 'loginName=' + this.userFilters.loginName + '&';
      } else if (this.userFilters.realName) {
        params = params + 'realName=' + this.userFilters.realName + '&';
      } else if (this.userFilters.orgId) {
        params = params + 'orgId=' + this.userFilters.orgId + '&';
      }

      window.location.href = params;
    },
    applyRole: function applyRole(index, row) {
      this.showApplyRole = {
        isShow: true,
        title: '角色分配',
        userId: row.id
      };
      this.$nextTick(function () {
        this.$refs.applyRole.loadDialogData();
      });
    }
  }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-container",
    { staticClass: "container" },
    [
      _c(
        "div",
        { staticClass: "search" },
        [
          _c(
            "el-form",
            { attrs: { inline: true, model: _vm.userFilters, size: "small" } },
            [
              _c(
                "el-form-item",
                [
                  _c("el-input", {
                    attrs: { placeholder: "登录名", clearable: "" },
                    model: {
                      value: _vm.userFilters.loginName,
                      callback: function($$v) {
                        _vm.$set(_vm.userFilters, "loginName", $$v);
                      },
                      expression: "userFilters.loginName"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c("el-input", {
                    attrs: { placeholder: "姓名", clearable: "" },
                    model: {
                      value: _vm.userFilters.realName,
                      callback: function($$v) {
                        _vm.$set(_vm.userFilters, "realName", $$v);
                      },
                      expression: "userFilters.realName"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c("gm-tree-select", {
                    attrs: {
                      treeData: _vm.orgTree,
                      props: _vm.config,
                      placeholder: "机构"
                    },
                    model: {
                      value: _vm.userFilters.orgId,
                      callback: function($$v) {
                        _vm.$set(_vm.userFilters, "orgId", $$v);
                      },
                      expression: "userFilters.orgId"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.queryData }
                    },
                    [_vm._v("查询")]
                  )
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.clear } },
                    [_vm._v("清除")]
                  )
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.add } },
                    [_vm._v("新增")]
                  )
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.exportData }
                    },
                    [_vm._v("导出")]
                  )
                ],
                1
              ),
              _c("el-form-item", [_vm._t("exportTemplate")], 2),
              _c("el-form-item", [_vm._t("importUserInfo")], 2)
            ],
            1
          )
        ],
        1
      ),
      _c(
        "el-main",
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.listLoading,
                  expression: "listLoading"
                }
              ],
              staticClass: "table",
              attrs: { data: _vm.userManagementTable }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "loginName", label: "登录名" }
              }),
              _c("el-table-column", {
                attrs: { prop: "realName", label: "姓名" }
              }),
              _c("el-table-column", {
                attrs: { prop: "userInfo.phone", label: "电话" }
              }),
              _c("el-table-column", {
                attrs: { prop: "userInfo.label", label: "标签类型" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "标签类型",
                            binddata: scope.row.userInfo.label,
                            data: _vm.dicData
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { prop: "userInfo.sex", label: "性别", width: "120" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "性别",
                            binddata: scope.row.userInfo.sex,
                            data: _vm.dicData
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { label: "操作", fixed: "right", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "修改" },
                            on: {
                              click: function($event) {
                                return _vm.modify(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-edit-outline" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "删除" },
                            on: {
                              click: function($event) {
                                return _vm.deleteRow(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "角色分配" },
                            on: {
                              click: function($event) {
                                return _vm.applyRole(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-share" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c("gmPagination", {
        attrs: { config: _vm.pagination },
        on: { changeCurrent: _vm.changeCurrent }
      }),
      _c("user-info", {
        ref: "userDetail",
        attrs: {
          orgTree: _vm.orgTree,
          ipconfig: _vm.ipconfig,
          dicArr: _vm.dicData,
          userDetailModal: _vm.userDetailModal,
          detailList: _vm.detailList,
          gmdisabled: _vm.gmdisabled
        },
        on: { fatherMethod: _vm.query }
      }),
      _c("applyrole", {
        ref: "applyRole",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicArr: _vm.dicData,
          showApplyRole: _vm.showApplyRole
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var UserManage = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

UserManage.install = function (Vue) {
  Vue.component(UserManage.name, UserManage);
};

var isArray = isArray$1;

function _arrayWithHoles(arr) {
  if (isArray(arr)) return arr;
}

var getIterator = getIterator$1;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

var dictionaryService = {
  getDicList: function getDicList(config, params) {
    var url = config + RESTURL.sysdic.query;
    return $axios.get(url, params);
  },
  saveDic: function saveDic(config, params) {
    var url = config + RESTURL.sysdic.save;
    return $axios.post(url, params);
  },
  deleteDic: function deleteDic(config, params) {
    var url = config + RESTURL.sysdic.remove;
    return $axios.post(url, params);
  },
  publics: function publics(config, item) {
    var url = config + RESTURL.sysdic.publics;
    return $axios.get(url, {
      appkey: item
    });
  },
  getNodeItem: function getNodeItem(pItems, currentItems) {
    for (var i = 0; i < pItems.length; i++) {
      if (pItems[i]['id'] === currentItems['pid']) {
        currentItems = pItems[i];
        break;
      }

      if (pItems[i].childrens && pItems[i].childrens.length > 0) {
        currentItems = this.getNodeItem(pItems[i].childrens, currentItems);
      }
    }

    return currentItems;
  },
  getArrayByName: function getArrayByName(arrayData, queryName, dataName, attChildren) {
    if (!queryName || queryName == null) {
      return arrayData;
    }

    if (arrayData == null || arrayData.length === 0) {
      return;
    }

    dataName = dataName == null ? 'name' : dataName;
    attChildren = attChildren == null ? 'childrens' : attChildren;
    var result = [];

    for (var i = 0; i < arrayData.length; i++) {
      if (arrayData[i][dataName].indexOf(queryName) >= 0) {
        result.push(arrayData[i]);
        continue;
      }

      if (arrayData[i][attChildren] && arrayData[i][attChildren].length > 0) {
        var childResult = this.getArrayByName(arrayData[i][attChildren], queryName, dataName, attChildren);
        result = result.concat(childResult);
      }
    }

    return result;
  }
};

var script$7 = {
  name: "addPer",
  components: {
    gmDicSelect: gmDicSelect
  },
  props: {
    showAddPer: Object,
    perDetail: Object,
    radio: String,
    queryFromFather: {
      type: Function
    },
    dicArr: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      validator: validate
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      _this.$refs.perForm.clearValidate();
    },
    save: function save(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.$confirm('确认保存吗？', '提示', {}).then(function () {
            permissionService.savePermission(_this2.ipconfig.UUMS_SERVER, _this2.perDetail).then(function (res) {
              _this2.$message.success('保存成功!');

              _this2.queryFromFather();
            }, function (error) {
              _this2.$message.error(error.message);
            });
            _this2.showAddPer.isShow = false;
          });
        } else {
          _this2.$message.error('请完善表单');
        }
      });
    }
  }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.showAddPer.title,
        visible: _vm.showAddPer.isShow,
        center: ""
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.showAddPer, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "perForm",
          attrs: { model: _vm.perDetail, "label-width": "10.5rem" }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "子系统" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.radio,
                  callback: function($$v) {
                    _vm.radio = $$v;
                  },
                  expression: "radio"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "上级权限" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.showAddPer.parentPer,
                  callback: function($$v) {
                    _vm.$set(_vm.showAddPer, "parentPer", $$v);
                  },
                  expression: "showAddPer.parentPer"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "权限名称",
                prop: "title",
                rules: [_vm.validator.required]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.perDetail.title,
                  callback: function($$v) {
                    _vm.$set(_vm.perDetail, "title", $$v);
                  },
                  expression: "perDetail.title"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "权限标识符",
                prop: "permValue",
                rules: [_vm.validator.required]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.perDetail.permValue,
                  callback: function($$v) {
                    _vm.$set(_vm.perDetail, "permValue", $$v);
                  },
                  expression: "perDetail.permValue"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "权限类型",
                prop: "type",
                rules: [_vm.validator.required]
              }
            },
            [
              _c("gm-dic-select", {
                ref: "type",
                attrs: {
                  clearable: "",
                  data: _vm.dicArr,
                  filterable: "",
                  type: "权限类型",
                  placeholder: "请选择"
                },
                model: {
                  value: _vm.perDetail.type,
                  callback: function($$v) {
                    _vm.$set(_vm.perDetail, "type", $$v);
                  },
                  expression: "perDetail.type"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "权限资源地址", prop: "uri" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.perDetail.uri,
                  callback: function($$v) {
                    _vm.$set(_vm.perDetail, "uri", $$v);
                  },
                  expression: "perDetail.uri"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "排序",
                prop: "orders",
                rules: [_vm.validator.number]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.perDetail.orders,
                  callback: function($$v) {
                    _vm.$set(_vm.perDetail, "orders", $$v);
                  },
                  expression: "perDetail.orders"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "描述", prop: "description" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.perDetail.description,
                  callback: function($$v) {
                    _vm.$set(_vm.perDetail, "description", $$v);
                  },
                  expression: "perDetail.description"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  _vm.showAddPer.isShow = false;
                }
              }
            },
            [_vm._v("取 消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              nativeOn: {
                click: function($event) {
                  return _vm.save("perForm")
                }
              }
            },
            [_vm._v("保 存")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var addPer = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

var script$8 = {
  name: 'permission',
  components: {
    gmPagination: gmPagination,
    gmDicSpan: gmDicSpan,
    addPer: addPer
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      pagination: {},
      Tagname: [],
      radio: '',
      btnName: '更多',
      showMoreApp: false,
      firstID: '',
      fisrtTitle: '',
      tableData: [],
      listLoading: false,
      appLoading: false,
      queryForm: {},
      showAddPer: {
        isShow: false
      },
      perDetail: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    _this.getApp();
  },
  methods: {
    getApp: function getApp() {
      var _this2 = this;

      this.appLoading = true;
      appService.getAppList(this.ipconfig.UUMS_SERVER, {
        size: 100
      }).then(function (res) {
        var appData = res.data.records;
        var arr = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = appData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                item = _step$value[1];

            if (index == 0) {
              _this2.radio = item.title;
              _this2.fisrtTitle = item.title;
            }

            arr[index] = {};
            arr[index].name = item.title;
            arr[index].id = item.id;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this2.Tagname = arr.slice(0);
        _this2.firstID = arr[0].id;
        _this2.queryForm = {
          appId: arr[0].id
        };
        _this2.appLoading = false;

        _this2.query();
      });
    },
    changeApp: function changeApp(item) {
      console.log('item', item);
      this.queryForm = {
        appId: item.id
      };
      this.query();
    },
    showMore: function showMore() {
      this.showMoreApp = !this.showMoreApp;

      if (this.showMoreApp == false) {
        this.btnName = '更多';
      } else {
        this.btnName = '收起';
      }
    },
    query: function query() {
      var _this3 = this;

      this.listLoading = true;
      permissionService.getList(this.ipconfig.UUMS_SERVER, this.queryForm).then(function (res) {
        if (res.data && res.data.length > 0) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = res.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var item = _step2.value;
              item.type = item.type + '';
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          _this3.tableData = res.data;
        } else {
          _this3.tableData = [];
        }

        _this3.listLoading = false;
      }, function (error) {
        _this3.$message.error(error.message);
      });
    },
    loadNode: function loadNode(tree, treeNode, resolve) {
      resolve(tree.childrens);
    },
    queryData: function queryData() {
      var _this4 = this;

      this.listLoading = true;
      permissionService.getList(this.ipconfig.UUMS_SERVER, this.queryForm).then(function (res) {
        var result = dictionaryService.getArrayByName(res.data, _this4.queryForm.title, 'title', null);
        _this4.tableData = GM$1.CommonOper.hasChildren('childrens', result);
        _this4.listLoading = false;
      }, function (error) {
        _this4.$message.error(error.message);
      });
    },
    clearData: function clearData() {
      this.queryForm = {
        appId: this.firstID
      };
      this.radio = this.fisrtTitle;
      this.query();
    },
    addPer: function addPer() {
      this.perDetail = {
        appId: this.queryForm.appId
      };
      this.showAddPer.isShow = true;
      this.showAddPer.title = '新增权限';
      this.showAddPer.parentPer = null;
      this.$nextTick(function () {
        this.$refs.per.loadDialogData();
      });
    },
    updatePer: function updatePer(index, row) {
      this.showAddPer.isShow = true;
      this.showAddPer.title = '修改权限';

      if (row.pid == null) {
        this.showAddPer.parentPer = null;
      } else {
        var pnode = dictionaryService.getNodeItem(this.tableData, row);
        this.showAddPer.parentPer = pnode.title;
      }

      this.$nextTick(function () {
        this.perDetail = Object.assign({}, row);
        this.perDetail.type = row.type + '';
      });
      delete this.perDetail.childrens;
    },
    deletePer: function deletePer(index, row) {
      var _this5 = this;

      this.$confirm('确认删除吗？', '提示', {}).then(function () {
        var params = {
          permissionId: row.id
        };
        permissionService.deletePermission(_this5.ipconfig.UUMS_SERVER, params).then(function (res) {
          _this5.listLoading = false;

          _this5.$message({
            message: '删除成功',
            type: 'success'
          });

          _this5.query();
        }, function (error) {
          _this5.$message.error(error.message);

          _this5.listLoading = false;
        });
      });
    },
    addChildPer: function addChildPer(index, row) {
      this.showAddPer.parentPer = row.title;
      this.perDetail = {
        pid: row.id,
        appId: this.queryForm.appId
      };
      this.showAddPer.isShow = true;
      this.showAddPer.title = '添加下级权限';
      this.$nextTick(function () {
        this.$refs.per.loadDialogData();
      });
    }
  }
};

var css$5 = ".appcontainer[data-v-074c3448]{position:relative;line-height:34px}.appcontainer .title[data-v-074c3448]{float:left;width:95px;overflow:hidden;font-size:14px;text-align:left}.appcontainer .app-list[data-v-074c3448]{width:815px;margin-left:100px;padding-left:10px;overflow:hidden;height:70px}.appcontainer .app-list .el-radio-group .el-radio-button[data-v-074c3448]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.appcontainer .app-list .el-radio-group .el-radio-button[data-v-074c3448] .el-radio-button__inner{width:150px;border:none;height:35px;padding:10px 15px}.appcontainer .more-btn[data-v-074c3448]{position:absolute;top:.5rem;left:950px;height:auto;line-height:22px;overflow:hidden;zoom:1}.appcontainer .showMore[data-v-074c3448]{overflow:auto}";
styleInject(css$5);

/* script */
const __vue_script__$8 = script$8;
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-container",
    { staticClass: "container" },
    [
      _c(
        "el-form",
        { attrs: { inline: true, model: _vm.queryForm, size: "small" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                attrs: { placeholder: "权限名称", clearable: "" },
                model: {
                  value: _vm.queryForm.title,
                  callback: function($$v) {
                    _vm.$set(_vm.queryForm, "title", $$v);
                  },
                  expression: "queryForm.title"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.queryData } },
                [_vm._v("查询")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.clearData } },
                [_vm._v("清除")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.addPer } },
                [_vm._v("新增")]
              )
            ],
            1
          )
        ],
        1
      ),
      _c("div", { staticClass: "appcontainer" }, [
        _c("div", { staticClass: "title" }, [_c("span", [_vm._v("子系统：")])]),
        _c(
          "div",
          {
            staticClass: "app-list",
            class: _vm.showMoreApp == true ? "showMore" : ""
          },
          _vm._l(_vm.Tagname, function(item, index) {
            return _c(
              "el-radio-group",
              {
                key: index,
                attrs: { size: "mini" },
                on: {
                  change: function($event) {
                    return _vm.changeApp(item)
                  }
                },
                model: {
                  value: _vm.radio,
                  callback: function($$v) {
                    _vm.radio = $$v;
                  },
                  expression: "radio"
                }
              },
              [
                _c("el-radio-button", {
                  attrs: { label: item.name, size: "mini", title: item.name }
                })
              ],
              1
            )
          }),
          1
        ),
        _c(
          "div",
          { staticClass: "more-btn" },
          [
            _c(
              "el-button",
              {
                attrs: { type: "primary", size: "mini" },
                on: {
                  click: function($event) {
                    return _vm.showMore()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.btnName))]
            )
          ],
          1
        )
      ]),
      _c(
        "el-main",
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.listLoading,
                  expression: "listLoading"
                }
              ],
              ref: "table",
              staticClass: "table",
              attrs: {
                data: _vm.tableData,
                "row-key": "id",
                load: _vm.loadNode,
                lazy: "",
                "tree-props": {
                  children: "childrens",
                  hasChildren: "hasChildren"
                }
              }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "title", label: "名称" }
              }),
              _c("el-table-column", {
                attrs: { prop: "permValue", label: "权限标识符" }
              }),
              _c("el-table-column", {
                attrs: { prop: "uri", label: "菜单地址" }
              }),
              _c("el-table-column", {
                attrs: { label: "类型" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "权限类型",
                            binddata: scope.row.type + "",
                            data: _vm.dicData
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { prop: "description", label: "描述" }
              }),
              _c("el-table-column", {
                attrs: { prop: "orders", label: "排序", width: "120" }
              }),
              _c("el-table-column", {
                attrs: { fixed: "right", width: "220", label: "操作" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "修改" },
                            on: {
                              click: function($event) {
                                return _vm.updatePer(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-edit" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "删除" },
                            on: {
                              click: function($event) {
                                return _vm.deletePer(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "添加下级权限" },
                            on: {
                              click: function($event) {
                                return _vm.addChildPer(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-share" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c("add-Per", {
        ref: "per",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicArr: _vm.dicData,
          showAddPer: _vm.showAddPer,
          radio: _vm.radio,
          perDetail: _vm.perDetail,
          queryFromFather: _vm.query
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = "data-v-074c3448";
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Permission = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

Permission.install = function (Vue) {
  Vue.component(Permission.name, Permission);
};

var script$9 = {
  name: 'addRole',
  components: {
    gmDicSelect: gmDicSelect
  },
  props: {
    devRoleModal: Object,
    permissionData: Array,
    checkData: Array,
    roleList: Object,
    queryFromFather: {
      type: Function
    },
    dicArr: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      addRoleList: {},
      addLoading: false,
      validator: validate,
      data: [],
      defaultProps: {
        children: 'childrens',
        label: 'title'
      },
      dicData: []
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      _this.$refs.addRoleForm.resetFields();

      roleService.initAddModalData(_this);
    },
    handleCheckChange: function handleCheckChange(data, arrayNodes) {
      this.addRoleList.permissionIds = [];

      for (var i = 0; i < arrayNodes.checkedNodes.length; i++) {
        if (arrayNodes.checkedNodes[i].appId) {
          this.addRoleList.permissionIds.push(arrayNodes.checkedNodes[i]['id']);
        }
      }
    },
    addNewRole: function addNewRole(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this2.addRoleList.orders == null) {
            _this2.addRoleList.orders = 1;
          }

          _this2.addRoleList.status = 1;

          _this2.$confirm('确认提交吗？', '提示', {}).then(function () {
            _this2.addLoading = true;
            var param = Object.assign({}, _this2.addRoleList);
            roleService.save(_this2.ipconfig.UUMS_SERVER, param).then(function (res) {
              _this2.addLoading = false;

              _this2.$message({
                message: '提交成功',
                type: 'success'
              });

              _this2.devRoleModal.isShow = false;

              _this2.queryFromFather();
            }, function (error) {
              _this2.$message.error(error.message);

              _this2.addLoading = false;
            });
          });
        } else {
          _this2.$message.error('请完善表单');
        }
      });
    }
  }
};

var css$6 = ".formTree[data-v-45c14e14]{max-height:300px;overflow:auto}";
styleInject(css$6);

/* script */
const __vue_script__$9 = script$9;
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.devRoleModal.title,
        visible: _vm.devRoleModal.isShow,
        width: "60%"
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.devRoleModal, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "addRoleForm",
          attrs: { model: _vm.addRoleList, "label-width": "11rem" }
        },
        [
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "角色名称",
                        prop: "name",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addRoleList.name,
                          callback: function($$v) {
                            _vm.$set(_vm.addRoleList, "name", $$v);
                          },
                          expression: "addRoleList.name"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "角色显示名",
                        prop: "title",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addRoleList.title,
                          callback: function($$v) {
                            _vm.$set(_vm.addRoleList, "title", $$v);
                          },
                          expression: "addRoleList.title"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "是否可注册", prop: "show" } },
                    [
                      _c("gm-dic-select", {
                        ref: "show",
                        attrs: {
                          clearable: "",
                          data: _vm.dicArr,
                          filterable: "",
                          type: "是否",
                          placeholder: "是否可注册"
                        },
                        model: {
                          value: _vm.addRoleList.show,
                          callback: function($$v) {
                            _vm.$set(_vm.addRoleList, "show", $$v);
                          },
                          expression: "addRoleList.show"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "角色类型",
                        prop: "type",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("gm-dic-select", {
                        ref: "type",
                        attrs: {
                          clearable: "",
                          data: _vm.dicArr,
                          filterable: "",
                          type: "角色类型",
                          placeholder: "角色类型"
                        },
                        model: {
                          value: _vm.addRoleList.type,
                          callback: function($$v) {
                            _vm.$set(_vm.addRoleList, "type", $$v);
                          },
                          expression: "addRoleList.type"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "排序",
                        prop: "orders",
                        rules: [_vm.validator.required, _vm.validator.number]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addRoleList.orders,
                          callback: function($$v) {
                            _vm.$set(_vm.addRoleList, "orders", $$v);
                          },
                          expression: "addRoleList.orders"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "描述", prop: "description" } },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addRoleList.description,
                          callback: function($$v) {
                            _vm.$set(_vm.addRoleList, "description", $$v);
                          },
                          expression: "addRoleList.description"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "权限集合" } },
                    [
                      _c("el-tree", {
                        ref: "tree",
                        staticClass: "formTree",
                        attrs: {
                          data: _vm.data,
                          props: _vm.defaultProps,
                          "show-checkbox": "",
                          "node-key": "id"
                        },
                        on: { check: _vm.handleCheckChange }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  _vm.devRoleModal.isShow = false;
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.addLoading },
              nativeOn: {
                click: function($event) {
                  return _vm.addNewRole("addRoleForm")
                }
              }
            },
            [_vm._v("提交")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = "data-v-45c14e14";
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var addRole = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

var script$a = {
  name: 'applyUser',
  components: {
    gmPagination: gmPagination,
    gmDicSpan: gmDicSpan
  },
  props: {
    devApplyUserModal: Object,
    roleId: String,
    dicArr: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      tabs: [],
      activeStatus: '',
      userFilters: {},
      userTable: [],
      userIds: [],
      listLoading: false,
      addLoading: false,
      pagination: {}
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      roleService.initApplyModalData(_this);
      this.query();
    },
    query: function query() {
      roleService.queryUser(this.ipconfig.UUMS_SERVER, this.userFilters, this);
    },
    tabClick: function tabClick(e) {
      this.activeStatus = e.name;
      this.userFilters.bool = this.activeStatus;
      this.query();
    },
    handleSelectionChange: function handleSelectionChange(e) {
      var _this2 = this;

      this.userIds = [];
      e.forEach(function (user, index) {
        if (user.id) {
          _this2.userIds.push(user.id);
        }
      });
    },
    changeCurrent: function changeCurrent(val) {
      this.userFilters.current = val;
      this.query();
    },
    applyOrDelUser: function applyOrDelUser() {
      var _this3 = this;

      this.$confirm('确认提交吗？', '提示', {}).then(function () {
        _this3.addLoading = true;
        var bool = false;

        if (_this3.activeStatus === 'false') {
          bool = true;
        }

        var param = {
          roleId: _this3.roleId,
          userIds: _this3.userIds,
          bool: bool
        };
        roleService.addOrDeleteUser(_this3.ipconfig.UUMS_SERVER, param).then(function (res) {
          _this3.addLoading = false;

          _this3.$message({
            message: '提交成功',
            type: 'success'
          });

          _this3.query();
        }, function (error) {
          _this3.$message.error(error.message);

          _this3.addLoading = false;
        });
      });
    }
  }
};

/* script */
const __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.devApplyUserModal.title,
        visible: _vm.devApplyUserModal.isShow
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.devApplyUserModal, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-tabs",
        {
          staticClass: "selftabs",
          on: { "tab-click": _vm.tabClick },
          model: {
            value: _vm.activeStatus,
            callback: function($$v) {
              _vm.activeStatus = $$v;
            },
            expression: "activeStatus"
          }
        },
        _vm._l(_vm.tabs, function(item, index) {
          return _c(
            "el-tab-pane",
            { key: index, attrs: { label: item.label, name: item.name } },
            [
              _c(
                "div",
                { staticClass: "table" },
                [
                  _c(
                    "el-table",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.listLoading,
                          expression: "listLoading"
                        }
                      ],
                      attrs: { data: _vm.userTable },
                      on: { "selection-change": _vm.handleSelectionChange }
                    },
                    [
                      _c("el-table-column", {
                        attrs: { type: "selection", width: "55" }
                      }),
                      _c("el-table-column", {
                        attrs: {
                          prop: "loginName",
                          label: "登录账号",
                          "min-width": "100"
                        }
                      }),
                      _c("el-table-column", {
                        attrs: {
                          prop: "realName",
                          label: "简称",
                          "min-width": "80"
                        }
                      }),
                      _c("el-table-column", {
                        attrs: {
                          prop: "userInfo.sex",
                          label: "性别",
                          "min-width": "100"
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(scope) {
                                return [
                                  _c("gm-dic-span", {
                                    attrs: {
                                      type: "性别",
                                      binddata: scope.row.userInfo.sex + "",
                                      data: _vm.dicArr
                                    }
                                  })
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "el-col",
                { staticClass: "toolbar", attrs: { span: 24 } },
                [
                  _c("gm-pagination", {
                    staticStyle: { float: "right" },
                    attrs: { config: _vm.pagination },
                    on: { changeCurrent: _vm.changeCurrent }
                  })
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  _vm.devApplyUserModal.isShow = false;
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.addLoading },
              nativeOn: {
                click: function($event) {
                  return _vm.applyOrDelUser()
                }
              }
            },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeStatus === "false",
                      expression: "activeStatus==='false'"
                    }
                  ]
                },
                [_vm._v("分配")]
              ),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.activeStatus === "true",
                      expression: "activeStatus==='true'"
                    }
                  ]
                },
                [_vm._v("取消分配")]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var applyUser = normalizeComponent_1(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

var script$b = {
  name: 'RoleManage',
  components: {
    gmPagination: gmPagination,
    gmDicSpan: gmDicSpan,
    addRole: addRole,
    applyUser: applyUser
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      roleFilters: {},
      roleTable: [],
      pagination: {},
      listLoading: false,
      devRoleModal: {},
      roleList: {},
      devApplyUserModal: {},
      roleId: '',
      checkData: [],
      permissionData: [],
      permissionTreeData: [],
      systemData: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    roleService.init(this.ipconfig.UUMS_SERVER, _this);

    _this.query();
  },
  methods: {
    query: function query() {
      var _this2 = this;

      this.listLoading = true;
      roleService.getRoleList(this.ipconfig.UUMS_SERVER, this.roleFilters).then(function (res) {
        if (res && res.success) {
          _this2.roleTable = res.data.records;

          _this2.$set(_this2.pagination, 'total', res.data.total);

          _this2.listLoading = false;
        }
      }, function (error) {
        _this2.listLoading = false;

        _this2.$message.error(error.message);
      });
    },
    changeCurrent: function changeCurrent(val) {
      this.roleFilters.current = val;
      this.query();
    },
    queryData: function queryData() {
      this.roleFilters.current = 1;
      this.query();
    },
    clear: function clear() {
      this.pagination.currentPage = 1;
      this.roleFilters = {
        current: this.pagination.currentPage
      };
      this.query();
    },
    applyUser: function applyUser(index, row) {
      this.devApplyUserModal.isShow = true;
      this.roleId = row.id;
      this.$nextTick(function () {
        this.$refs.apply.loadDialogData();
      });
    },
    addNew: function addNew() {
      this.devRoleModal.isShow = true;
      this.devRoleModal.title = '新增角色';
      this.roleList = {};

      if (this.permissionTreeData && this.systemData) {
        this.checkData = [];
        this.permissionData = roleService.connectAppPermission(this.systemData, this.permissionTreeData);
      }

      this.$nextTick(function () {
        this.$refs.role.loadDialogData();
      });
    },
    modify: function modify(index, row) {
      var _this3 = this;

      this.devRoleModal.isShow = true;
      this.devRoleModal.title = '修改角色信息';
      this.roleList = row;

      if (this.permissionTreeData && this.systemData) {
        roleService.getRoleInfo(this.ipconfig.UUMS_SERVER, {
          roleId: row.id
        }).then(function (res) {
          if (res && res.success) {
            _this3.checkData = roleService.setCheckNodes(res.data.permissions);
            _this3.permissionData = roleService.connectAppPermission(_this3.systemData, _this3.permissionTreeData);

            _this3.$nextTick(function () {
              this.$refs.role.loadDialogData();
            });
          }
        }, function (error) {
          _this3.$message.error(error.message);
        });
      }
    },
    deleteRow: function deleteRow(index, row) {
      var _this4 = this;

      this.$confirm('确认删除该记录吗?', '提示', {
        type: 'warning'
      }).then(function () {
        _this4.listLoading = true;
        var params = {
          roleId: row.id
        };
        roleService.removeRole(_this4.ipconfig.UUMS_SERVER, params).then(function (res) {
          _this4.listLoading = false;

          _this4.$message({
            message: '删除成功',
            type: 'success'
          });

          _this4.query();
        }, function (error) {
          _this4.$message.error(error.message);

          _this4.listLoading = false;
        });
      });
    }
  }
};

/* script */
const __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-container",
    { staticClass: "container" },
    [
      _c(
        "div",
        { staticClass: "search" },
        [
          _c(
            "el-form",
            { attrs: { inline: true, model: _vm.roleFilters, size: "small" } },
            [
              _c(
                "el-form-item",
                [
                  _c("el-input", {
                    attrs: { placeholder: "角色显示名", clearable: "" },
                    model: {
                      value: _vm.roleFilters.title,
                      callback: function($$v) {
                        _vm.$set(_vm.roleFilters, "title", $$v);
                      },
                      expression: "roleFilters.title"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    {
                      attrs: { type: "primary" },
                      on: { click: _vm.queryData }
                    },
                    [_vm._v("查询")]
                  )
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.clear } },
                    [_vm._v("清除")]
                  )
                ],
                1
              ),
              _c(
                "el-form-item",
                [
                  _c(
                    "el-button",
                    { attrs: { type: "primary" }, on: { click: _vm.addNew } },
                    [_vm._v("新增")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "el-main",
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.listLoading,
                  expression: "listLoading"
                }
              ],
              staticClass: "table",
              attrs: { data: _vm.roleTable }
            },
            [
              _c("el-table-column", {
                attrs: {
                  prop: "title",
                  label: "显示名称",
                  "show-overflow-tooltip": ""
                }
              }),
              _c("el-table-column", { attrs: { prop: "name", label: "名称" } }),
              _c("el-table-column", {
                attrs: { label: "角色类型" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "角色类型",
                            binddata: scope.row.type + "",
                            data: _vm.dicData
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { prop: "description", label: "描述" }
              }),
              _c("el-table-column", {
                attrs: { prop: "orders", label: "排序", width: "120" }
              }),
              _c("el-table-column", {
                attrs: { label: "操作", fixed: "right", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "修改" },
                            on: {
                              click: function($event) {
                                return _vm.modify(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-edit-outline" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "删除" },
                            on: {
                              click: function($event) {
                                return _vm.deleteRow(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "用户分配" },
                            on: {
                              click: function($event) {
                                return _vm.applyUser(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-share" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c("gm-pagination", {
        attrs: { config: _vm.pagination },
        on: { changeCurrent: _vm.changeCurrent }
      }),
      _c("add-role", {
        ref: "role",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicArr: _vm.dicData,
          queryFromFather: _vm.query,
          devRoleModal: _vm.devRoleModal,
          roleList: _vm.roleList,
          permissionData: _vm.permissionData,
          checkData: _vm.checkData
        }
      }),
      _c("apply-user", {
        ref: "apply",
        attrs: {
          ipconfig: _vm.ipconfig,
          devApplyUserModal: _vm.devApplyUserModal,
          roleId: _vm.roleId,
          dicArr: _vm.dicData
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var RoleManage = normalizeComponent_1(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

RoleManage.install = function (Vue) {
  Vue.component(RoleManage.name, RoleManage);
};

var script$c = {
  name: 'addDic',
  props: {
    showAddDic: Object,
    DicDetail: Object,
    radio: String,
    dicArr: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      validator: validate
    };
  },
  methods: {
    initDiolog: function initDiolog() {
      this.$refs.addDicForm.clearValidate();
    },
    save: function save(formName) {
      var _this = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.$confirm('确认保存吗？', '提示', {}).then(function () {
            dictionaryService.saveDic(_this.ipconfig.UUMS_SERVER, _this.DicDetail).then(function (res) {
              _this.$message.success('保存成功!');

              _this.$parent.$parent.query();
            }, function (error) {
              _this.$message.error(error.message);
            });
            _this.showAddDic.isShow = false;
          });
        } else {
          _this.$message.error('请完善表单');
        }
      });
    }
  }
};

var css$7 = "";
styleInject(css$7);

/* script */
const __vue_script__$c = script$c;
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.showAddDic.title,
        visible: _vm.showAddDic.isShow,
        center: ""
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.showAddDic, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "addDicForm",
          attrs: { "label-width": "10.5rem", model: _vm.DicDetail }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "子系统" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.radio,
                  callback: function($$v) {
                    _vm.radio = $$v;
                  },
                  expression: "radio"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "上级字典", prop: "parentDic" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.showAddDic.parentDic,
                  callback: function($$v) {
                    _vm.$set(_vm.showAddDic, "parentDic", $$v);
                  },
                  expression: "showAddDic.parentDic"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "类型",
                prop: "type",
                rules: [_vm.validator.required]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.DicDetail.type,
                  callback: function($$v) {
                    _vm.$set(_vm.DicDetail, "type", $$v);
                  },
                  expression: "DicDetail.type"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "代码",
                prop: "value",
                rules: [_vm.validator.zhengnumber]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.DicDetail.value,
                  callback: function($$v) {
                    _vm.$set(_vm.DicDetail, "value", $$v);
                  },
                  expression: "DicDetail.value"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "代码名称",
                prop: "label",
                rules: [_vm.validator.required]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.DicDetail.label,
                  callback: function($$v) {
                    _vm.$set(_vm.DicDetail, "label", $$v);
                  },
                  expression: "DicDetail.label"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "描述", prop: "description" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.DicDetail.description,
                  callback: function($$v) {
                    _vm.$set(_vm.DicDetail, "description", $$v);
                  },
                  expression: "DicDetail.description"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  _vm.showAddDic.isShow = false;
                }
              }
            },
            [_vm._v("取 消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  return _vm.save("addDicForm")
                }
              }
            },
            [_vm._v("保 存")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = "data-v-64ae874a";
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var addDic = normalizeComponent_1(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

var script$d = {
  name: 'dictionary',
  components: {
    gmPagination: gmPagination,
    addDic: addDic
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      Tagname: [],
      radio: '',
      btnName: '更多',
      showMoreApp: false,
      firstID: '',
      fisrtTitle: '',
      tableData: [],
      listLoading: false,
      appLoading: false,
      queryForm: {},
      showAddDic: {
        isShow: false
      },
      DicDetail: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    _this.getApp();
  },
  methods: {
    getApp: function getApp() {
      var _this2 = this;

      this.appLoading = true;
      appService.getAppList(this.ipconfig.UUMS_SERVER, {
        size: 100
      }).then(function (res) {
        var appData = res.data.records;
        var arr = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = appData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                item = _step$value[1];

            if (index == 0) {
              _this2.radio = item.title;
              _this2.fisrtTitle = item.title;
              _this2.queryForm.appKey = item.name;
            }

            arr[index] = {};
            arr[index].name = item.title;
            arr[index].id = item.id;
            arr[index].appKey = item.name;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this2.Tagname = arr.slice(0);
        _this2.firstID = arr[0].id;
        _this2.queryForm.appId = arr[0].id;
        _this2.appLoading = false;

        _this2.query();
      });
    },
    changeApp: function changeApp(item) {
      this.queryForm = {
        appId: item.id,
        appKey: item.appKey
      };
      this.query();
    },
    showMore: function showMore() {
      this.showMoreApp = !this.showMoreApp;

      if (this.showMoreApp == false) {
        this.btnName = '更多';
      } else {
        this.btnName = '收起';
      }
    },
    query: function query() {
      var _this3 = this;

      this.listLoading = true;
      dictionaryService.getDicList(this.ipconfig.UUMS_SERVER, this.queryForm).then(function (res) {
        if (res.data && res.data.length > 0) {
          _this3.tableData = res.data;
        } else {
          _this3.tableData = [];
        }

        _this3.listLoading = false;
      }, function (error) {
        _this3.$message.error(error.message);
      });
    },
    loadNode: function loadNode(tree, treeNode, resolve) {
      setTimeout(function () {
        resolve(tree.childrens);
      }, 1000);
    },
    queryData: function queryData() {
      this.query();
    },
    clearData: function clearData() {
      this.queryForm = {
        appId: this.firstID
      };
      this.radio = this.fisrtTitle;
      this.query();
    },
    addDic: function addDic() {
      this.DicDetail = {
        appId: this.queryForm.appId
      };
      this.showAddDic.isShow = true;
      this.showAddDic.title = '新增字典';
      this.showAddDic.parentDic = null;
      this.$nextTick(function () {
        this.$refs.DicModel.initDiolog();
      });
    },
    updateDic: function updateDic(index, row) {
      if (row.pid == null) {
        this.showAddDic.parentDic = null;
      } else {
        var pnode = dictionaryService.getNodeItem(this.tableData, row);
        this.showAddDic.parentDic = pnode.label;
      }

      this.DicDetail = {};
      this.DicDetail = Object.assign({}, row);
      delete this.DicDetail.childrens;
      this.showAddDic.isShow = true;
      this.showAddDic.title = '修改字典信息';
    },
    deleteDic: function deleteDic(index, row) {
      var _this4 = this;

      this.$confirm('确认删除吗？', '提示', {}).then(function () {
        _this4.listLoading = true;
        var params = {
          id: row.id
        };
        dictionaryService.deleteDic(_this4.ipconfig.UUMS_SERVER, params).then(function (res) {
          _this4.listLoading = false;

          _this4.$message({
            message: '删除成功',
            type: 'success'
          });

          _this4.query();
        }, function (error) {
          _this4.$message.error(error.message);

          _this4.listLoading = false;
        });
      });
    },
    addChildDic: function addChildDic(index, row) {
      this.showAddDic.parentDic = row.label;
      this.DicDetail = {
        pid: row.id,
        appId: this.queryForm.appId
      };
      this.showAddDic.isShow = true;
      this.showAddDic.title = '添加下级字典';
      this.$nextTick(function () {
        this.$refs.DicModel.initDiolog();
      });
    },
    publics: function publics(item) {
      var _this5 = this;

      if (item === 'all') {
        dictionaryService.publics(this.ipconfig.UUMS_SERVER).then(function (res) {
          if (res.success === true) {
            _this5.$message({
              message: '同步成功',
              type: 'success'
            });
          }
        }, function (error) {
          _this5.$message({
            message: '同步失败',
            type: 'warning'
          });
        });
      } else {
        dictionaryService.publics(this.ipconfig.UUMS_SERVER, this.queryForm.appKey).then(function (res) {
          if (res.success === true) {
            _this5.$message({
              message: '同步成功',
              type: 'success'
            });
          }
        }, function (error) {
          _this5.$message({
            message: '同步失败',
            type: 'warning'
          });
        });
      }
    }
  }
};

var css$8 = ".appcontainer[data-v-b023b5d0]{position:relative;line-height:34px}.appcontainer .title[data-v-b023b5d0]{float:left;width:95px;overflow:hidden;font-size:14px;text-align:left}.appcontainer .app-list[data-v-b023b5d0]{width:815px;margin-left:100px;padding-left:10px;overflow:hidden;height:70px}.appcontainer .app-list .el-radio-group .el-radio-button[data-v-b023b5d0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.appcontainer .app-list .el-radio-group .el-radio-button[data-v-b023b5d0] .el-radio-button__inner{width:150px;border:none;height:35px;padding:10px 15px}.appcontainer .more-btn[data-v-b023b5d0]{position:absolute;top:.5rem;left:950px;height:auto;line-height:22px;overflow:hidden;zoom:1}.appcontainer .showMore[data-v-b023b5d0]{overflow:auto}";
styleInject(css$8);

/* script */
const __vue_script__$d = script$d;
/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-container",
    { staticClass: "container" },
    [
      _c(
        "el-form",
        { attrs: { inline: true, size: "small" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                attrs: { placeholder: "字典名称" },
                model: {
                  value: _vm.queryForm.label,
                  callback: function($$v) {
                    _vm.$set(_vm.queryForm, "label", $$v);
                  },
                  expression: "queryForm.label"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.queryData } },
                [_vm._v("查询")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.clearData } },
                [_vm._v("清除")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.addDic } },
                [_vm._v("新增")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.publics()
                    }
                  }
                },
                [_vm._v("同步")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.publics("all")
                    }
                  }
                },
                [_vm._v("同步所有")]
              )
            ],
            1
          )
        ],
        1
      ),
      _c("div", { staticClass: "appcontainer" }, [
        _c("div", { staticClass: "title" }, [_c("span", [_vm._v("子系统：")])]),
        _c(
          "div",
          {
            staticClass: "app-list",
            class: _vm.showMoreApp == true ? "showMore" : ""
          },
          _vm._l(_vm.Tagname, function(item, index) {
            return _c(
              "el-radio-group",
              {
                key: index,
                attrs: { size: "mini" },
                on: {
                  change: function($event) {
                    return _vm.changeApp(item)
                  }
                },
                model: {
                  value: _vm.radio,
                  callback: function($$v) {
                    _vm.radio = $$v;
                  },
                  expression: "radio"
                }
              },
              [
                _c("el-radio-button", {
                  attrs: { label: item.name, size: "mini", title: item.name }
                })
              ],
              1
            )
          }),
          1
        ),
        _c(
          "div",
          { staticClass: "more-btn" },
          [
            _c(
              "el-button",
              {
                attrs: { type: "primary", size: "mini" },
                on: {
                  click: function($event) {
                    return _vm.showMore()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.btnName))]
            )
          ],
          1
        )
      ]),
      _c(
        "el-main",
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.listLoading,
                  expression: "listLoading"
                }
              ],
              staticClass: "table",
              staticStyle: { width: "100%" },
              attrs: {
                data: _vm.tableData,
                "row-key": "id",
                load: _vm.loadNode,
                lazy: "",
                "tree-props": {
                  children: "childrens",
                  hasChildren: "hasChildren"
                }
              }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "label", label: "名称" }
              }),
              _c("el-table-column", {
                attrs: { prop: "value", label: "代码" }
              }),
              _c("el-table-column", { attrs: { prop: "type", label: "类型" } }),
              _c("el-table-column", {
                attrs: { prop: "description", label: "描述" }
              }),
              _c("el-table-column", {
                attrs: { fixed: "right", label: "操作", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "修改" },
                            on: {
                              click: function($event) {
                                return _vm.updateDic(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-edit" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "删除" },
                            on: {
                              click: function($event) {
                                return _vm.deleteDic(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "添加下级字典" },
                            on: {
                              click: function($event) {
                                return _vm.addChildDic(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-share" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c("add-Dic", {
        ref: "DicModel",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicArr: _vm.dicData,
          showAddDic: _vm.showAddDic,
          DicDetail: _vm.DicDetail,
          radio: _vm.radio
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = "data-v-b023b5d0";
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var dictionary = normalizeComponent_1(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

dictionary.install = function (Vue) {
  Vue.component(dictionary.name, dictionary);
};

var areaService = {
  init: function init(_this) {
    _this.areaTable = [];
    _this.devAreaModal = {
      title: '配置下级菜单',
      isShow: false
    };
    _this.parentItem = {};
    _this.devUploadModal = {
      title: '导入区域文件',
      isShow: false
    };
  },
  initAddModalData: function initAddModalData(_this) {
    _this.addAreaList = {};

    if (_this.isUpdata) {
      _this.addAreaList = Object.assign({}, _this.parentItem);
    }
    _this.addLoading = false;
  },
  initUploadModalData: function initUploadModalData(_this) {
    _this.formData = new FormData();
    _this.addLoading = false;
  },
  query: function query(config, params) {
    var pPromise = $axios.get(config + RESTURL.area.query, params);
    return pPromise;
  },
  remove: function remove(config, payload) {
    var pPromise = $axios.post(config + RESTURL.area.remove, payload);
    return pPromise;
  },
  save: function save(config, payload) {
    var pPromise = $axios.post(config + RESTURL.area.save, payload);
    return pPromise;
  },
  upload: function upload(config, payload) {
    var pPromise = $axios.uploadRequest(config + RESTURL.area.upload, payload);
    return pPromise;
  }
};

var CONFIG$1 = {
  UNIFY_IP: 'http://192.168.5.43:8189/',
  LOGIN_SERVER: 'http://192.168.1.82:8082/gm-sso-server/',
  UUMS_SERVER: 'http://192.168.1.82:8082/uums-server/',
  FMS_SERVER: 'http://192.168.5.35:82/fms-server/',
  LOGIN_PATH: 'http://192.168.1.82:8082/ldimp/gs-login',
  APP_KEY: 'gm-uums'
};

var orgizaionService = {
  areaData: [],
  init: function init(_this) {
    _this.orgTable = [];
    _this.devOrgModal = {
      title: '配置下级菜单',
      isShow: false
    };
    _this.parentItem = {};
    this.getAreaData();
  },
  initAddModalData: function initAddModalData(_this) {
    _this.addOrgList = {};

    if (_this.isUpdata) {
      _this.addOrgList = Object.assign({}, _this.parentItem);
    }
    _this.treeData = this.areaData;
    _this.addLoading = false;
  },
  getAreaData: function getAreaData() {
    var _this = this;

    areaService.query(CONFIG$1.UUMS_SERVER, {}).then(function (response) {
      _this.areaData = response.data;
    }, function () {});
  },
  query: function query(config, params) {
    var pPromise = $axios.get(config + RESTURL.organization.query, params);
    return pPromise;
  },
  remove: function remove(config, payload) {
    var pPromise = $axios.post(config + RESTURL.organization.remove, payload);
    return pPromise;
  },
  save: function save(config, payload) {
    var pPromise = $axios.post(config + RESTURL.organization.save, payload);
    return pPromise;
  }
};

var script$e = {
  name: 'addOrg',
  components: {
    gmDicSelect: gmDicSelect,
    gmTreeSelect: gmTreeSelect
  },
  props: {
    devOrgModal: Object,
    parentItem: Object,
    isUpdata: Boolean,
    dicArr: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      addOrgList: {},
      addLoading: false,
      treeData: [],
      config: {
        value: 'id',
        label: 'title',
        children: 'childrens'
      },
      validator: validate
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      _this.$refs.addOrgForm.resetFields();

      orgizaionService.initAddModalData(_this);
    },
    addNewOrg: function addNewOrg(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (!_this2.isUpdata) {
            _this2.addOrgList.pid = _this2.parentItem.id;
          }

          _this2.addOrgList.status = 1;
          _this2.addOrgList.orders = 1;

          _this2.$confirm('确认提交吗？', '提示', {}).then(function () {
            _this2.addLoading = true;
            var param = Object.assign({}, _this2.addOrgList);
            orgizaionService.save(_this2.ipconfig.UUMS_SERVER, param).then(function (res) {
              _this2.addLoading = false;

              _this2.$message({
                message: '保存成功',
                type: 'success'
              });

              _this2.devOrgModal.isShow = false;

              _this2.$parent.$parent.query();
            }, function (error) {
              _this2.$message.error(error.message);

              _this2.addLoading = false;
            });
          });
        } else {
          _this2.$message.error('请完善表单');
        }
      });
    }
  }
};

/* script */
const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.devOrgModal.title,
        visible: _vm.devOrgModal.isShow,
        width: "60%"
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.devOrgModal, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "addOrgForm",
          attrs: { model: _vm.addOrgList, "label-width": "11rem" }
        },
        [
          _c(
            "el-row",
            [
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-form-item", { staticClass: "title" }, [
                    _c("label", [_vm._v("机构信息")])
                  ]),
                  _c(
                    "el-form-item",
                    { attrs: { label: "上级机构" } },
                    [
                      _c("el-input", {
                        attrs: { readonly: "readonly" },
                        model: {
                          value: _vm.devOrgModal.parentOrg,
                          callback: function($$v) {
                            _vm.$set(_vm.devOrgModal, "parentOrg", $$v);
                          },
                          expression: "devOrgModal.parentOrg"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "归属区域",
                        prop: "areaId",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("gm-tree-select", {
                        attrs: { treeData: _vm.treeData, props: _vm.config },
                        model: {
                          value: _vm.addOrgList.areaId,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "areaId", $$v);
                          },
                          expression: "addOrgList.areaId"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "机构名称",
                        prop: "name",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.name,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "name", $$v);
                          },
                          expression: "addOrgList.name"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "机构编码",
                        prop: "code",
                        rules: [
                          _vm.validator.required,
                          _vm.validator.naturalNumber
                        ]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.code,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "code", $$v);
                          },
                          expression: "addOrgList.code"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "机构类型",
                        prop: "type",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("gm-dic-select", {
                        ref: "type",
                        attrs: {
                          data: _vm.dicArr,
                          clearable: "",
                          filterable: "",
                          type: "机构类型",
                          placeholder: "机构类型"
                        },
                        model: {
                          value: _vm.addOrgList.type,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "type", $$v);
                          },
                          expression: "addOrgList.type"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "区域类型", prop: "grade" } },
                    [
                      _c("gm-dic-select", {
                        ref: "type",
                        attrs: {
                          data: _vm.dicArr,
                          clearable: "",
                          filterable: "",
                          type: "区域类型",
                          placeholder: "区域类型"
                        },
                        model: {
                          value: _vm.addOrgList.grade,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "grade", $$v);
                          },
                          expression: "addOrgList.grade"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "备注", prop: "description" } },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.description,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "description", $$v);
                          },
                          expression: "addOrgList.description"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "el-col",
                { attrs: { span: 12 } },
                [
                  _c("el-form-item", { staticClass: "title" }, [
                    _c("label", [_vm._v("负责人信息")])
                  ]),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "负责人",
                        prop: "principal",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.principal,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "principal", $$v);
                          },
                          expression: "addOrgList.principal"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "电话",
                        prop: "phone",
                        rules: [_vm.validator.required, _vm.validator.phone]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.phone,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "phone", $$v);
                          },
                          expression: "addOrgList.phone"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "联系地址",
                        prop: "addr",
                        rules: [_vm.validator.required]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.addr,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "addr", $$v);
                          },
                          expression: "addOrgList.addr"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "邮政编码",
                        prop: "postalCode",
                        rules: [_vm.validator.postalcode]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.postalCode,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "postalCode", $$v);
                          },
                          expression: "addOrgList.postalCode"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    { attrs: { label: "传真", prop: "fax" } },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.fax,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "fax", $$v);
                          },
                          expression: "addOrgList.fax"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    {
                      attrs: {
                        label: "邮箱",
                        prop: "email",
                        rules: [_vm.validator.email]
                      }
                    },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.addOrgList.email,
                          callback: function($$v) {
                            _vm.$set(_vm.addOrgList, "email", $$v);
                          },
                          expression: "addOrgList.email"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  _vm.devOrgModal.isShow = false;
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.addLoading },
              nativeOn: {
                click: function($event) {
                  return _vm.addNewOrg("addOrgForm")
                }
              }
            },
            [_vm._v("提交")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var addOrg = normalizeComponent_1(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    undefined,
    undefined
  );

var script$f = {
  name: 'orgization',
  components: {
    gmTreeSelect: gmTreeSelect,
    gmDicSpan: gmDicSpan,
    gmPagination: gmPagination,
    addOrg: addOrg
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      orgFilters: {},
      orgTable: [],
      listLoading: false,
      devOrgModal: {},
      parentItem: {},
      isUpdata: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    orgizaionService.init(_this);

    _this.query();

    console.log('dicData', this.dicData);
  },
  methods: {
    query: function query() {
      var _this2 = this;

      this.listLoading = true;
      orgizaionService.query(this.ipconfig.UUMS_SERVER, this.orgFilters).then(function (res) {
        if (res && res.success) {
          _this2.orgTable = res.data;
          _this2.listLoading = false;
        }
      }, function (error) {
        _this2.$message.error(error.message);
      });
    },
    loadNode: function loadNode(tree, treeNode, resolve) {
      resolve(tree.childrens);
    },
    queryData: function queryData() {
      var _this3 = this;

      this.listLoading = true;
      orgizaionService.query(this.ipconfig.UUMS_SERVER, this.orgFilters).then(function (res) {
        var result = dictionaryService.getArrayByName(res.data, _this3.orgFilters.orgnizationName, 'name', null);
        _this3.orgTable = GM.CommonOper.hasChildren('childrens', result);
        _this3.listLoading = false;
      }, function (error) {
        _this3.$message.error(error.message);
      });
    },
    clear: function clear() {
      this.orgFilters = {};
      this.query();
    },
    deleteRow: function deleteRow(index, row) {
      var _this4 = this;

      this.$confirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        orgizaionService.remove(_this4.ipconfig.UUMS_SERVER, {
          id: row.id
        }).then(function (response) {
          _this4.query();

          _this4.$message({
            type: 'success',
            message: '删除成功!'
          });
        }, function (error) {
          _this4.$message.error(error.message);
        });
      });
    },
    addChild: function addChild(index, row) {
      this.parentItem = row;
      this.isUpdata = false;
      this.devOrgModal.isShow = true;
      this.devOrgModal.title = '添加下级机构';
      this.devOrgModal.parentOrg = row.name;
      this.$nextTick(function () {
        this.$refs.Org.loadDialogData();
      });
    },
    modify: function modify(index, row) {
      this.devOrgModal.isShow = true;
      this.devOrgModal.title = '修改机构信息';

      if (row.pid == null) {
        this.devOrgModal.parentOrg = null;
      } else {
        var pnode = dictionaryService.getNodeItem(this.orgTable, row);
        this.devOrgModal.parentOrg = pnode.name;
      }

      this.parentItem = row;
      this.isUpdata = true;
      this.$nextTick(function () {
        this.$refs.Org.loadDialogData();
      });
    },
    addNew: function addNew() {
      this.parentItem = {};
      this.isUpdata = false;
      this.devOrgModal.isShow = true;
      this.devOrgModal.title = '新增顶级机构';
      this.devOrgModal.parentOrg = null;
      this.$nextTick(function () {
        this.$refs.Org.loadDialogData();
      });
    }
  }
};

/* script */
const __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-container",
    { staticClass: "container" },
    [
      _c(
        "el-form",
        { attrs: { inline: true, model: _vm.orgFilters, size: "small" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                attrs: { placeholder: "机构名称" },
                model: {
                  value: _vm.orgFilters.orgnizationName,
                  callback: function($$v) {
                    _vm.$set(_vm.orgFilters, "orgnizationName", $$v);
                  },
                  expression: "orgFilters.orgnizationName"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.queryData } },
                [_vm._v("查询")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.clear } },
                [_vm._v("清除")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.addNew } },
                [_vm._v("新增")]
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "el-main",
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.listLoading,
                  expression: "listLoading"
                }
              ],
              staticClass: "table",
              staticStyle: { width: "100%" },
              attrs: {
                data: _vm.orgTable,
                "row-key": "id",
                load: _vm.loadNode,
                lazy: "",
                "tree-props": {
                  children: "childrens",
                  hasChildren: "hasChildren"
                }
              }
            },
            [
              _c("el-table-column", {
                attrs: {
                  prop: "name",
                  label: "机构名称",
                  "show-overflow-tooltip": ""
                }
              }),
              _c("el-table-column", {
                attrs: {
                  prop: "areaName",
                  label: "归属区域",
                  "show-overflow-tooltip": ""
                }
              }),
              _c("el-table-column", {
                attrs: { prop: "code", label: "机构编码" }
              }),
              _c("el-table-column", {
                attrs: { label: "机构类型" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "机构类型",
                            binddata: scope.row.type,
                            data: _vm.dicData
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { label: "机构级别", width: "180" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "区域类型",
                            binddata: scope.row.grade,
                            data: _vm.dicData
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { label: "操作", fixed: "right", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "修改" },
                            on: {
                              click: function($event) {
                                return _vm.modify(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-edit" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "删除" },
                            on: {
                              click: function($event) {
                                return _vm.deleteRow(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "添加下级机构" },
                            on: {
                              click: function($event) {
                                return _vm.addChild(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-share" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c("add-org", {
        ref: "Org",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicArr: _vm.dicData,
          devOrgModal: _vm.devOrgModal,
          parentItem: _vm.parentItem,
          isUpdata: _vm.isUpdata
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var orgnization = normalizeComponent_1(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    undefined,
    undefined
  );

orgnization.install = function (Vue) {
  Vue.component(orgnization.name, orgnization);
};

var script$g = {
  name: 'addArea',
  components: {
    gmDicSelect: gmDicSelect
  },
  props: {
    devAreaModal: Object,
    parentItem: Object,
    isUpdata: Boolean,
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      addAreaList: {},
      addLoading: false,
      validator: validate
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      _this.$refs.addAreaForm.resetFields();

      areaService.initAddModalData(_this);
    },
    addNewArea: function addNewArea(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (!_this2.isUpdata) {
            _this2.addAreaList.pid = _this2.parentItem.id;
          }

          _this2.$confirm('确认提交吗？', '提示', {}).then(function () {
            _this2.addLoading = true;
            var param = Object.assign({}, _this2.addAreaList);
            areaService.save(_this2.ipconfig.UUMS_SERVER, param).then(function (res) {
              _this2.addLoading = false;

              _this2.$message({
                message: '保存成功',
                type: 'success'
              });

              _this2.devAreaModal.isShow = false;

              _this2.$parent.$parent.query();
            }, function (error) {
              _this2.$message.error(error.message);

              _this2.addLoading = false;
            });
          });
        } else {
          _this2.$message.error('请完善表单');
        }
      });
    }
  }
};

/* script */
const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.devAreaModal.title,
        visible: _vm.devAreaModal.isShow
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.devAreaModal, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        {
          ref: "addAreaForm",
          attrs: { model: _vm.addAreaList, "label-width": "11rem" }
        },
        [
          _c(
            "el-form-item",
            { attrs: { label: "上级区域" } },
            [
              _c("el-input", {
                attrs: { disabled: true },
                model: {
                  value: _vm.devAreaModal.parentAera,
                  callback: function($$v) {
                    _vm.$set(_vm.devAreaModal, "parentAera", $$v);
                  },
                  expression: "devAreaModal.parentAera"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "区域名称",
                prop: "title",
                rules: [_vm.validator.required]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.addAreaList.title,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "title", $$v);
                  },
                  expression: "addAreaList.title"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "简称", prop: "totalCount" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.addAreaList.abbreviation,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "abbreviation", $$v);
                  },
                  expression: "addAreaList.abbreviation"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "别名", prop: "alias" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.addAreaList.alias,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "alias", $$v);
                  },
                  expression: "addAreaList.alias"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "区域编码",
                prop: "code",
                rules: [_vm.validator.required, _vm.validator.number]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.addAreaList.code,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "code", $$v);
                  },
                  expression: "addAreaList.code"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "区域类型", prop: "areaType" } },
            [
              _c("gm-dic-select", {
                ref: "type",
                attrs: {
                  data: _vm.dicData,
                  clearable: "",
                  filterable: "",
                  type: "区域类型",
                  placeholder: "区域类型"
                },
                model: {
                  value: _vm.addAreaList.areaType,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "areaType", $$v);
                  },
                  expression: "addAreaList.areaType"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            {
              attrs: {
                label: "排序",
                prop: "orders",
                rules: [_vm.validator.required, _vm.validator.number]
              }
            },
            [
              _c("el-input", {
                model: {
                  value: _vm.addAreaList.orders,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "orders", $$v);
                  },
                  expression: "addAreaList.orders"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            { attrs: { label: "备注", prop: "description" } },
            [
              _c("el-input", {
                model: {
                  value: _vm.addAreaList.description,
                  callback: function($$v) {
                    _vm.$set(_vm.addAreaList, "description", $$v);
                  },
                  expression: "addAreaList.description"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  _vm.devAreaModal.isShow = false;
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.addLoading },
              nativeOn: {
                click: function($event) {
                  return _vm.addNewArea("addAreaForm")
                }
              }
            },
            [_vm._v("提交")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var addArea = normalizeComponent_1(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    undefined,
    undefined
  );

var script$h = {
  name: 'uploadFile',
  props: {
    devUploadModal: Object,
    dicArr: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      addLoading: false,
      formData: new FormData()
    };
  },
  methods: {
    loadDialogData: function loadDialogData() {
      var _this = this;

      areaService.initUploadModalData(_this);
      _this.$refs.file.value = '';
    },
    tirggerFile: function tirggerFile() {
      var fil = this.$refs.file.files;

      if (!GM.CommonOper.judgeFileType(fil, 'Excel')) {
        this.$message.error('请选择Excel文件');
        return;
      }

      this.formData.append('file', fil[0]);
      this.formData.append('token', GM.token);
    },
    upload: function upload() {
      var _this2 = this;

      this.addLoading = true;

      if (!this.$refs.file.files || this.$refs.file.files.length === 0) {
        this.$message.error('请选择文件');
        return;
      }

      areaService.upload(this.ipconfig.UUMS_SERVER, this.formData).then(function (response) {
        _this2.query();

        _this2.$message({
          type: 'success',
          message: '导入成功!'
        });

        _this2.addLoading = false;
        _this2.devUploadModal.isShow = false;
      }, function (error) {
        _this2.$message.error(error.message);

        _this2.addLoading = false;
      });
    },
    clear: function clear() {
      this.$refs.file.value = '';
      this.devUploadModal.isShow = false;
    }
  }
};

/* script */
const __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      attrs: {
        title: _vm.devUploadModal.title,
        visible: _vm.devUploadModal.isShow
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.devUploadModal, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-form",
        { attrs: { "label-width": "11rem" } },
        [
          _c("el-form-item", { attrs: { label: "导入文件" } }, [
            _c("input", {
              ref: "file",
              attrs: {
                type: "file",
                accept:
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
              },
              on: { change: _vm.tirggerFile }
            })
          ])
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  return _vm.clear($event)
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary", loading: _vm.addLoading },
              nativeOn: {
                click: function($event) {
                  return _vm.upload($event)
                }
              }
            },
            [_vm._v("提交")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var uploadFile = normalizeComponent_1(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    undefined,
    undefined
  );

var script$i = {
  name: 'AreaManager',
  components: {
    addArea: addArea,
    uploadFile: uploadFile,
    gmTreeSelect: gmTreeSelect,
    gmDicSpan: gmDicSpan,
    gmPagination: gmPagination
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      areaFilters: {},
      areaTable: [],
      listLoading: false,
      devAreaModal: {},
      devUploadModal: {},
      parentItem: {},
      isUpdata: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    areaService.init(_this);

    _this.query();
  },
  methods: {
    query: function query() {
      var _this2 = this;

      this.listLoading = true;
      areaService.query(this.ipconfig.UUMS_SERVER, this.areaFilters).then(function (res) {
        if (res && res.success) {
          _this2.areaTable = res.data;
          _this2.listLoading = false;
        }
      }, function (error) {
        _this2.$message.error(error.message);
      });
    },
    loadNode: function loadNode(tree, treeNode, resolve) {
      resolve(tree.childrens);
    },
    queryData: function queryData() {
      var _this3 = this;

      this.listLoading = true;
      areaService.query(this.ipconfig.UUMS_SERVER, this.areaFilters).then(function (res) {
        var result = dictionaryService.getArrayByName(res.data, _this3.areaFilters.areaName, 'title', null);
        _this3.areaTable = GM.CommonOper.hasChildren('childrens', result);
        _this3.listLoading = false;
      }, function (error) {
        _this3.$message.error(error.message);
      });
    },
    clear: function clear() {
      this.areaFilters = {};
      this.query();
    },
    deleteRow: function deleteRow(index, row) {
      var _this4 = this;

      this.$confirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        areaService.remove(_this4.ipconfig.UUMS_SERVER, {
          id: row.id
        }).then(function (response) {
          _this4.query();

          _this4.$message({
            type: 'success',
            message: '删除成功!'
          });
        }, function (error) {
          _this4.$message.error(error.message);
        });
      });
    },
    addChild: function addChild(index, row) {
      this.parentItem = row;
      this.isUpdata = false;
      this.devAreaModal.isShow = true;
      this.devAreaModal.title = '添加下级区域';
      this.devAreaModal.parentAera = row.title;
      this.$nextTick(function () {
        this.$refs.area.loadDialogData();
      });
    },
    modify: function modify(index, row) {
      this.devAreaModal.isShow = true;
      this.devAreaModal.title = '修改区域信息';
      this.parentItem = row;
      this.isUpdata = true;

      if (row.pid == null) {
        this.devAreaModal.parentAera = null;
      } else {
        var pnode = dictionaryService.getNodeItem(this.areaTable, row);
        this.devAreaModal.parentAera = pnode.title;
      }

      this.$nextTick(function () {
        this.$refs.area.loadDialogData();
      });
    },
    addNew: function addNew() {
      this.parentItem = {};
      this.isUpdata = false;
      this.devAreaModal.isShow = true;
      this.devAreaModal.title = '新增区域';
      this.devAreaModal.parentAera = null;
      this.$nextTick(function () {
        this.$refs.area.loadDialogData();
      });
    },
    upload: function upload() {
      this.devUploadModal.isShow = true;
      this.$nextTick(function () {
        this.$refs.upload.loadDialogData();
      });
    }
  }
};

/* script */
const __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-container",
    { staticClass: "container" },
    [
      _c(
        "el-form",
        { attrs: { inline: true, model: _vm.areaFilters, size: "small" } },
        [
          _c(
            "el-form-item",
            [
              _c("el-input", {
                attrs: { placeholder: "区域名称" },
                model: {
                  value: _vm.areaFilters.areaName,
                  callback: function($$v) {
                    _vm.$set(_vm.areaFilters, "areaName", $$v);
                  },
                  expression: "areaFilters.areaName"
                }
              })
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.queryData } },
                [_vm._v("查询")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.clear } },
                [_vm._v("清除")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.addNew } },
                [_vm._v("新增")]
              )
            ],
            1
          ),
          _c(
            "el-form-item",
            [
              _c(
                "el-button",
                { attrs: { type: "primary" }, on: { click: _vm.upload } },
                [_vm._v("导入")]
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "el-main",
        [
          _c(
            "el-table",
            {
              directives: [
                {
                  name: "loading",
                  rawName: "v-loading",
                  value: _vm.listLoading,
                  expression: "listLoading"
                }
              ],
              staticClass: "table",
              attrs: {
                data: _vm.areaTable,
                "row-key": "id",
                load: _vm.loadNode,
                lazy: "",
                "tree-props": {
                  children: "childrens",
                  hasChildren: "hasChildren"
                }
              }
            },
            [
              _c("el-table-column", {
                attrs: { prop: "title", label: "区域名称" }
              }),
              _c("el-table-column", {
                attrs: { prop: "abbreviation", label: "简称" }
              }),
              _c("el-table-column", {
                attrs: { prop: "code", label: "区域编码" }
              }),
              _c("el-table-column", {
                attrs: { label: "区域类型" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c("gm-dic-span", {
                          attrs: {
                            type: "区域类型",
                            data: _vm.dicData,
                            binddata: scope.row.areaType
                          }
                        })
                      ]
                    }
                  }
                ])
              }),
              _c("el-table-column", {
                attrs: { prop: "alias", label: "别名" }
              }),
              _c("el-table-column", {
                attrs: { prop: "orders", label: "排序", width: "120" }
              }),
              _c("el-table-column", {
                attrs: { label: "操作", fixed: "right", width: "220" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(scope) {
                      return [
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "修改" },
                            on: {
                              click: function($event) {
                                return _vm.modify(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-edit" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "删除" },
                            on: {
                              click: function($event) {
                                return _vm.deleteRow(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-delete" })]
                        ),
                        _c(
                          "el-button",
                          {
                            attrs: { type: "text", title: "添加下级区域" },
                            on: {
                              click: function($event) {
                                return _vm.addChild(scope.$index, scope.row)
                              }
                            }
                          },
                          [_c("i", { staticClass: "el-icon-share" })]
                        )
                      ]
                    }
                  }
                ])
              })
            ],
            1
          )
        ],
        1
      ),
      _c("add-area", {
        ref: "area",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicData: _vm.dicData,
          devAreaModal: _vm.devAreaModal,
          parentItem: _vm.parentItem,
          isUpdata: _vm.isUpdata
        }
      }),
      _c("upload-file", {
        ref: "upload",
        attrs: {
          ipconfig: _vm.ipconfig,
          dicData: _vm.dicData,
          devUploadModal: _vm.devUploadModal
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var app = normalizeComponent_1(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    undefined,
    undefined
  );

app.install = function (Vue) {
  Vue.component(app.name, app);
};

var script$j = {
  name: "addApp",
  props: {
    showAddAPP: Object,
    appDetail: Object,
    ipconfig: Object
  },
  data: function data() {
    return {
      options: [{
        value: 1,
        label: '是'
      }, {
        value: 0,
        label: '否'
      }],
      validator: validate,
      filereader: {}
    };
  },
  methods: {
    initDiolog: function initDiolog() {
      this.$refs.appForm.clearValidate();
      this.filereader = new FileReader();
      document.getElementById('upfile').value = '';
    },
    fileChange: function fileChange() {
      var fill = document.getElementById('upfile').files[0];
      this.filereader.readAsDataURL(fill);

      var _this = this;

      this.filereader.onload = function (e) {
        _this.appDetail.icon = this.result;
      };
    },
    save: function save(formName) {
      var _this2 = this;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.$confirm('确认保存吗？', '提示', {}).then(function () {
            appService.saveApp(_this2.ipconfig.UUMS_SERVER, _this2.appDetail).then(function (res) {
              _this2.$message.success('保存成功！');

              _this2.$parent.query();
            }, function (error) {
              _this2.$message.error(error.message);
            });
          });

          _this2.showAddAPP.isShow = false;

          _this2.$refs.appForm.clearValidate();
        } else {
          _this2.$message.error('请完善表单');
        }
      });
    },
    cancel: function cancel(formName) {
      this.showAddAPP.isShow = false;
      this.$refs[formName].clearValidate();
    }
  }
};

var css$9 = "span[data-v-690384a4]{font-size:1rem;border-bottom:2px solid #047adf;display:inline-block;padding:0 10px 5px 0;margin-left:30px;margin-bottom:20px;color:#047adf}.appDio .el-row[data-v-690384a4]{font-size:0}";
styleInject(css$9);

/* script */
const __vue_script__$j = script$j;
/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "el-dialog",
    {
      staticClass: "appDio",
      attrs: {
        title: _vm.showAddAPP.title,
        visible: _vm.showAddAPP.isShow,
        center: ""
      },
      on: {
        "update:visible": function($event) {
          return _vm.$set(_vm.showAddAPP, "isShow", $event)
        }
      }
    },
    [
      _c(
        "el-row",
        [
          _c("span", { staticClass: "appLabel" }, [_vm._v("基础配置")]),
          _c(
            "el-form",
            {
              ref: "appForm",
              attrs: { "label-width": "10rem", model: _vm.appDetail }
            },
            [
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "系统名称",
                    prop: "title",
                    rules: [_vm.validator.required]
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.appDetail.title,
                      callback: function($$v) {
                        _vm.$set(_vm.appDetail, "title", $$v);
                      },
                      expression: "appDetail.title"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "APPKey",
                    prop: "name",
                    rules: [_vm.validator.required]
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.appDetail.name,
                      callback: function($$v) {
                        _vm.$set(_vm.appDetail, "name", $$v);
                      },
                      expression: "appDetail.name"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "系统地址",
                    prop: "host",
                    rules: [_vm.validator.required]
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.appDetail.host,
                      callback: function($$v) {
                        _vm.$set(_vm.appDetail, "host", $$v);
                      },
                      expression: "appDetail.host"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "表单地址",
                    prop: "basePath",
                    rules: [_vm.validator.required]
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.appDetail.basePath,
                      callback: function($$v) {
                        _vm.$set(_vm.appDetail, "basePath", $$v);
                      },
                      expression: "appDetail.basePath"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                { attrs: { label: "系统图标", prop: "file" } },
                [
                  _c("input", {
                    attrs: { type: "file", id: "upfile" },
                    on: {
                      change: function($event) {
                        return _vm.fileChange()
                      }
                    }
                  })
                ]
              ),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "排序",
                    prop: "orders",
                    rules: [_vm.validator.required, _vm.validator.number]
                  }
                },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.appDetail.orders,
                      callback: function($$v) {
                        _vm.$set(_vm.appDetail, "orders", $$v);
                      },
                      expression: "appDetail.orders"
                    }
                  })
                ],
                1
              ),
              _c(
                "el-form-item",
                { attrs: { label: "描述", prop: "description" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.appDetail.description,
                      callback: function($$v) {
                        _vm.$set(_vm.appDetail, "description", $$v);
                      },
                      expression: "appDetail.description"
                    }
                  })
                ],
                1
              ),
              _c("span", { staticClass: "appLabel" }, [_vm._v("系统配置")]),
              _c(
                "el-form-item",
                {
                  attrs: {
                    label: "是否登录",
                    prop: "ssoServer",
                    rules: [_vm.validator.required]
                  }
                },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "请选择" },
                      model: {
                        value: _vm.appDetail.ssoServer,
                        callback: function($$v) {
                          _vm.$set(_vm.appDetail, "ssoServer", $$v);
                        },
                        expression: "appDetail.ssoServer"
                      }
                    },
                    _vm._l(_vm.options, function(item) {
                      return _c("el-option", {
                        key: item.value,
                        attrs: { label: item.label, value: item.value }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "el-button",
            {
              nativeOn: {
                click: function($event) {
                  return _vm.cancel("appForm")
                }
              }
            },
            [_vm._v("取消")]
          ),
          _c(
            "el-button",
            {
              attrs: { type: "primary" },
              on: {
                click: function($event) {
                  return _vm.save("appForm")
                }
              }
            },
            [_vm._v("保 存")]
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = "data-v-690384a4";
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var addApp = normalizeComponent_1(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    undefined,
    undefined
  );

var script$k = {
  name: 'app',
  components: {
    gmPagination: gmPagination,
    addApp: addApp
  },
  props: {
    dicData: Array,
    ipconfig: Object
  },
  data: function data() {
    return {
      paginationOne: {
        pagesize: 8
      },
      listLoading: false,
      appOne: [],
      appTwo: [],
      showAddAPP: {
        isShow: false
      },
      appDetail: {},
      queryCondition: {}
    };
  },
  created: function created() {
    var _this = this;

    _this.queryCondition = {
      current: 1,
      size: 8
    };

    _this.query();
  },
  methods: {
    query: function query() {
      var _this2 = this;

      this.appOne = [];
      this.appTwo = [];
      this.listLoading = true;
      appService.getAppList(this.ipconfig.UUMS_SERVER, this.queryCondition).then(function (res) {
        var appData = res.data.records;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = appData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                item = _step$value[1];

            if (index < 4) {
              _this2.appOne.push(item);
            } else if (index >= 4) {
              _this2.appTwo.push(item);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this2.$set(_this2.paginationOne, 'total', res.data.total);
      }, function (error) {
        _this2.$message.error(error.message);
      });
    },
    changeCurrent: function changeCurrent(val) {
      this.queryCondition.current = val;
      this.query(this.queryCondition);
    },
    queryData: function queryData() {
      this.query();
      this.queryCondition.current = 1;
    },
    clearData: function clearData() {
      this.queryCondition = {
        current: 1,
        size: 8
      };
      this.query();
    },
    addItem: function addItem() {
      this.appDetail = {};
      this.showAddAPP = {
        isShow: true,
        title: '子系统新增'
      };
      this.$nextTick(function () {
        this.$refs.addApp.initDiolog();
      });
    },
    updateItem: function updateItem(item) {
      this.appDetail = {};
      this.appDetail = Object.assign({}, item);
      this.showAddAPP = {
        isShow: true,
        title: '子系统修改'
      };
      this.$nextTick(function () {
        this.$refs.addApp.initDiolog();
      });
    },
    deleteItem: function deleteItem(item) {
      var _this3 = this;

      this.$confirm('确认删除吗？', '提示', {}).then(function () {
        _this3.listLoading = true;
        var params = {
          aplicationModelId: item.id
        };
        appService.deleteApp(_this3.ipconfig.UUMS_SERVER, params).then(function (res) {
          _this3.listLoading = false;

          _this3.$message({
            message: item.title + '删除成功',
            type: 'success'
          });

          _this3.query();
        }, function (error) {
          _this3.$message.error(error.message);

          _this3.listLoading = false;
        });
      });
    }
  }
};

var css$a = ".container[data-v-526a1df4]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;padding:15px 15px 0}.container .el-form-item[data-v-526a1df4]{margin-bottom:0}.container .radio-wrap[data-v-526a1df4]{padding:10px 0}.app[data-v-526a1df4]{overflow:hidden}.app .rightbutton[data-v-526a1df4]{float:right;margin-bottom:.5rem;margin-right:1rem}.app .app-content[data-v-526a1df4]{clear:both;height:100%;width:100%;padding:20px 0}.app .app-content ul[data-v-526a1df4]{height:90%;width:100%;padding:0;list-style-type:none}.app .app-content ul li[data-v-526a1df4]{height:50%;width:100%;margin-bottom:10px}.app .app-content ul li>span[data-v-526a1df4]{display:inline-block;height:100%;width:23%;margin-right:5px;border:1px solid #e4e7ed;border-radius:4px}.app .app-content ul li>span>div[data-v-526a1df4]{width:100%;height:100%;text-align:center}.app .app-content ul li>span>div>div[data-v-526a1df4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.app .app-content ul li>span>div>div>div.title[data-v-526a1df4]{height:30px;line-height:30px;border-bottom:1px solid #e4e7ed}.app .app-content ul li>span>div>div>div.title>div[data-v-526a1df4]{height:29px;line-height:29px;padding-right:10px;cursor:pointer}.app .app-content ul li>span>div>div>div.title>div .icon-show[data-v-526a1df4]{display:none}.app .app-content ul li>span>div>div>div.title>div a[data-v-526a1df4]{line-height:30px;font-size:18px;color:#3280fc}.app .app-content ul li>span>div>div>div.title>div a i[data-v-526a1df4]{font-size:15px;margin:0}.app .app-content ul li>span>div>div>div.title>div a[data-v-526a1df4]:first-child{padding-right:10px}.app .app-content ul li>span>div>div>div.title>span[data-v-526a1df4]{display:block;height:100%;width:75%;text-align:left;padding-left:10px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;float:left;font-size:1.8rem}.app .app-content ul li>span>div>div>div.image[data-v-526a1df4]{position:relative;width:50%;height:0;padding-top:50%;margin:auto}.app .app-content ul li>span>div>div>div.image>img[data-v-526a1df4]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}.app .app-content ul li>span>div>div>div.image[data-v-526a1df4]:hover{position:relative;width:55%;height:0;margin:auto}.app .app-content ul li>span[data-v-526a1df4]:nth-child(4n){margin-right:0}";
styleInject(css$a);

/* script */
const __vue_script__$k = script$k;
/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticStyle: { width: "100%" } },
    [
      _c(
        "el-container",
        { staticClass: "app container" },
        [
          _c(
            "el-col",
            { staticClass: "toolbar", attrs: { span: 24 } },
            [
              _c(
                "el-form",
                { attrs: { inline: true, size: "small" } },
                [
                  _c(
                    "el-form-item",
                    [
                      _c("el-input", {
                        attrs: { placeholder: "系统名称" },
                        model: {
                          value: _vm.queryCondition.title,
                          callback: function($$v) {
                            _vm.$set(_vm.queryCondition, "title", $$v);
                          },
                          expression: "queryCondition.title"
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.queryData }
                        },
                        [_vm._v("查询")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.clearData }
                        },
                        [_vm._v("清除")]
                      )
                    ],
                    1
                  ),
                  _c(
                    "el-form-item",
                    [
                      _c(
                        "el-button",
                        {
                          attrs: { type: "primary" },
                          on: { click: _vm.addItem }
                        },
                        [_vm._v("新增")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c("div", { staticClass: "app-content" }, [
            _c("ul", [
              _c(
                "li",
                _vm._l(_vm.appOne, function(item, index) {
                  return _c("span", { key: index }, [
                    _c("div", [
                      _c("div", [
                        _c("div", { staticClass: "title" }, [
                          _c("span", { attrs: { title: item.title } }, [
                            _vm._v(_vm._s(item.title))
                          ]),
                          _c("div", [
                            _c(
                              "a",
                              {
                                attrs: { title: "编辑" },
                                on: {
                                  click: function($event) {
                                    return _vm.updateItem(item)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "el-icon-edit" })]
                            ),
                            _c(
                              "a",
                              {
                                attrs: { title: "删除" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteItem(item)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "el-icon-delete" })]
                            )
                          ])
                        ]),
                        _c("div", { staticClass: "image" }, [
                          _c("img", { attrs: { src: item.icon } })
                        ])
                      ])
                    ])
                  ])
                }),
                0
              ),
              _c(
                "li",
                _vm._l(_vm.appTwo, function(item, index) {
                  return _c("span", { key: index }, [
                    _c("div", [
                      _c("div", [
                        _c("div", { staticClass: "title" }, [
                          _c("span", { attrs: { title: item.title } }, [
                            _vm._v(_vm._s(item.title))
                          ]),
                          _c("div", [
                            _c("a", { attrs: { title: "编辑" } }, [
                              _c("i", {
                                staticClass: "el-icon-edit",
                                on: {
                                  click: function($event) {
                                    return _vm.updateItem(item)
                                  }
                                }
                              })
                            ]),
                            _c("a", { attrs: { title: "删除" } }, [
                              _c("i", {
                                staticClass: "el-icon-delete",
                                on: {
                                  click: function($event) {
                                    return _vm.deleteItem(item)
                                  }
                                }
                              })
                            ])
                          ])
                        ]),
                        _c("div", { staticClass: "image" }, [
                          _c("img", { attrs: { src: item.icon } })
                        ])
                      ])
                    ])
                  ])
                }),
                0
              )
            ])
          ]),
          _c(
            "el-footer",
            [
              _c("gm-pagination", {
                attrs: { config: _vm.paginationOne },
                on: { changeCurrent: _vm.changeCurrent }
              })
            ],
            1
          )
        ],
        1
      ),
      _c("add-App", {
        ref: "addApp",
        attrs: {
          ipconfig: _vm.ipconfig,
          showAddAPP: _vm.showAddAPP,
          appDetail: _vm.appDetail
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = undefined;
  /* scoped */
  const __vue_scope_id__$k = "data-v-526a1df4";
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var AreaManager = normalizeComponent_1(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    undefined,
    undefined
  );

AreaManager.install = function (Vue) {
  Vue.component(AreaManager.name, AreaManager);
};

var install = function install(Vue) {

  Vue.prototype.hasPermission = function (strPermission, arrayPermission) {
    var returnValues = [true, false];

    if (GM.CommonOper.isStrNullOrEmpty(strPermission)) {
      return returnValues[0];
    }

    if (arrayPermission == null) {
      return returnValues[1];
    }

    var strArrayPermission = strPermission.split(',');

    for (var ii = 0; ii < strArrayPermission.length; ii++) {
      if (!GM.CommonOper.isArrayContainsEle(arrayPermission, strArrayPermission[ii])) {
        return returnValues[1];
      }
    }

    return returnValues[0];
  };
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { AreaManager as App, app as AreaManager, dictionary as Dictionary, orgnization as Orgnization, Permission, RoleManage, UserManage, install };
