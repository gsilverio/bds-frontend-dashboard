import { NumericLiteral } from 'typescript';

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByDate = {
  date: string;
  sum: number;
};

export type ChartSeriesData = {
  x: string;
  y: number;
};

export type FilterData = {
  dates?: Date[];
  gender?: Gender;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesStore = {
  storeName: string;
  sum: number;
};

export type SalesByPaymentMethods = {
  description: string;
  sum: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type SalesResponse = {
  content: Sale[];
};

export type Sale = {
  id: number;
  date: string;
  volume: number;
  total: number;
  gender: Gender;
  categoryName: string;
  paymentMethod: string;
  storeName: string;
};
