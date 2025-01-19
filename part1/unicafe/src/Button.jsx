/* eslint-disable react/prop-types */
const Button = (props) => {

    return (
        <>
        <button onClick={props.value}>{props.text}</button>
        </>
    )
}

export default Button