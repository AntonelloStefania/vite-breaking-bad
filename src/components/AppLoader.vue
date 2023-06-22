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
.loader-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.custom-loader {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgb(245,245,245);
    background: linear-gradient(0deg, rgba(245,245,245,1) 48%, rgba(18,2,2,1) 48%, rgba(0,0,0,1) 52%, rgba(255,0,0,1) 52%);
    animation: s1 1s infinite linear;
    box-shadow: 0 0 10px black;
    position:relative
}

.custom-loader-2 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(245,245,245);
    background: radial-gradient(circle, rgba(245,245,245,1) 36%, rgba(0,0,0,1) 36%);
    animation: s1 1s infinite linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}

@keyframes s1 {
100% {transform: rotate(.5turn)}
}


</style>