import "./Header.css"

function Header ({title, left, rigth}) {
    return (
        <div className="Header">
            <div className="left_header">{left}</div>
            <div className="center_header">{title}</div>
            <div className="right_header">{rigth}</div>
        </div>
    )
}

export default Header;