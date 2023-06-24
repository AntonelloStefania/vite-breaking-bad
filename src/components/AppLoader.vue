<script>
import{store} from '../store'
    export default {
        data() {
            return {
                store
            }
        },
    }
</script>
<template lang="">
    <div class="loader-container">
        <div class="custom-loader">
            <div class="custom-loader-2"></div>
        </div>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.loader-container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.custom-loader {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: $loader_primary_color;
    background: linear-gradient(0deg,  $loader_primary_color 48%, rgba(18,2,2,1) 48%, rgba(0,0,0,1) 52%, rgba(255,0,0,1) 52%);
    animation: s1 1s infinite linear;
    box-shadow: 0 0 10px black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 15%;
    
}

.custom-loader-2 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background:  $loader_primary_color;
    background: radial-gradient(circle,  $loader_primary_color 36%, rgba(0,0,0,1) 36%);
    animation: s1 1s infinite linear;
   
}

@keyframes s1 {
100% {transform: rotate(.5turn)}
}


</style>