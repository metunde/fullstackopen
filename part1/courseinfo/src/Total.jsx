/* eslint-disable react/prop-types */
const Total = ({parts}) =>{
    return (
        <>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </>
    )
}

export default Total