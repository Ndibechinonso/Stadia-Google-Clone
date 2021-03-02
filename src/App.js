import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import CardsGrid from './components/CardsGrid'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
    
     <TopBar />
     <div className="container">
     <NavBar />
     <CardsGrid  />
     <Footer />
    </div>
    </div>
  );
}

export default App;
