import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const SearchSuggestion = ({ results }) => {
    let keys = [];

    console.log('i am from search suggestions page', results);
    return (
        <ul className="w-[30vw] h-64 rounded-md border-2 overflow-y-scroll custom-scrollbar">
            {results ? results.map((item, index) => {
                Object.keys(item).forEach(key => {
                    if (!keys.includes(key)) {
                        keys.push(key);
                    }
                });
                console.log(keys);
                return (
                    <li key={item[keys[0]]} className="p-4 hover:bg-indigo-200">
                        <Link to={`/stock/${item[keys[0]]}/${item[keys[1]]}`}>
                            <span>{item[keys[1]]}</span>
                            <span className="ml-4">({item[keys[0]]})</span>
                        </Link>
                    </li>
                )
            }) : <li className="p-4 hover:bg-indigo-200">
                <span> No search available</span>
            </li>}
        </ul>
    )
}
export default SearchSuggestion;