<template>
    <div class="icon-wrapper">
        <categroy-icons-sub v-for="(item,index) of fieldDatas" :key="index" 
            :icon="item.icon"
            :bgColor="item.bgColor"
            :iconText="item.iconText"
            :field="item.field"
        ></categroy-icons-sub>
    </div>
</template>
<script>
import CategroyIconsSub from './Sub';
import fieldDatas from 'data/fields';
export default {
    name:'CategroyIcons',
    components:{
        CategroyIconsSub
    },
    data(){
        return{
            fieldDatas
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~styles/mixin.scss';
.icon-wrapper{
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}	
</style>