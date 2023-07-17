import './App.css';
import FirstComponent from './components/FirstComponent.js'
import SecondComponent from './components/SecondComponent';
import ProductCounter from './components/ProductCounter';
import BagCounter from './components/BagCounter';
import ShirtCounter from './components/ShirtCounter';
import UserComponent from './components/UserComponent';
function App() {
  return (
    <div className="App">
      <UserComponent/>
      <FirstComponent/>
      <FirstComponent/>
      <SecondComponent/>
      <ProductCounter/>
      <BagCounter/>
      <ShirtCounter/>
    </div>
  );
}

export default App;
