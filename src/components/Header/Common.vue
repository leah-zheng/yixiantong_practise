<template>
    <header class="header">
        <back-ward></back-ward>
        <h1>{{title}}</h1>
    </header>
</template>
<script>
import BackWard from './Sub/BackWard'
export default {
    name:'CommonHeader',
    components:{
        BackWard
    },
    props:{
        title:{
            type:String,
            default(){
                return '生活一线通'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';

.header{
    @include flex-row;
    @include vh-center;
    position: relative;
    height: $headerHeight;
    background-color: $defaultBgColor;
    h1 {
		font-size: .18rem;
	}
}
</style>