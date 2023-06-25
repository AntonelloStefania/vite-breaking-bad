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
        <div class="d-flex align-items-center">
            <div>
                <h1>Pokédex</h1>
            </div>
    
            <div class="d-none d-lg-flex ms-3">
                <div class="water pkm-type"><div class="internal-circle"></div></div>
                <div class="fire pkm-type"><div class="internal-circle"></div></div>
                <div class="grass pkm-type"><div class="internal-circle"></div></div>
                <div class="electric pkm-type"><div class="internal-circle"></div></div>
            </div>
        </div>

        <div>
            <select class="form-select select-bar type-select " aria-label="Default select example" v-model="store.selectedValue" @change="$emit('typeChange')" >
                <option value="" selected>Type Select</option>
                <option v-for="(type, index) in store.pkmn_types" :key="index" :value="type" >{{type}}</option>
            </select>
        </div>
        <div class="">
            <label class="me-4 fw-bold d-none d-lg-inline" for="">Choose by generation</label>
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
    width: 50px;
    height: 50px;
    border-radius: 5rem;
    border: 2px solid $pokemon_type_primary_color;
    margin: 1rem 0.5rem;
    cursor: pointer;
    position: relative;

    &:hover{
        scale: 1.4;
    }

}
.water{
    background: $pokemon_type_primary_color;
    background: linear-gradient(0deg, $pokemon_type_primary_color 46%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 50%, rgb(20, 30, 164) 56%, rgba(38,50,236,1) 78%, rgba(97,105,241,1) 93%);
}

.grass{
    background: $pokemon_type_primary_color;
    background: linear-gradient(0deg, $pokemon_type_primary_color 46%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 50%, rgb(6, 62, 12) 56%, rgb(22, 120, 9) 78%, rgb(15, 209, 99) 93%);
}

.electric{
    background: r$pokemon_type_primary_color;
    background: linear-gradient(0deg, $pokemon_type_primary_color 46%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 50%, rgb(149, 141, 3) 56%, rgb(210, 206, 14) 78%,rgb(251, 248, 75) 93%);

}

.fire{
    background: $pokemon_type_primary_color;
    background: linear-gradient(0deg, $pokemon_type_primary_color 46%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 50%, rgb(125, 11, 3) 56%, rgb(183, 19, 8) 78%,rgb(251, 78, 66) 93%);
}

.internal-circle{
    width: 15px;
    height: 15px;
    border-radius: 5rem;
    background: radial-gradient(circle, rgba(255,249,249,1) 48%, rgba(0,0,0,1) 49%, rgba(57,56,56,1) 97%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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