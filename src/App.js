import React from 'react';

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-620x349.jpg",
    rating : 2
  },
  {
    id : 2,
    name : "coke",
    image : "https://www.battlefieldbeers.co.uk/clear_cf/pub-media-catalog-product-c-o-coke_can_2000x0.jpg",
    rating : 2.6
  },
  {
    id : 3,
    name : "ramen",
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",
    rating : 2.93
  }
];

function Food({name, image}){
  return (
    <div>
     <h2>I like {name}</h2>
     <img src={image} alt={name}></img>
    </div>
  );
}

function App() {
  return (
    <div>
      {foodILike.map(a => (
        <Food name={a.name} image={a.image} key={a.id} /> 
      ))}
    </div>
);
}

export default App;