import logo from './logo.svg';
import './App.css';
import WelcomeFC from './components/WelcomeFC';
import Welcome from './components/Welcome';
import Product from './components/Product';
import Input from './components/Input'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
        {/* <WelcomeFC name="Nahla" age={25} address="123 Main St" />
        <Welcome name="Basma" age={25} address="123 Main St" />
        <Product name="Laptop" price={999.99} /> */
        }
        {/* <Input /> */}
        {/* <Welcome name="Basma" age={25} address="123 Main St" /> */}
        <Form/>
    </div>
  );
}

export default App;
