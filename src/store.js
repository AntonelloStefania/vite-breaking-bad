import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=20',
    myUrl: '',
    pokemonList: [],
    loading: true,
    pkmn_types: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ],
    searchPokemon: '',
    searchResults: [],
    selectedValue: '',
    genUrl: '',
    selectedGen: '',
    pageUrl: '',
    pageString: '&page=',
    totalPages: 27,
    minPage: 1,
    current_page: 1,

})