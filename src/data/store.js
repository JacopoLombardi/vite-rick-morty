
import {reactive} from 'vue';

export const store = reactive({
   apiUrl: 'https://rickandmortyapi.com/api/character',
   cardsListArray: [],
   nameArray: [],
   speciesArray: [],
   searchName: '',
   errorString: ''
});