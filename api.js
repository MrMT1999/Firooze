// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Apply CORS middleware to allow requests from all origins (for development)
// app.use(cors()); 

document.addEventListener('DOMContentLoaded',function () {
 
// First we fetch the data from database.json
  fetch('database.json')
    .then(response => response.json())
    .then(data => {
      // Iterate through the cards and update HTML content
      data.cards.forEach(card => {
        const cardElement = document.getElementById(card.id);
        if (cardElement) {
          // we put the image source in the src element
          const imageElement = cardElement.querySelector('img');
          imageElement.src = card.picture;

          // now the name of the file will be put into the h2 element
          const nameElement = cardElement.querySelector('h2');
          nameElement.textContent = card.name;
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));


});
