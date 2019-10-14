<template>
    <span>{{dicSpan}}</span>
</template>

<script>
// import GM from '../utils/common.js'
export default {
    name: 'gmDicSpan',
    props: { // 接收父级参数
        type: String, //字典类型
        binddata: String, //传过来的字典值
        data: Array
    },
    data () {
        return {
            dicSpan: '' //绑定的值
        }
    },
    watch: {
        binddata(value) {
            // console.log('监听')
            // console.log(value)
            if (this.data) {
                const dicArr = this.data.find(item => {
                    return item.label === this.type
                })
                const filterObj = dicArr.childrens.filter(item => {
                    return item.value === value
                })
                if (filterObj.length > 0) {
                    this.dicSpan = filterObj[0].label
                } else {
                    this.dicSpan = ''
                }
            }
        }
    },
    created () {
        if (this.type) {
            if (this.data) {
                const dicArr = this.data.find(item => {
                    return item.label === this.type
                })
                // 判断子集非空
                if (dicArr.childrens) {
                    const filterObj = dicArr.childrens.filter(item => {
                        return item.value === this.binddata
                    })
                    if (filterObj.length > 0) {
                        this.dicSpan = filterObj[0].label
                    } else {
                        this.dicSpan = ''
                    }
                }
                
            }
        }
    }
}
</script>
