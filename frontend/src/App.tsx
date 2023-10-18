import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlandia', 'Araguari', 'Uberlandia']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Credito', 'Debito', 'Dinheiro']}
            series={[20, 50, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
