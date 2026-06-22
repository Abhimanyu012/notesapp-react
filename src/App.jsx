import React, { useState } from 'react'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NotesLists from './components/NotesLists'

const App = () => {
  // 🎯 STATE: Yahan saare notes store honge (array mein)
  // useState ek React Hook hai jo component ko "yaaddasht" deta hai
  const [notes, setNotes] = useState([])
  
  // 🎯 STATE: Editing mode ke liye - kaunsa note edit ho raha hai
  const [editingNote, setEditingNote] = useState(null)

  // ✅ FUNCTION: Naya note add karne ke liye
  const addNote = (title, description) => {
    const newNote = {
      id: Date.now(), // Unique ID ke liye timestamp use kar rahe hain
      title: title,
      description: description,
      createdAt: new Date().toLocaleString()
    }
    // Purane notes ke saath naya note add kar rahe hain
    setNotes([...notes, newNote])
  }

  // 🗑️ FUNCTION: Note delete karne ke liye
  const deleteNote = (id) => {
    // Filter se wo note hata rahe hain jiska id match karta hai
    const updatedNotes = notes.filter(note => note.id !== id)
    setNotes(updatedNotes)
  }

  // ✏️ FUNCTION: Note edit karne ke liye
  const updateNote = (id, title, description) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, title, description }
      }
      return note
    })
    setNotes(updatedNotes)
    setEditingNote(null) // Edit complete hone ke baad editing mode band kar do
  }

  // 📝 FUNCTION: Edit mode start karne ke liye
  const startEditing = (note) => {
    setEditingNote(note)
  }

  // ❌ FUNCTION: Edit cancel karne ke liye
  const cancelEditing = () => {
    setEditingNote(null)
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-cyan-400 to-blue-500 p-4'>
      <div className='max-w-4xl mx-auto space-y-6'>
        <Header />
        
        {/* Props pass kar rahe hain - parent se child ko data bhej rahe hain */}
        <NoteForm 
          addNote={addNote}
          updateNote={updateNote}
          editingNote={editingNote}
          cancelEditing={cancelEditing}
        />
        
        <NotesLists 
          notes={notes}
          deleteNote={deleteNote}
          startEditing={startEditing}
        />
      </div>
    </div>
  )
}

export default App
