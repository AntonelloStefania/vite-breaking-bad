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
      // this.changeGen()
    },methods:{
        getPokemonType(){
              
          store.myUrl  = store.apiUrl

          if(store.selectedValue !== ''){
              store.myUrl += `&eq[type1]=${store.selectedValue}`
          } else{
            store.myUrl = store.apiUrl
          }

          axios.get(store.myUrl).then((response)=> {
            store.pokemonList = response.data.docs
            store.loading = false
        })
      },
        changeGen() {
           if(store.selectedGen !== ''){
             store.myUrl +=  `${store.genUrl}${store.selectedGen}`;
           }else{
             store.myUrl = store.apiUrl 
           }
          
          axios.get(store.myUrl).then((response)=> {
            store.pokemonList = response.data.docs
            store.loading = false
        })
          
        },
    }
  
  }
</script>
<template>
  <div>
    <AppPokemonHeader @typeChange="getPokemonType" @genChange="changeGen"/>
  </div>
  <div>
    <AppPokemonMain />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *
</style>