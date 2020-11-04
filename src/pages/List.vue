<template>
    <div class="container">
        <common-header :title="title"></common-header>
        <city-scroll-wrapper></city-scroll-wrapper>
    </div>
</template>
<script>
import CommonHeader from 'components/Header/Common';
import CityScrollWrapper from 'components/ScrollWrapper/City';
import fieldDatas from 'data/fields'
import { mapState } from 'vuex';
export default {
    name:'List',
    components:{
        CommonHeader,
        CityScrollWrapper
    },
    data(){
        return {
            title:'列表'
        }
    }
    
    
}
</script>
<style lang="scss" scoped>
    
</style>