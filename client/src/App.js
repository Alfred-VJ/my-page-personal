
import './App.css';
import HomePage from './component/home/HomePage';
import NavbarComponent from './component/navbar/NavbarComponent';
import backGround from './assets/pc_game_red.jpeg';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomePage />
     <div>
         <img src={backGround} alt="" className='img_background'/>
     </div>
    </div>
  );
}

export default App;
