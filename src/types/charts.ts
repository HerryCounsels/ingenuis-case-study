export interface ChartDataPoint {
  month: string;
  [key: string]: string | number;
}

export interface ChartProps {
  title: string;
  data: ChartDataPoint[];
  height?: number;
}