

<!-- Javascript -->
<script>
   import Card from './partials/Card.vue';

   import {store} from '../data/store';

   export default {
   components:{
      Card
    },

    data(){
      store
    },


   };
</script>



<!-- HTML -->
<template>
  
  <Card />
    
</template>



<!-- CSS -->
<style scoped>


</style>