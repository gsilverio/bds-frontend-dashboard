import { chartOptions } from './helpers';
import './styles.css';
import ReactApexChart from 'react-apexcharts';

const initialData = [
  { x: '2020-01-01', y: 150 },
  { x: '2020-02-01', y: 300 },
  { x: '2020-03-01', y: 100 },
  { x: '2020-04-01', y: 100 }
];

function SalesByDate() {
  return (
    <div className="base-card sales-by-date-container">
      <div>
        <h4 className="sales-by-date-title">Evolução das vendas</h4>
        <span className="sales-by-date-period">01/01/2017 a 31/01/2017</span>
      </div>
      <div className="sales-by-date-data">
        <div className="sales-by-date-quantity-container">
          <h2 className="sales-by-date-quantity">464.988,00</h2>
          <span className="sales-by-date-quantity-label">Vendas no periodo</span>
          <span className="sales-by-date-quantity-description">
            O gráfico mostra as vendas em todas as lojas
          </span>
        </div>
        <div className="sales-by-date-chart">
          <ReactApexChart
            options={chartOptions}
            series={[{ name: 'Vendas', data: initialData }]}
            type="bar"
            height={240}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default SalesByDate;
