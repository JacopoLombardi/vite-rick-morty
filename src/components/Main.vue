

<!-- Javascript -->
<script>
   import Card from './partials/Card.vue';

   import {store} from '../data/store';

   export default {
      components:{
         Card
      },

      data(){
         return{
            store
         }
      },

      mounted(){
         console.log(this.store.cardsListArray)
      }

   };
</script>



<!-- HTML -->
<template>

   <div class="container  mt-5">
      <div class="row  row-cols-4">
         <Card v-for="card in this.store.cardsListArray" :key="card.id" />
      </div>
   </div>
    
</template>



<!-- CSS -->
<style scoped>


</style>