import FilterItem from "./FilterItem";
import {filters} from "./constants";

function App() {

    return (
        <div className="app">
            <div className="filter-box">
                {filters.map(filter => <FilterItem key={filter.id} filter={filter}/>)}
            </div>
        </div>
    );
}

export default App;
