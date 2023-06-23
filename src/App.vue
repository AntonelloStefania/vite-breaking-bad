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
      this.getPokemonType()

    },methods:{
        getPokemonType(){
              
          store.myUrl  = store.apiUrl

          if(store.selectedValue !== ''){
              store.myUrl += `&eq[type1]=${store.selectedValue}`
          }

          
          axios.get(store.myUrl).then((response)=> {
            store.pokemonList = response.data.docs
            store.loading = false
        })
      }
    }
  
  }
</script>
<template>
  <div>
    <AppPokemonHeader @typeChange="getPokemonType" />
  </div>
  <div>
    <AppPokemonMain />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *
</style>