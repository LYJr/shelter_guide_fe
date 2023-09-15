import "./Header.css"
import { MenuButton } from "../utils/Button";


function Header ({center, rigth}) {
    return (
        <header>
            <div className="Header">
                <MenuButton />

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