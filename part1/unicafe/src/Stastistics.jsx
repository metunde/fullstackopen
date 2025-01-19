/* eslint-disable react/prop-types */
const Stastics = (props) => {

    return(
        <div>
<table>
  <tbody>
    <tr>
      <td>{props.text}</td>
      <td>{props.state}</td>
    </tr>
  </tbody>
</table>

</div>
    )
}

export default Stastics