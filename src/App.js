import TopBar from './components/TopBar'
import NavBar from './components/NavBar'
import CardsGrid from './components/CardsGrid'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
    
     <TopBar className="topbar" barDiv="stadiaStore" barHeader="stadiaStoreList" text="stadiaStoreLinks" />
     <div className="container">
     <NavBar className="navbar" imgDiv="Stadia-logo" midMenu="navListPair navListPairResp" subMenu1="about" subMenu2="redNavItem" endMenu="navListPair signInResp" subMenu3="redNavItem signIn" subMenu4="try" />
     <CardsGrid />
     <Footer className="footer" />
    </div>
    </div>
  );
}

export default App;
