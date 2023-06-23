<script>
    export default {
        props:{
            MyPokemon : Object
        }
    }
</script>
<template lang="">
    <div class="d-flex align-items-center flex-column card mx-2 my-1 " :class="MyPokemon.type1 === 'Grass'? 'green-bkg' : MyPokemon.type1 === 'Water' ? 'blue-bkg' : MyPokemon.type1 === 'Fire'? 'red-bkg': ''">

        <img :src="MyPokemon.imageUrl" alt=""/>
        <div class="t-size pt-2">
            {{MyPokemon.number}}
        </div>
        <div>
          <strong> {{MyPokemon.name}}</strong> 
        </div>
        <div class="t-size py-2">
            {{MyPokemon.type1}}
        </div>
    </div>

   
</template>
<style lang="scss" >
img{
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 5rem;
    margin-top: 1.5rem;
}


.green-bkg{
    background-color: #DEFDE0 !important
}

.blue-bkg{
    background-color: #DEF3FD !important; 
}

.red-bkg{
    background-color: #FDDFDF !important;
}
    
.t-size{
    font-size: 12px;
}

</style>