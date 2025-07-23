import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = form.querySelector('.search-images-input');

form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.trim();
  
    if (!query) {
      iziToast.error({
        message: 'Please enter a search query!',
        position: 'topRight',
      });
      return;
    }
  
    clearGallery();
    showLoader();
  
    getImagesByQuery(query)
      .then(data => {
        if (data.hits.length === 0) {
          input.value = '';
          iziToast.info({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          createGallery(data.hits);
          input.value = '';
        }
      })
      .catch(error => {
        iziToast.error({
          message: 'Oops! Something went wrong. Please try again later.',
          position: 'topRight',
        });
        console.error(error);
      })
      .finally(() => {
        setTimeout(() => {
          hideLoader();
        }, 1000); 
      });
  });