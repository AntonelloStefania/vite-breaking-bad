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
            store,
            
        }
    },computed:{

    //funzione ricerca pokemon
       SearchPokemon(){
            if(store.searchPokemon === ''){
                return  store.pokemonList
            } else{
                return store.pokemonList.filter((pokemon)=>{
                  return  pokemon.name.toLowerCase().includes(store.searchPokemon.toLowerCase())
                    
                })
            }
        },

        
    }, methods: {
        //reset ricerca tramite pulsante
        resetSearch(){
           store.selectedValue=''
           store.searchPokemon = ''
           store.selectedGen=''
           store.myUrl = store.apiUrl
       },  
      
    }
        
    
}
</script>
<template >
    <div class="container  mt-5 position-relative">
        <!-- cards -->
        <div class="d-flex justify-content-center"  v-if="store.loading === false">
            <div class="row justify-content-center pokedex p-2 " >
                <div v-for="(pokemon, index) in SearchPokemon" :key="index" class="col-6 col-md-4 col-lg-3 pkmn-card">
                    <AppPokemonCards :MyPokemon="pokemon" />
                </div>
            </div>
            
        </div>
        <AppLoader v-else />

        <!-- pulsanti pag-next pag-prev -->
        <div class="col-12 d-flex justify-content-between btn-position" @click="resetSearch">
            <button class="btn btn-custom " @click="$emit('prev_page')">prev</button>
            <button class="btn btn-custom " @click="$emit('next_page')">next</button>
        </div>

        <!-- barra di ricerca -->
        <div class="input-group mb-3 mt-5">
            <div class="input-group-prepend search-bar">
                <button class="me-2 rounded reset-btn" type="button" @click="resetSearch">Reset</button>
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
.reset-btn{
    background-color: $font_secondary_color ;
    border: 2px solid $font_primary_color;
    color: $font_primary_color;
    padding: 0.5rem;

    &:hover{
        scale: 1.2;
    }
}

.btn-position{
    position:absolute;
    top:40%;

    .btn-custom{
        background-color:$font_primary_color;
        border: 2px solid $font_secondary_color;
        border-radius: 5rem;
        padding:1rem;
        box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 4px, rgba(0, 0, 0, 0.5) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
}

</style>