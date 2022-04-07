import React from 'react'
import './App.css'
import contacts from "./data/contacts.json"
import Contact from "./components/Contact"

console.log(contacts)


function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <Contact contacts={contacts.results} />
    </div>
  )
}

export default App;
