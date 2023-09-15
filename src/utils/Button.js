import './Button.css'

const Button = ({location, text, onClick}) => {
    return (
        <button className={["Button",`${location}`].join(" ")} > {text} </button>
    )
}

const MenuButton = () => {
    return (
        <label for="menuicon" className="MenuButton">
            <span></span>
            <span></span>
            <span></span>
        </label> 
    )
}

export {Button, MenuButton};