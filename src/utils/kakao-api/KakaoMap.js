import "./KakaoMap.css"
import { useEffect } from "react";

const { kakao } = window;

// 요건 바닐라 형식의 구현
// useEffert 안써서 생긴 문제.

function KakaoMap () {
    // 지도를 담을 DOM 레퍼런스 영역
    useEffect(() => {
        const container = document.getElementById("KakaoMap");

        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        }
    
        const map = new kakao.maps.Map(container, options); // 요너석이 객체인데 불면하도록 useRef같은걸로 감싸주는것도 좋은 방법임.
    },[])


    return (
        <div id="KakaoMap" className="KakaoMap" />
    )
}

export default KakaoMap;


/**
 * 코드 읽는데 순서가 있는데 순서가 안지켜진것 같음.
 * 돔 조작할때가 많은데 마커같은거 띄우거나 거리 같은거 띄울때 어쩌다보면 스테이트가 갱신되는 현상이 일어났을 때 지도를 한번 더 그리는 경우가 있음.
 * 겉으로 봤을때는 이상은 없는데 상호작용할때 문제가 생.(이벤트 발생 안함)
 * 바디에 카카오맵 들어가있는데 useRef처리 하기 힘들면 바디 리랜더는 절대 일어나면 안됨.
 */