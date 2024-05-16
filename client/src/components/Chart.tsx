import ApexCharts from "apexcharts";
import { generateTimeStamp } from "../utils/generateTimeStamp";
import ReactApexChart from "react-apexcharts";
import { apexOptions } from "../utils/ApexOptions";

const Chart = ({ stockData }) => {
    const formattedStockData = [];

    for (const key in stockData) {
        if (stockData.hasOwnProperty(key)) {
            const value = stockData[key];
            const timestamp = generateTimeStamp(key);

            formattedStockData.push({
                x: timestamp,
                y: [
                    value['1. open'],
                    value['2. high'],
                    value['3. low'],
                    value['4. close']
                ]
            })

        }
    }

    console.log(formattedStockData);

    return (
        <ReactApexChart
          series = {
            [
                {
                    data: formattedStockData
                }
            ]
          }
          
          options = {
            apexOptions
          }
        />
    );
}
export default Chart;