import './App.css';
import './css/bootstrap.css';
import Fsearch from './components/Fsearch';
import Banner from './components/Banner';
import Searchbar from './components/Searchbar';
import Bank from './components/Bank';
import Product from './components/Product';
import Forms from './components/Forms'


function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
    <Fsearch/>
    </div>
      <div className='row'>
        <Searchbar/>
        </div>
    <div className='row'>
    <Banner/>
    </div>
    <div className='row'>
    <Bank/>
    <Product/>
    <Forms />
    </div>
    </div>
    </>


  );
}

export default App;