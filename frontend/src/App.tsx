import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/SalesByDate';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
      </div>
    </>
  );
}

export default App;
