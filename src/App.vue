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
      this.nextPage()
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
           let actualPage= '&page='+ store.current_page
          if(store.current_page < store.totalPages){
            store.current_page++
            
            let pageUrl = store.myUrl + actualPage
           
            axios.get(pageUrl).then((response)=> {
              store.pokemonList = response.data.docs})
              store.loading = false
                console.log(pageUrl)
                return pageUrl, actualPage
          }else{
            store.current_page=1
            let pageUrl = store.myUrl + '&page='+ store.current_page
            
            axios.get(pageUrl).then((response)=> {
              store.pokemonList = response.data.docs})
              store.loading = false
            return pageUrl, actualPage
          }
        },
          //pagina precedente
          prevPage(pageUrl){
            //funziona singolarmente probabilmente perché anziché sovrascrivere il filtro aggiunge un'altra parte di stringa che manda in blocco,
            //possibile soluzione: spostare nello store una variabile che contenga la prima parte dell'url in modo da dover solo aggiungere il numero e inserire il tutto in myUrl
            let firstPrevPage = store.current_page - 1;
            console.log(firstPrevPage)
            
           if(firstPrevPage <= store.minPage){
              firstPrevPage = store.totalPages
              let actualPage = '&page='+ store.totalPages
              store.totalPages--
              pageUrl = store.myUrl + actualPage
              console.log(pageUrl)

                axios.get(pageUrl).then((response)=> {
                store.pokemonList = response.data.docs})
                store.loading = false
                console.log(actualPage)
             return firstPrevPage, actualPage, store.myUrl, pageUrl
           }
            //  else{
            //    store.current_page--

            //    let prevPageUrl= store.myUrl + actualPage
            //    console.log(prevPageUrl)

            //    axios.get(prevPageUrl).then((response)=> {
            //    store.pokemonList = response.data.docs})
            //    store.loading = false
            //    return prevPageUrl

            //  }
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