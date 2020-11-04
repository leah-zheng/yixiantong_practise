<template>
    <div class="list-item">
        <div class="item" @click="onCityClick(cityInfo)">{{cityInfo.cityName}}</div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
    name:'CityListSub',
    props:{
        cityInfo:Object
    },
    methods:{
        ...mapMutations(['selectCity']),
        onCityClick(cityInfo){
            this.selectCity(cityInfo);
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss" scoped>

@import '~styles/mixin.scss';
@import '~styles/variables.scss';
    .list-item {
	@include flex-row;
	align-items: center;
	height: .5rem;
	padding-left: .15rem;
	background-color: #fff;
	border-bottom: 1px solid #ddd;
	font-size: .16rem;
}
</style>