<template>
    <div class="srocll-wrapper" ref="wrapper">
        <div class="wrapper-content">

        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll';
export default {
    name:'ListScrollWrapper',
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper)
    }
}
</script>
<style lang="scss" scoped>
    
</style>