
import {data} from '../data'
export const processData = () => {
  const cropData = data.map(item => ({
    year: parseInt(item.Year.split(', ')[1]),
    crop: item['Crop Name'],
    production: parseFloat(item['Crop Production (UOM:t(Tonnes))']) || 0,
    yield: parseFloat(item['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))']) || 0,
    area: parseFloat(item['Area Under Cultivation (UOM:Ha(Hectares))']) || 0,
  }));
  const years = Array.from(new Set(cropData.map(item => item.year)));
  const crops = Array.from(new Set(cropData.map(item => item.crop)));
  console.log(years);

  const aggregatedData = years.map(year => {
    const yearData = cropData.filter(item => item.year === year);
    const maxCrop = yearData.reduce((max, item) => item.production > max.production ? item : max);
    const minCrop = yearData.reduce((min, item) => item.production < min.production ? item : min);
    return {
      year,
      maxCrop: maxCrop.crop,
      minCrop: minCrop.crop,
    };
  });

  const cropAverageData = crops.map(crop => {
    const cropDataFiltered = cropData.filter(item => item.crop === crop);
    const totalYield = cropDataFiltered.reduce((sum, item) => sum + item.yield, 0);
    const totalArea = cropDataFiltered.reduce((sum, item) => sum + item.area, 0);
    return {
      crop,
      avgYield: parseFloat((totalYield / cropDataFiltered.length).toFixed(3)),
      avgArea: parseFloat((totalArea / cropDataFiltered.length).toFixed(3)),
    };
  });

  return { aggregatedData, cropAverageData };
};
