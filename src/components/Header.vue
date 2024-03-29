

<!-- Javascript -->
<script>
   import {store} from '../data/store'

   export default {
      data(){
         return{
            store,
            searchName: '',
            searchSpecies: ''
         }   
      },
      
      methods:{
         search(){
            this.store.errorString = ''
            console.log(this.searchName)
            
            if( ((this.store.nameArray.includes(this.searchName)) || (this.searchName.length === 0)) && (this.searchSpecies.length > 1) ){
               this.store.searchName = this.searchName
               this.store.searchSpecies = this.searchSpecies
               this.$emit('search')

            }else if(this.searchSpecies.length > 1){
               this.store.searchSpecies = this.searchSpecies
               this.$emit('search')

            }else if((this.store.nameArray.includes(this.searchName)) || (this.searchName.length === 0)){
               this.store.searchName = this.searchName
               this.$emit('search')

            }else{
               this.store.errorString = 'Nessun elemento corrispondente trovato'
               this.store.cardsListArray = []
            }

         },
        
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

      <div class="d-flex  mt-5">
         

         <!-- ricerca per nome -->
         <div class="d-flex  flex-column  col-4  me-5">
            <h4>Nome</h4>

            <input
               v-model="searchName"
               @keyup.enter="search()"
               class="form-control"
               list="datalistOptions"
               placeholder="Nome Personaggio"
            >

            <datalist id="datalistOptions">
               <option
                  v-for="(name, i) in this.store.nameArray"
                  :key="i"
                  :value="name"
               ></option>
            </datalist>
         </div>


         <!-- ricerca per specie -->
         <div class="col-3">
            <h4>Specie</h4>

            <select v-model="searchSpecies" class="form-select" aria-label="Default select example">
               <option
                  v-for="(specie, i) in this.store.speciesArray"
                  :key="i"
               >{{ specie }}
               </option>
            </select>
         </div>


         <!-- btn Cerca -->
         <div class="d-flex  align-items-end  ms-5">
            <button
              @click="search()"
              class="btn  btn-primary  fw-semibold"
            >Cerca
            </button>
         </div>

      </div>

      <h2 class="text-danger mt-5">{{ store.errorString }}</h2>

   </header>
</template>



<!-- CSS -->
<style scoped>


</style>