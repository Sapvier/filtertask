import FilterItem from "./FilterItem";
import {filters} from "./constants";
import {useState} from "react";

function App() {
    const [fil, setFil] = useState([])

    const filHandler = (e) => {
        setFil(prevState => [...prevState, e.target.value])
    }
    console.log(fil)

    return (
        <div className="app">
            <div className="filter-box">
                {filters.map(filter => <FilterItem key={filter.id} filHandler={filHandler} filter={filter}/>)}
            </div>
        </div>
    );
}

export default App;
