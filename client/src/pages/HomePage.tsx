import { Box, TextField } from "@mui/material";
import { useState, useEffect } from "react"
import Header from "../components/Header";
import data from "../utils/ApexOptions";
import SearchSuggestion from "../components/SearchSuggestion";
import { searchQueryStock } from "../utils/api-communicator";

const mockData = {
    name: "akash",
    age: '22'
}
const HomePage = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [results, setResults] = useState([]);

    console.log(inputValue);
    const updateResults = async () => {
        try {
            const data = await searchQueryStock(inputValue);
            console.log(data);
            setResults(data.bestMatches);
        } catch (error) {
            setResults([]);
        }
    }

    useEffect(() => {
        updateResults();
        console.log('I am results', mockData);
    }, [inputValue]);

    return (
        <>
            <Header />
            <Box className=" flex justify-evenly flex-col items-center mt-5">
                <Box>
                    <h1 className="text-3xl font-bold text-center">
                        BlendNetAi
                    </h1>
                    <h6 className="mt-4 mb-4 text-center text-xl">
                        Finance
                    </h6>
                    <h6 className="mt-4 mb-4 text-center text-xl">
                        Enter your favourite stocks
                    </h6>
                </Box>
                <TextField
                    id="filled-search"
                    label="Search field"
                    type="search"
                    className="sm:w-[30vw]"
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }}
                />
                {inputValue ?
                    (<Box className="p-4">
                        <SearchSuggestion results={results} />
                    </Box>) : null
                }
            </Box>
        </>
    )
}
export default HomePage;