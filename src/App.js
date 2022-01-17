import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Devs from './components/Devs';

function App() {
  return (
    <div>

     <div className="container">

        <Header />

          <Devs />

        <Footer />

      </div> 

    </div>
  );
}

export default App;
