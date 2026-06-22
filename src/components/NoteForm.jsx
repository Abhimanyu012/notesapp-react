import React, { useState, useEffect } from 'react'

// 📝 Props receive kar rahe hain parent (App.jsx) se
const NoteForm = ({ addNote, updateNote, editingNote, cancelEditing }) => {
    // 🎯 STATE: Form ke input fields ke liye
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // 🔄 useEffect: Jab editingNote change ho, toh form ko populate karo
    // Ye hook tab chalta hai jab editingNote ki value change hoti hai
    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title)
            setDescription(editingNote.description)
        } else {
            setTitle("")
            setDescription("")
        }
    }, [editingNote]) // Dependency array - jab ye change ho tab effect chale

    // ✅ FUNCTION: Form submit karne pe (Add ya Update)
    const handleSubmit = () => {
        // Validation: Agar title ya description khali hai toh alert dikha do
        if (!title.trim() || !description.trim()) {
            alert("Title aur Description dono zaruri hain!")
            return
        }

        // Agar editing mode hai toh update karo, nahi toh add karo
        if (editingNote) {
            updateNote(editingNote.id, title, description)
        } else {
            addNote(title, description)
        }

        // Form ko clear kar do
        setTitle("")
        setDescription("")
    }

    // ❌ FUNCTION: Edit cancel karne pe
    const handleCancel = () => {
        cancelEditing()
        setTitle("")
        setDescription("")
    }

    return (
        <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-xl font-bold mb-4 text-gray-800'>
                {editingNote ? "✏️ Note Edit Karo" : "➕ Naya Note Banao"}
            </h2>
            
            <div className='space-y-4'>
                {/* Title Input */}
                <input 
                    className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition'
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='📌 Title likho (e.g., Shopping List)' 
                />
                
                {/* Description Textarea */}
                <textarea
                    className='w-full px-4 py-2 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 transition min-h-[100px] resize-none'
                    placeholder="📝 Description likho (e.g., Doodh, Bread, Eggs)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                {/* Buttons */}
                <div className='flex gap-3'>
                    <button 
                        onClick={handleSubmit}
                        className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105'
                    >
                        {editingNote ? "💾 Update Karo" : "➕ Add Karo"}
                    </button>
                    
                    {editingNote && (
                        <button 
                            onClick={handleCancel}
                            className='bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition'
                        >
                            ❌ Cancel
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NoteForm
