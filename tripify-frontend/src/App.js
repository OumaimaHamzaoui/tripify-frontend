import React from 'react';
import Login from './Component/Login';
import Header from './Component/Header';
import Main from './Component/Main'

import './App.css'
const Tab=[{image:"https://voyagesmicheline.com/wp-content/uploads/2018/11/Page-14-Menton-Menton-585x269.jpg" ,title:"Séjour sur la Riviera Française à Menton"},{image:"https://voyagesmicheline.com/wp-content/uploads/2018/11/Page-14-Basque-Biarritz-585x363.jpg" ,title:"Séjour sur la Côte Basque à Anglet"},{image:"https://voyagesmicheline.com/wp-content/uploads/2018/11/Page-21-Rome-Florence-Rome-585x390.jpg" ,title:"Echappée Italienne à Rome et Florence"},{image:"https://voyagesmicheline.com/wp-content/uploads/2018/11/Page-16-Andorre-Pas-de-le%CC%81gende-photo-du-haut-585x287.jpg" ,title:"Escapade Musicale en Andorre"}]
function App() {
  return (
    <div className="App">
      <Login/>
      <Header/>
      <Main content={Tab}/>
    </div>
  );
}

export default App;