<template>
    <div class="pagination-container">
        <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            :current-page="currentPage"
            :page-sizes="pagesizes"
            :page-size="pagesize"
            :layout="layout"
            :total="total"
            v-if="total<'99999'">
        </el-pagination>
    </div>
</template>

<script>
/*
 * config 基本配置
 * config.currentPage 选中的页数
 * config.sizes 每页显示多少条的下拉跨度
 * config.pagesize 每页显示条数
 * config.total 总条数
 * config.layout (total, sizes, prev, pager, next, jumper)工具条
 */
export default {
    name: 'gmPagination',
    props: { // 接收父级参数
        config: Object
    },
    data () {
        return {
        	currentPage: '',
	        sizes: '',
	        pagesize: '',
	        total: '99999',
	        layout: 'prev, pager, next',
	        pagesizes: []
        }
    },
    created () {
    	//初始化
    	this.currentPage = this.config.currentPage ? this.config.currentPage : 1;
    	this.sizes = this.config.sizes ? this.config.sizes : 10;
    	this.pagesize = this.config.pagesize ? this.config.pagesize : 10;
    	this.total = this.config.total ? this.config.total : 0;
    	//获取layout
    	if (this.config.layout && this.config.layout.length > 0) {
    		this.getLayout();
    	} else {
    		this.layout = this.layout + ',total,jumper';
    	}
    	//获取pagesizes的值
    	if (this.layout.indexOf('sizes') !== -1) {
    		this.getPagesizes();
    	}
    },
    watch: {
		'config.total' (val) {
			if (val !== this.total) {
				this.total = val;
			}
		},
		'config' (val) {
			this.currentPage = val.currentPage;
		}
	},
    methods: {
    	getLayout() {
    		for (let i = 0; i < this.config.layout.length; i++) {
    			this.layout = this.layout + ',' + this.config.layout[i];
    		}
    	},
    	getPagesizes () {
    		for (let i = 0; i < 3; i++) {
    			if (i === 0) {
    				this.pagesizes[i] = this.pagesize;
    			} else {
    				this.pagesizes[i] =  this.pagesize + this.sizes * i;
    			}
    			
    		}
    	},
    	handleCurrentChange (val) { // 改变当前页时触发
			this.$emit("changeCurrent", val);
    	},
    	handleSizeChange (val) { // 改变每页显示条数时触发
    		this.$emit("changeSize", val);
    	}
    }
}
</script>

<style scoped>
.pagination-container {
    background: #fff;
    padding: 5px 0;
}
</style>