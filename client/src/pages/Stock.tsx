import { Box } from "@mui/material";
import Card from "../components/Card";
import { getCompanyOverview, showStockDetails } from "../utils/api-communicator";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import Chart from "../components/Chart";

const Stock = () => {
    const { stockSymbol, stockName } = useParams();
    const [stockData, setStockData] = useState([]);
    const [companyOverview, setCompanyOverview] = useState({});


    const getStockData = async () => {
        const data = await showStockDetails(stockSymbol as string, '5min');
        setStockData(data['Time Series (5min)']);
    }
    const populateCompanyOverview = async () => {
        const data = await getCompanyOverview(stockSymbol as string);
        setCompanyOverview(data);
        console.log('i am company overview', companyOverview);
    }

    useEffect(() => {
        getStockData();
        populateCompanyOverview();
    }, [stockSymbol]);

    return (
        <>
            <Box className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 gap-4 p-2">
                <Box className=" col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
                    <Card className="bg-indigo-200">
                        <Box className="flex flex-row justify-between items-center">
                            <Box>
                                <h1 className=" font-sans text-xl"> {stockName as string} </h1>
                                <h6 className=" font-thin italic"> {stockSymbol} </h6>
                            </Box>
                            <Box>
                                <IoIosAddCircleOutline className=" size-8 hover:bg-slate-600 hover:rounded-md box-content p-1" />
                            </Box>
                        </Box>

                    </Card>
                </Box>
                <Box className="md:col-span-2 row-span-4">
                    <Card>
                        <Chart stockData={stockData} />
                    </Card>
                </Box>
                <Box>
                    <Card>
                        <h1 className="font-bold">
                            {companyOverview.Name},
                            <span className="ml-2">{companyOverview.Country} </span>
                        </h1>
                        <h6>{companyOverview.AssetType}</h6>
                    </Card>
                </Box>
                <Box className="row-span-2 xl:row-span-3">
                    <Card>
                        <Box className=" w-full h-full rounded-md border-2 overflow-y-scroll custom-scrollbar">
                            <ul>
                                {Object.entries(companyOverview).map(([key, value]) => (
                                    <li key={key} className="p-2">
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </>
    )
}
export default Stock;