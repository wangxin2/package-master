<template>
    <el-popover ref="popover"
        placement="bottom-start"
        trigger="click"
        @show="onShowPopover"
        @hide="onHidePopover">
	    <el-tree
	        ref="tree"
	        class="select-tree"
	        :style="`min-width: ${treeWidth}`"
	        :data="treeData"
	        :expand-on-click-node="false"
	        :filter-node-method="filterNode"
	        :default-expand-all="false"
	        highlight-current
	        @node-click="onClickNode"
	        :props="props">
        </el-tree>
	    <el-input
            slot="reference"
            ref="input"
            v-model="labelModel"
            clearable
            :style="`width: ${width}px`"
            :class="{ 'rotate': showStatus }"
            suffix-icon="el-icon-arrow-down"
            :placeholder="placeholder">
        </el-input>
    </el-popover>
</template>

<script>
/*
 * config 基本配置
 * placeholder 
 * clearable 是否可清除
 * filterable 是否可查询
 * type 字典类型 传了type则不用传data
 * data 下拉数据
 * binddata 选中的值
 */
export default {
    name: 'gmTreeSelect',
    model: {    // 使用model， 这儿2个属性，prop属性说，我要将value作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘selected’ 的时候，参数的值就是父组件v-model收到的值。
        prop: 'value',
        event: 'selected'
    },
    props: { // 接收父级参数
        // 接收绑定参数
        value: String,
        // 输入框宽度
        width: String,
        // 选项数据
        treeData: {
            type: Array,
            required: true,
        },
        // 输入框占位符
        placeholder: {
            type: String,
            required: false,
            default: '请选择',
        },
        // 树节点配置选项
        props: {
            type: Object,
            required: false,
            default: () => ({
            	value: 'value',
                label: 'label',
                children: 'children'
            }),
        },
    },
    data () {
        return {
            // 树状菜单显示状态
            showStatus: false,
            // 菜单宽度
            treeWidth: 'auto',
            // 输入框显示值
            labelModel: '',
            // 实际请求传值
            valueModel: ''
        }
    },
    watch: {
        labelModel (val) {
            if (!val) {
                this.valueModel = '';
            }
            this.$refs.tree.filter(val);
        },
        value (val) {
            this.labelModel = this.queryTree(this.treeData, val);
        }
    },
    created () {
        // 检测输入框原有值并显示对应 label
        if (this.value) {
            this.labelModel = this.queryTree(this.treeData, this.value);
        }
        // 获取输入框宽度同步至树状菜单宽度
        this.$nextTick(() => {
            this.treeWidth = `${(this.width || this.$refs.input.$refs.input.clientWidth) - 24}px`;
        });
    },
    methods: {
        // 单击节点
        onClickNode (node) {
            this.labelModel = node[this.props.label];
            this.valueModel = node[this.props.value];
            this.onCloseTree();
        },
        // 隐藏树状菜单
        onCloseTree () {
            this.$refs.popover.showPopper = false;
        },
        // 显示时触发
        onShowPopover () {
            this.showStatus = true;
            this.$refs.tree.filter(false);
        },
        // 隐藏时触发
        onHidePopover () {
            this.showStatus = false;
            this.$emit('selected', this.valueModel);
        },
        // 树节点过滤方法
        filterNode (query, data) {
            if (!query) return true;
            return data[this.props.label].indexOf(query) !== -1;
        },
        // 搜索树状数据中的 ID
        queryTree (tree, id) {
            let stark = [];
            stark = stark.concat(tree);
            while (stark.length) {
                const temp = stark.shift();
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
}
</script>

<style lang="scss" scoped>
.el-input.el-input--suffix {
    cursor: pointer;
    overflow: hidden;
}
.el-input.el-input--suffix.rotate .el-input__suffix {
    transform: rotate(180deg);
}
.select-tree {
    max-height: 200px;
    overflow-y: scroll;
}
/* 菜单滚动条 */
.select-tree::-webkit-scrollbar {
    z-index: 11;
    width: 6px;
}
.select-tree::-webkit-scrollbar-track,
.select-tree::-webkit-scrollbar-corner {
    background: #fff;
}
.select-tree::-webkit-scrollbar-thumb {
    border-radius: 5px;
    width: 6px;
    background: #b4bccc;
}
.select-tree::-webkit-scrollbar-track-piece {
    background: #fff;
    width: 6px;
}
</style>
