import './App.css';
import React, { useState } from 'react';
import List_Movies from './List_Movies';
import MenuNavBar from './MenuNavBar';
import AddMovie from './AddMovie';


function App() {
  const [movies, setMovies] = useState([
    { id: "1", title: 'Venom 2', 
    descreption: 'Tom Hardy est de retour sur grand écran sous les traits de Venom, l un des personnages les plus complexes de l univers Marvel.', 
    url: "https://www.allocine.fr/video/player_gen_cmedia=19593405&cfilm=269758.html", 
    rating: '2', 
    imgM: 'https://fr.web.img6.acsta.net/c_310_420/pictures/21/09/01/11/19/0900123.jpg' },
    
    { id: "2", title: '7.Koğuştaki',
     descreption: 'Séparé de sa fille, un père avec un handicap mental doit prouver son innocence lorsqu’il est arrêté pour le meurtre d’une enfant.',
    url: "https://www.netflix.com/tn-fr/title/81239779", 
    rating: '2', 
    imgM: 'https://fr.web.img2.acsta.net/c_310_420/pictures/19/10/08/15/52/1926679.jpg' },
    
    { id: "3", title: 'Red Notice', 
    descreption: 'Interpol déclenche une Alerte rouge pour capturer les criminels les plus recherchés au monde. Mais lorsqu un braquage des plus audacieux réunit le meilleur profileur du FBI et deux criminels rivaux, nul ne peut prédire l issue de l opération.', 
    url: "https://www.netflix.com/tn-fr/title/81161626", 
    rating: '4', 
    imgM: 'https://fr.web.img4.acsta.net/c_310_420/pictures/21/10/21/15/41/2023058.jpg' },

    { id: "6", 
    title: 'Jumanji 4', 
    descreption: 'L aventure Jumanji continue avec un quatrième volet!', 
    url: "https://www.netflix.com/tn-fr/title/80192646", 
    rating: '3', 
    imgM: 'https://fr.web.img2.acsta.net/c_310_420/pictures/21/03/04/09/51/2760299.jpg' }
  ])
  const [keyword, setKeyword] = useState('')
  const [rate, setRate] = useState(1)

  const changeRating = (newRating) => {
    setRate(newRating);
    console.log(newRating)
  };


  const searchTitle = (keyword) => {
    setKeyword(keyword);
    console.log(keyword)
  };

  const addMovie = (movieAdd) => {
    setMovies([...movies, movieAdd]);
    console.log("ADD MOVIE", movieAdd)
  };


  return (
    <div className="myApp">
      <div>
        <MenuNavBar addMovie={addMovie} changeRating={changeRating} searchTitle={searchTitle} />
      </div>
      <h1>My favorite movies</h1>
      <div className="divList" >
        <List_Movies movies={movies.filter(el => (el.rating >= rate) && (el.title.toUpperCase().includes(keyword.toUpperCase())))} />
      </div>

    </div>
  );
}

export default App;
