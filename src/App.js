import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Quotes></Quotes>
   </div>
  )

}

export default App;
