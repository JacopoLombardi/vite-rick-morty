
<!-- Javascript -->
<script>
// importo i componenti
import Header from './components/Header.vue';
import Main from './components/Main.vue';

import {store} from './data/store';

  export default {
    components:{
      Header,
      Main,
    },

    data(){
      return{
        store
      }
    },

    methods:{
      // Chiamata API iniziale
      getApi(){
        axios.get(this.store.apiUrl)

        .then(result => {
          // ottengo l'array di oggetti completo
          this.store.cardsListArray = result.data.results;
          
          // ottengo un array con soltanto i nomi dei personaggi
          this.store.nameArray = result.data.results.map(item => item.name);

          // // ottengo un array con soltanto le specie dei personaggi
          result.data.results.map(item => {
            if(!this.store.speciesArray.includes(item.species)){
            this.store.speciesArray.push(item.species)
            }
          });
        })
      },


      // chiamata API per ricerca
      getSearchApi(){
        axios.get(this.store.apiUrl, {
          params:{
            name: this.store.searchName,
            species: this.store.searchSpecies
          }
        })
        .then(result => {
          this.store.cardsListArray = []
          this.store.cardsListArray = result.data.results 
        })
      }
    },

    mounted(){
      this.getApi();
    }
  };
</script>



<!-- HTML -->
<template>

  <Header @search="getSearchApi" />

  <Main />
    
</template>



<!-- CSS -->
<style>

</style>
