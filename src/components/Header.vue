

<!-- Javascript -->
<script>
   import {store} from '../data/store'

   export default {
      data(){
         return{
            store,
            searchName: ''
         }   
      },
      methods:{
         search(){
            if(this.store.nameArray.includes(this.searchName)){
               this.store.errorString = ''
               this.store.searchName = this.searchName
               this.$emit('search')
            }else{
               this.store.errorString = 'Nessun elemento corrispondente trovato'
               this.store.cardsListArray = []
            }
         }
      }

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

      <input
        v-model="searchName"
        @keyup.enter="search"
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Nome Personaggio"
      >

      <datalist id="datalistOptions">

         <option
         v-for="(name, i) in this.store.nameArray"
         :key="i"
         :value="name"
         ></option>

      </datalist>
      
      <h2 class="text-danger mt-5">{{ store.errorString }}</h2>

   </header>
</template>



<!-- CSS -->
<style scoped>


</style>