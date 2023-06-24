<script>
    export default {
        props:{
            MyPokemon : Object
        },
        
        data() {
            return {
                
            }
        },computed:{
            getLowercaseColor(){
              return  this.MyPokemon.color.toLowerCase()
            }
        }
    }
</script>
<template lang="">
    <div class="d-flex align-items-center flex-column card mx-2 my-1 color-filter " :style="{ 'background-color':getLowercaseColor}">

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


.t-size{
    font-size: 12px;
}

.color-filter{
    box-shadow: 0px 0px 5px 5px black inset;
}
</style>