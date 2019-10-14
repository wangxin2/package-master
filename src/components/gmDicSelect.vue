<template>
	<el-select v-model="bindData" :clearable="clearable" :filterable="filterable" :placeholder="placeholder">
	    <el-option
            v-for="item in dataList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
	    </el-option>
    </el-select>
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
    name: 'gmDicSelect',
    model: {    // 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
        prop: 'binddata',
        event: 'update'
    },
    props: { // 接收父级参数
        placeholder: String,
        clearable: Boolean,
        filterable: Boolean,
        data: Array,
        type: String,
        binddata: String
    },
    data () {
    	return {
	        bindData: '',
	        dataList: []
    	}
    },
    watch: {
    	binddata (value) {
    		this.bindData = value;
    	},
    	bindData (value) {
    		this.$emit('update', this.bindData);
    	}
    },
    created () {
        debugger
        this.binddata
    	// 初始化数据
        // 如果有字典类型 则获取到字典值
        if (this.type) {
            if (this.data) {
                debugger
                const dicArr = this.data.find(item => {
                    return item.label === this.type
                })
                this.dataList = dicArr.childrens
            }
        }
    }
}
</script>

<style scoped>
    .el-select {
        width: 100%;
    }
</style>
