<template>
    <common-title :title='title'></common-title>
</template>
<script>
import CommonTitle from 'components/Header/Common'
export default {
    name:'Search',
    components:{
        CommonTitle
    },
    data(){
        return{
            title:'搜索'
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>