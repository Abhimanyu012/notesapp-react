import React from 'react'

// 📝 Props receive kar rahe hain - note ka data aur functions
const NoteCard = ({ note, deleteNote, startEditing }) => {
    
    // 🗑️ Delete button click hone pe
    const handleDelete = () => {
        // Confirm karo user se pehle delete karne se
        if (window.confirm(`"${note.title}" delete karna hai?`)) {
            deleteNote(note.id)
        }
    }

    // ✏️ Edit button click hone pe
    const handleEdit = () => {
        startEditing(note)
    }

    return (
        <div className='bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow border-l-4 border-blue-500'>
            {/* Title */}
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
                📌 {note.title}
            </h3>
            
            {/* Description */}
            <p className='text-gray-600 mb-3 whitespace-pre-wrap'>
                {note.description}
            </p>
            
            {/* Created Time */}
            <p className='text-xs text-gray-400 mb-4'>
                🕒 {note.createdAt}
            </p>
            
            {/* Action Buttons */}
            <div className='flex gap-2'>
                <button 
                    onClick={handleEdit}
                    className='flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105'
                >
                    ✏️ Edit
                </button>
                <button 
                    onClick={handleDelete}
                    className='flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105'
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    )
}

export default NoteCard
