import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as omdb from "./utils";



omdb.getMoviesBySearchTerm("star")
.then(data => data.Search)
.then(async (data) => {
    return await omdb.getMovieDetailsById(data[0].imdbID);
})
.then(movie => console.log(movie))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
