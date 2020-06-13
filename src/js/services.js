// 'use strict';
import { createGallery, addMarkupSearchForm } from './addMarkup.js';
import apiService from './apiService';

addMarkupSearchForm();

const searchItems = () => {
  const form = document.forms.searchForm;
  form.addEventListener('submit', searchQuery);
  function searchQuery(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const inputValue = form.query.value;

    const gallery = document.querySelector('.gallery');
    gallery && gallery.remove();
    form.reset();

    // console.log(apiService.resetPage); // undef

    apiService.getData(inputValue).then(data => createGallery(data));
  }
};
const incrementPage = () => {
  nextPage.addEventListener('click', increment);
  function increment() {
    const gallery = document.querySelector('.gallery');
    gallery && gallery.remove();
    apiService.nextPage().then(data => createGallery(data));
  }
};
const decrementPage = (a) => {
  prevPage.addEventListener('click', decrement);
  function decrement() {
    const gallery = document.querySelector('.gallery');
    gallery && gallery.remove();
    // a.then(data => createGallery(data));    // почему нельз передать параметорм функцию
    apiService.prevPage().then(data => createGallery(data));
  }
};

searchItems();
incrementPage();
decrementPage();
// decrementPage(apiService.prevPage());
// 
// function navigation(params, callbask) {
// //   params.addEventListener('click', changePage);

// //   function changePage() {
// //     const gallery = document.querySelector('.gallery');
// //     gallery && gallery.remove();

// //     callbask.then(data => createGallery(data));
// //     // callbask.then(data => createGallery(data));
// //     console.log(apiService.pageNum);
    
// //     console.log(callbask.then(data => createGallery(data)));
// //   }
// }
// navigation(nextPage, apiService.nextPage());
// navigation(prevPage, apiService.prevPage());


  




// const resetPage = ()=>{
//   form.addEventListener('submit', apiService.resetPage())
// // form.addEventListener('submit',resetPage)
// // function resetPage(e) {

// //   console.log(apiService);
// //   // console.log(this);

// //   apiService.resetPage()
// // }

// }

// apiService.resetPage()