import { SalesByPaymentMethods, SalesStore } from './types';

export const buildSalesByStoreChart = (sales: SalesStore[]) => {
  const labels = sales.map((sale) => sale.storeName);
  const series = sales.map((sale) => sale.sum);
  return {
    labels,
    series
  };
};

export const buildSalesByPaymentMethod = (sales: SalesByPaymentMethods[]) => {
  const labels = sales.map((sale) => sale.description);
  const series = sales.map((sale) => sale.sum);
  return {
    labels,
    series
  };
};
