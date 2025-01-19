/* eslint-disable react/prop-types */

import Note from "./Note"
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note.content}/>)}
</ul>
    </div>
  )
}

export default App

