import './App.css';

import Food from "./components/food"
import food1 from "./images/food1.jpg"
import food2 from "./images/food2.jpg"
import food3 from "./images/food3.jpg"
import food4 from "./images/food4.jpg"

function App() {
  const foods=[
    {name:"potatofry",price:"150",image:food1},
    {name:"breadomlette",price:"200",image:food2},
    {name:"fingerchips",price:"120",image:food3},
    {name:"sandwitch",price:"100",image:food4}
  ]
  return(
    <div className="app">
      <header>
        <div className='container'>
          <div className='header-wrapper'>
            <div className='logo'>SWIGGY</div>
            <nav>
              <a href=''>Sign-in</a>
              <a href=''>Log-out</a>
            </nav>
          </div>
        </div>
      </header>
      <div className='body'>
        <div className='container'>
          <div className='body-wrapper'>
            <Food name={foods[0].name} price={foods[0].price} image={foods[0].image}></Food>
            <Food name={foods[1].name} price={foods[1].price} image={foods[1].image}></Food>
            <Food name={foods[2].name} price={foods[2].price} image={foods[2].image}></Food>
            <Food name={foods[3].name} price={foods[3].price} image={foods[3].image}></Food>
            <Food name={foods[0].name} price={foods[0].price} image={foods[0].image}></Food>
            <Food name={foods[1].name} price={foods[1].price} image={foods[1].image}></Food>




          </div>
        </div>
      </div>
    </div>
  )
}
  
export default App;