import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesByDateComponent from './components/SalesByDateComponent';
import SalesSummary from './components/SalesSummary';
import SalesTable from './components/SalesTable';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterDate] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterDate(filter);
    console.log(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDateComponent filterData={filterData} />
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
        <SalesTable />
      </div>
    </>
  );
}

export default App;
