

<!-- Javascript -->
<script>
   import {store} from '../data/store'

   export default {
      data(){
         return{
            store
         }   
      },


   };
</script>



<!-- HTML -->
<template>
   <header>

      <div>
         <h1>Rick & Morty</h1>
         <hr>
      </div>

      <label for="exampleDataList" class="form-label  mt-5">Search name</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Nome Personaggio">
      <datalist id="datalistOptions">
      <option
        v-for="(name, i) in this.store.nameArray"
        :key="i"
        :value="name"
      ></option>
      </datalist>

   </header>
</template>



<!-- CSS -->
<style scoped>


</style>