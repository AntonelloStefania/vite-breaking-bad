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
      this.changeGen()

    },methods:{

      //scelta per tipo
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
      //scelta per generazione
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
        
       //cambio pagina
        //pagina successiva
        nextPage(){
           let pageNext= store.pageString + store.current_page
          if(store.current_page <= store.totalPages){
            store.current_page++
            
            let pageUrl = store.myUrl + pageNext
           
            axios.get(pageUrl).then((response)=> {
              store.pokemonList = response.data.docs})
              store.loading = false
              return pageUrl, pageNext
          }else{
            store.current_page= store.minPage
            let pageUrl = store.myUrl + store.pageString + store.current_page
            
            axios.get(pageUrl).then((response)=> {
              store.pokemonList = response.data.docs})
              store.loading = false
            return pageUrl
          }
        },
          //pagina precedente
          prevPage(pageUrl){
           if(store.current_page <= store.minPage){
              let last_page = store.totalPages
              last_page--
              store.current_page = store.totalPages
              let pagePrev = store.pageString + last_page
              pageUrl = store.myUrl + pagePrev

              axios.get(pageUrl).then((response)=> {
                store.pokemonList = response.data.docs})
                store.loading = false
             return  pagePrev, store.myUrl, pageUrl, last_page
           }else{
              store.current_page--
              let pagePrev =store.pageString+ store.current_page
              pageUrl= store.myUrl + pagePrev

              axios.get(pageUrl).then((response)=> {
                store.pokemonList = response.data.docs})
                store.loading = false
           }
          }
    }
  
  }
</script>
<template>
  <div>
    <AppPokemonHeader @typeChange="getPokemonType" @genChange="changeGen"/>
  </div>
  <div>
    <AppPokemonMain @next_page="nextPage" @prev_page="prevPage"/>
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *
</style>