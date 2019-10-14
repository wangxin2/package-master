import Vue from 'vue';
import {
	Pagination,
	Dialog,
	Container,
	Header,
	Aside,
	Main,
	Footer,
	Table,
	TableColumn,
	Form,
	FormItem,
	Select,
	Option,
	OptionGroup,
	Popover,
	Tree,
	Button,
	Input,
	Row,
	Col,
	Message,
	Loading
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Popover);
Vue.use(Tree);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
