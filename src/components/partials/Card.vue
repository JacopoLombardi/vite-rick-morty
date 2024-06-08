

<!-- Javascript -->
<script>
   export default {
      props:{
         image: String,
         name: String,
         species: String,
         status: String,
      }
   };
</script>



<!-- HTML -->
<template>

   <div class="card border  rounded-5  m-3">
      <img class="rounded-5  shadow" :src="image" :alt="name">

      <div class="card-body">
         <h4 class="card-title  fw-bolder">{{ name }}</h4>
         <hr>
         <h5 class="text-start">-{{ species }}</h5>
         <h5 class="text-start">-{{ status }}</h5>
      </div>
   </div>
    
</template>



<!-- CSS -->
<style scoped>


</style>