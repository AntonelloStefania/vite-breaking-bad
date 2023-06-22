<script>
    export default {
        
    }
</script>
<template lang="">
<div class="container">

    <div class="d-flex">
        <div class="water pkm-type"></div>
        <div class="fire pkm-type"></div>
        <div class="grass pkm-type"></div>
        <div class="electric pkm-type"></div>
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

    
</style>