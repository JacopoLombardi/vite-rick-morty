
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
      getApi(){
        axios.get(this.store.apiUrl)

        .then(result => {
          // ottengo l'array di oggetti completo
          this.store.cardsListArray = result.data.results;
          console.log(this.store.cardsListArray)
          
          // ottengo un array con soltanto i nomi dei personaggi
          this.store.nameArray = result.data.results.map(item => item.name);
          console.log(this.store.nameArray)
        })
      },

      getNameApi(){
        axios.get(this.store.apiUrl, {
          params:{
            name: this.store.searchName
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

  <Header @search="getNameApi" />

  <Main />
    
</template>



<!-- CSS -->
<style>

</style>
