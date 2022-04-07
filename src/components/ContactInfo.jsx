


function ContactInfo(props) {
        return (
            <li>
                <h1>{props.name.first} {props.name.last}</h1>
                <h3> Home: {props.phone}</h3>
                <h3> Cell: {props.cell} </h3>
            </li>
        )
}

export default ContactInfo