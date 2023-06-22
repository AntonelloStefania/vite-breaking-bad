<script>
    import AppPokemonCards from './AppPokemonCards.vue';
    import {store} from '../store.js';
    import AppLoader from './AppLoader.vue'
    export default {
       components:{
         AppPokemonCards,
         AppLoader
       },
       data() {
        return {
            store
        }
       },
    }
</script>
<template >
    <div class="container d-flex justify-content-center align-items-center mt-4">
        <div  class="row justify-content-center pokedex p-2 " v-if="store.loading === false">
            <div  v-for="(pokemon, index) in store.pokemonList" :key="index"   class="col-6 col-md-4 col-lg-3 pkmn-card" >
                <AppPokemonCards :MyPokemon="pokemon"  />
            </div>
        </div>
        <AppLoader v-else/>
    </div>
</template>
<style lang="scss" scoped>
.pokedex{
    height: 500px;
    overflow: auto;
    background-color: #797E81;
    border-top: 30px solid #DEDEDE;
    border-bottom: 30px solid #DEDEDE;
    border-left: 20px solid #DEDEDE;
    border-right:20px solid #DEDEDE;
    border-radius: 1rem;
    box-shadow: 10px 10px 20px  rgba(0, 0, 0, 0.575);
    .pkmn-card{
        min-width: 180px;
    }
}

</style>