<script>
    import AppPokemonCards from './AppPokemonCards.vue';
    import {store} from '../store.js';
    export default {
       components:{
         AppPokemonCards
       },
       data() {
        return {
            store
        }
       },
    }
</script>
<template >
    <div class="container">
        <div class="row">
            <div v-for="(pokemon, index) in store.pokemonList" :key="index" class="col-6 col-md-4 col-lg-3" >

                <AppPokemonCards :MyPokemon="pokemon" />
            </div>
        </div>
    </div>
</template>
<style >
    
</style>