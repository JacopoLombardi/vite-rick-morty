
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
          this.store.cardsListArray = result.data.results;
          console.log(this.store.cardsListArray)
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

  <Header />

  <Main />

    
</template>



<!-- CSS -->
<style>

</style>
