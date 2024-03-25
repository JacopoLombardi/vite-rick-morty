
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
        console.log(this.store.apiUrl);
        axios.get(this.store.apiUrl)

        .then(result => {
          console.log(result.data)
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
