import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesByDateComponent from './components/SalesByDateComponent';
import SalesSummary from './components/SalesSummary';
import SalesTable from './components/SalesTable';
import { FilterData, Gender, PieChartConfig, SalesByPaymentMethods, SalesStore } from './types';
import { buildFilterParams, makeRequest } from './utils/request';
import { buildSalesByPaymentMethod, buildSalesByStoreChart } from './helpers';

function App() {
  const [filterData, setFilterDate] = useState<FilterData>();
  const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
  const [salesByPaymentMethod, setSalesByPaymentMethod] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesStore[]>('/sales/by-store', { params }).then((response) => {
      const newSalesByStore = buildSalesByStoreChart(response.data);
      setSalesByStore(newSalesByStore);
    });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByPaymentMethods[]>('/sales/by-payment-method', { params })
      .then((response) => {
        const newSalesByPaymentMethods = buildSalesByPaymentMethod(response.data);
        setSalesByPaymentMethod(newSalesByPaymentMethods);
      });
  }, [params]);

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
          <SalesSummary filterData={filterData} />
          <PieChartCard name="Lojas" labels={salesByStore?.labels} series={salesByStore?.series} />
          <PieChartCard
            name="Pagamento"
            labels={salesByPaymentMethod?.labels}
            series={salesByPaymentMethod?.series}
          />
        </div>
        <SalesTable filterData={filterData} />
      </div>
    </>
  );
}

export default App;
