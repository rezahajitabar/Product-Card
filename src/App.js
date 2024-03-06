import logo from './logo.svg';
import './App.css';
import Product from './Product/Product';
import "./Application.css";
function App() {

  const allProducts=[
    {id:1,title:'Asus',image:'images/asus.jpg',price:130},
    {id:1,title:'Acur',image:'images/acur.jpg',price:190},
    {id:1,title:'Samsung',image:'images/samsung.jpg',price:290}
  ]

  return (
    <div className='container'>
     <Product {...allProducts[0]}/>
     <Product {...allProducts[1]}/>
     <Product {...allProducts[2]}/>
    </div>
  );
}

export default App;
