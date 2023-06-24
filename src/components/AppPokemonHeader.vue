<script>
    import {store} from '../store.js'
    export default {
    data() {
        return {
            store,
        }
    },computed:{
        getPokemonGeneration() {
            let genUrls = [];
            for (let i = 0; i < 9; i++) {
            store.genUrl ='&eq[generation]=';
            genUrls.push(store.genUrl);
            }
            return genUrls;
        },
    },
    methods:{
        resetMyUrl() {
            store.myUrl = store.apiUrl;
        },
    },
    }
   
</script>
<template lang="">
<div class="container">
    <div class="d-flex justify-content-between align-items-center">
        <div>
            <h1>Pokédex</h1>
        </div>

        <div class="d-flex">
            <div class="water pkm-type"></div>
            <div class="fire pkm-type"></div>
            <div class="grass pkm-type"></div>
            <div class="electric pkm-type"></div>
        </div>

        <div>
            <select class="form-select select-bar type-select " aria-label="Default select example" v-model="store.selectedValue" @change="$emit('typeChange')" >
                <option value="" selected>Type Select</option>
                <option v-for="(type, index) in store.pkmn_types" :key="index" :value="type" >{{type}}</option>
            </select>
        </div>
        <div class="">
            <label class="me-4 fw-bold" for="">Choose by generation</label>
            <select class="select-bar gen-select" v-model="store.selectedGen" @click="resetMyUrl()"  @change="$emit('genChange')">
                <option value="" selected></option>
                <option v-for="(genUrl,index) in getPokemonGeneration" :key="index">{{index}}</option>
            </select>
        </div>
    </div>
</div>   
         
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.pkm-type{
    width: 70px;
    height: 70px;
    border-radius: 5rem;
    border: 2px solid $pokemon_type_primary_color;
    margin: 1rem 0.5rem;
    cursor: pointer;

    &:hover{
        scale: 1.4;
    }

}
.water{
    background: $pokemon_type_primary_color;
    background: linear-gradient(123deg, $pokemon_type_primary_color 0%, rgba(0,9,129,1) 79%);
}

.grass{
    background: $pokemon_type_primary_color;
    background: linear-gradient(123deg, $pokemon_type_primary_color 0%, rgba(0,120,30,1) 79%);
}

.electric{
    background: r$pokemon_type_primary_color;
    background: linear-gradient(123deg, $pokemon_type_primary_color 0%, rgba(242,232,4,1) 79%); 
}

.fire{
    background: $pokemon_type_primary_color;
    background: linear-gradient(123deg, $pokemon_type_primary_color 0%, rgba(255,19,19,1) 79%);
}

.select-bar{
    
    background: $font_primary_color;
    border: 3px solid $font_secondary_color;
    font-weight: bold;
    box-shadow: 0px 0px 10px rgb(68, 3, 3);
    cursor: pointer;
    border-radius: 0.5rem;
    letter-spacing: 0.15em;
    
    &:hover{
        scale: 1.2;
    }
}

.gen-select{
    padding: 0.3rem;
}

.type-select{
    min-width: 150px;
}

h1{
   text-shadow:0 0 7px  $font_secondary_color;
   color: $font_primary_color;
   font-size: 70px;
   padding-top: 0.9rem;
}

label{
    color: $font_primary_color;
    text-shadow: 0 0 7px $font_secondary_color;
    
}

    
</style>