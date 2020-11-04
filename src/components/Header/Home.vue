<template>
    <header class="header">
        <city-select></city-select>
        <fack-input></fack-input>
    </header>
</template>
<script>
import CitySelect from './Sub/CitySelect';
import FackInput from './Sub/FackInput'
export default {
    name:'HomeHeader',
    components:{
        CitySelect,
        FackInput
    }
}
</script>
<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variables.scss';

.header{
    @include flex-row;
    height: $headerHeight;
    background-color: $defaultBgColor;
}
</style>