<script>
import AppPokemonCards from './AppPokemonCards.vue';
import { store } from '../store.js';
import AppLoader from './AppLoader.vue'
export default {
    components: {
        AppPokemonCards,
        AppLoader
    },
    data() {
        return {
            store
        }
    },computed:{
       SearchPokemon(){
        console.log('ciao')
            if(store.searchPokemon === ''){
                return  store.pokemonList
            } else{
                return store.pokemonList.filter((pokemon)=>{
                  return  pokemon.name.toLowerCase().includes(store.searchPokemon.toLowerCase())
                    
                })
            }
        },

       
    }, methods: {
        resetSearch(){
           store.selectedValue=''
           store.searchPokemon = ''
       }
    },
}
</script>
<template >
    <div class="container  mt-5">
        <div class="d-flex justify-content-center"  v-if="store.loading === false">
            <div class="row justify-content-center pokedex p-2 " >
                <div v-for="(pokemon, index) in SearchPokemon" :key="index" class="col-6 col-md-4 col-lg-3 pkmn-card">
                    <AppPokemonCards :MyPokemon="pokemon" />
                </div>
            </div>
        </div>
        <AppLoader v-else />
        <div class="input-group mb-3 mt-5">
            <div class="input-group-prepend">
                <button class=" btn me-1 rounded btn-primary" type="button" @click="resetSearch">Reset</button>
            </div>
            <input type="text" class="form-control rounded" aria-label="" aria-describedby="basic-addon1"  placeholder="search your pokemon" v-model="store.searchPokemon">
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.pokedex {
    height: 505px; 
    width: 80%;
    overflow: auto;
    background-color: #a1a1a1;
    border-top: $pokedex_y_border;
    border-bottom: $pokedex_y_border;
    border-left: $pokedex_x_border;
    border-right: $pokedex_x_border;
    border-radius: 1rem;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.575);

    .pkmn-card {
        min-width: 180px;
    }

}
</style>