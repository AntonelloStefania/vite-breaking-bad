<script>
    export default {
        props:{
            MyPokemon : Object
        }
    }
</script>
<template lang="">
    <div class="d-flex justify-content-center">
        <img :src="MyPokemon.imageUrl" alt=""/>
    </div>
    <div class="text-center">
        {{MyPokemon.name}}
    </div>
</template>
<style lang="scss">
</style>