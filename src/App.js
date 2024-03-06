import logo from './logo.svg';
import './App.css';
import Product from './Product/Product';
import "./Application.css";
function App() {
  return (
    <div className='container'>
     <Product title="Asus" image="images/asus.jpg" price={130}/>
     <Product title="Acer" image="images/acur.jpg" price={190}/>
     <Product title="Samsung" image="images/samsung.jpg" price={290}/>
    </div>
  );
}

export default App;
