export const chartColors = {
  primary: '#2864FF',
  grid: '#D9D9D9',
  axis: '#525252',
};

export const formatCurrency = (value: number) => 
  `€${value / 1000}k`;

export const commonAxisProps = {
  stroke: chartColors.axis,
};