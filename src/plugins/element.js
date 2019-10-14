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
	Tabs,
	TabPane,
	Select,
	Option,
	OptionGroup,
	Popover,
	Tree,
	Button,
	Input,
	Radio,
	RadioGroup,
	Icon,
	Row,
	Col,
	Message,
	Loading,
	MessageBox
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
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Button);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Popover);
Vue.use(Tree);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
