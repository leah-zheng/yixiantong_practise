<template>
    <div class="city">
        <common-title :title='title'></common-title>
        <city-scroll-wrapper></city-scroll-wrapper>
    </div>
    
</template>
<script>
import CommonTitle from 'components/Header/Common';
import CityScrollWrapper from 'components/ScrollWrapper/City'
export default {
    name:'City',
    components:{
        CommonTitle,
        CityScrollWrapper
    },
    data(){
        return{
            title:'城市选择'
        }
    }
}
</script>
<style lang="scss" scoped>

</style>