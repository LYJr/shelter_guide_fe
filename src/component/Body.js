import Table from "../utils/Table";
import "./Body.css"
import CustomMapView from "./CustomMapView"


function Body () {
    return (
    <div className="Body">
        <CustomMapView />
        <Table />
    </div>
    )
}

export default Body;
