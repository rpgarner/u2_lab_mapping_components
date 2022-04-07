import ContactInfo from "./ContactInfo"


function Contact (props) {
    return (
        <ul>
            { props.contacts.map((person) => (
                <ContactInfo 
                    key={person.cell}
                    name={person.name}
                    phone={person.phone}
                    cell={person.cell}
                />  
            ))}      
        </ul>   
    )
}

export default Contact