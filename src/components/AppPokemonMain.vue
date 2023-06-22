<script>
import AppPokemonCards from './AppPokemonCards.vue';
import { store } from '../store.js';
import AppLoader from './AppLoader.vue'
export default {
    components: {
        AppPokemonCards,
        AppLoader
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template >
    <div class="container d-flex justify-content-center align-items-center mt-5">
        <div class="row justify-content-center pokedex p-2 " v-if="store.loading === false">
            <div v-for="(pokemon, index) in store.pokemonList" :key="index" class="col-6 col-md-4 col-lg-3 pkmn-card">
                <AppPokemonCards :MyPokemon="pokemon" />
            </div>
        </div>
        <AppLoader v-else />
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.pokedex {
    height: 505px;
    width: 80%;
    overflow: auto;
    background-color: #797E81;
    border-top: $pokedex_y_border;
    border-bottom: $pokedex_y_border;
    border-left: $pokedex_x_border;
    border-right: $pokedex_x_border;
    border-radius: 1rem;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.575);

    .pkmn-card {
        min-width: 180px;
    }
}
</style>