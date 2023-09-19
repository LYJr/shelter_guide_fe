import KakaoMap from "../utils/kakao-api/KakaoMap";
import Table from "../utils/Table"
import "./Body.css"


function Body () {
    return (
        <div className="Body">
            <KakaoMap /> 
            <div className="검색창">검색창 </div>
            <Table />
            <div className="pageButton">페이징 버튼</div>
        </div>
    )
}

export default Body;
