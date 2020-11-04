<template>
    <div class="city-list">
        <list-item-sub v-for="(item,index) of listDatas" :key="index" :cityInfo="item"></list-item-sub>
    </div>
</template>
<script>
import listDatas from 'data/cities';
import ListItemSub from './Sub';
export default {
    name:'CityList',
    components:{
        ListItemSub
    },
    data(){
        return{
            listDatas
        }
    }
}
</script>