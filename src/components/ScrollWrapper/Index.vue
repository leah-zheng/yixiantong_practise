<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
        <categroy-icons></categroy-icons>
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>

        <home-title :title="homeTitle.massageTitle"></home-title>

        <home-title :title="homeTitle.ktvTitle"></home-title>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { IndexModel } from 'models/Index';
import BetterScroll from 'better-scroll';

import CategroyIcons from './CategroyIcons/Index';
import HomeTitle from './Sub/HomeTitle';
import ViewList from './ViewList/Index';
import FoodList from './FoodList/Index';

import tool from 'utils/tool';


export default {
    name:'HomeScrollWrapper',
    components:{
        CategroyIcons,
        HomeTitle,
        ViewList,
        FoodList
    },
    data(){
        return {
            homeTitle:{
                viewTitle:'推荐景点',
                foodTitle:'推荐美食',
                hotelTitle:'推荐酒店',
                massageTitle:'推荐按摩',
                ktvTitle:'推荐KTV'
            },
            homeDatas:{
                viewDatas:[],
                foodDatas:[],
                hotelDatas:[],
                massageDatas:[],
                ketDatas:[]
            }
        }
    },
    computed:{
        ...mapState(['cityId'])
    },
    methods:{
        getHomeDatas(cityId){
            const indexDatas = new IndexModel();
            indexDatas.getHomeDatas(cityId).then((res)=>{
                if(res && res.status === 0){
                    const data = res.data;
                    this.homeDatas.viewDatas = data.viewDatas;
                    this.homeDatas.foodDatas = tool.formatJSON(data.foodDatas,'keyword');
                    this.homeDatas.hotelDatas = data.hotelDatas;
                    this.homeDatas.massageDatas = data.massageDatas;
                    this.homeDatas.ktvDatas = data.ktvDatas;
                    console.log(this.homeDatas.foodDatas);
                }
                
            })
        }
    },
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper);
        this.getHomeDatas(this.cityId);
    }
    
}
</script>
<style lang="scss" scoped>

    
</style>