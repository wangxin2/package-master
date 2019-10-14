<template>
    <div class="container" style="width: 100%;">
        <Orgnization :dicData="dicList" :ipconfig="config"/>
    </div>
</template>

<script>
import Orgnization from '../../src/views/orgnization/index';
// import { Orgnization } from '../../lib';
export default {
    components: {
        Orgnization
	},
	inject: ['config', 'dicList'],
    data () {
        return { 
           
        }
    }
}
</script>
