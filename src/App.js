import './Component/style.css'
import List from './Component/List';
import Application from './Component/Application';
import Product from './Component/Product';

function App() {
  return (
    <div className="App">
      <h1 className="display-1 text-danger r-head" >*** React Assignment ***</h1>
      <hr/>
      <List/>
      <hr/>
      <Application/>    
      <hr/>
      <Product/>
      <hr/>
    </div>
  );
}
export default App;