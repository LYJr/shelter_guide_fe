import "./Header.css"

function Header ({left, center, rigth}) {
    return (
        <header>
            <div className="Header">
                <div className="left">
                    {left}
                </div>
                <div className="center"> 
                    {center}
                </div>

                <div className="rigth">
                    {rigth}
                </div>

            </div>
        </header>
    )
}

export default Header;