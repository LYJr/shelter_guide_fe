import './Button.css'

const Button = ({location, text, onClick}) => {
    return (
    <button className={["Button",`${location}`].join(" ")} > {text} </button>
    )
}

export {Button };