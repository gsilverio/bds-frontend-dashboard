import { useEffect, useMemo, useState } from 'react';
import './styles.css';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { FilterData, Gender, Sale, SalesResponse } from '../../types';
import { formartDate, formatPrice } from '../../utils/formatters';
type Props = {
  filterData?: FilterData;
};

const extraParams = {
  page: 0,
  size: 12,
  sort: 'date,desc'
};

function SalesTable({ filterData }: Props) {
  const [sales, setSales] = useState<Sale[]>([]);

  const params = useMemo(() => buildFilterParams(filterData, extraParams), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesResponse>('/sales', { params }).then((response) => {
      setSales(response.data.content);
    });
  }, [params]);

  const formatGender = (gender: Gender) => {
    const textByGender = {
      MALE: 'Masculino',
      FEMALE: 'Feminino',
      OTHER: 'Outro'
    };
    return textByGender[gender];
  };

  return (
    <div className="base-card sales-table-container">
      <h3 className="sales-table-title">SalesTable</h3>
      <table className="sales-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Genero</th>
            <th>Categoria</th>
            <th>Loja</th>
            <th>Forma de pagamento</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>#{sale.id}</td>
              <td>{formartDate(sale.date)}</td>
              <td>{formatGender(sale.gender)}</td>
              <td>{sale.categoryName}</td>
              <td>{sale.storeName}</td>
              <td>{sale.paymentMethod}</td>
              <td>{formatPrice(sale.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
