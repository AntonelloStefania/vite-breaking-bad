<script>
import axios from 'axios';
import AppPokemonMain from './components/AppPokemonMain.vue';
import AppPokemonHeader from './components/AppPokemonHeader.vue';
import {store} from './store';



  export default {
    components: {
      AppPokemonMain,
      AppPokemonHeader
    },
    data() {
      return {

        store,
        
      }
    },mounted() {
      axios.get(store.apiUrl).then((response)=> {
        store.pokemonList = response.data.docs
        store.loading = false

        console.log(store.pokemonList)
        console.log(store.loading)
      })
      
    },
  }
</script>
<template>
  <div>
    <AppPokemonHeader />
  </div>
  <div>
    <AppPokemonMain />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *
  
</style>