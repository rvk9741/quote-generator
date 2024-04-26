"use strict";

const quoteContainer = document.getElementById("quote-main");
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author");
const newQuoteBtn = document.getElementById("button2");

// let apiQuote = [];

const newQuote = () => {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  quoteText.textContent = quote.text;
  authorName.textContent = quote.author;

  //   textContent gives the information of the string present in perticular file
  // .text and .author are taken from local api.
};

newQuoteBtn.addEventListener("click", newQuote);

// const getQuotes = async () => {
//   try {
//     const apiUrl = await fetch("https://type.fit/api/quotes");
//     apiQuote = await apiUrl.json();
//     newQuote();
//   } catch (error) {
//     console.log("error in api", error);
//   }
// };

// on loading
// getQuotes();
newQuote();
