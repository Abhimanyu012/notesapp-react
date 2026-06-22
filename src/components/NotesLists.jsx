import React from 'react'
import NoteCard from './NoteCard'

// 📝 Props receive kar rahe hain - notes array aur functions
const NotesLists = ({ notes, deleteNote, startEditing }) => {
    
    return (
        <div className='space-y-4'>
            {/* Heading */}
            <h2 className='text-2xl font-bold text-white mb-4'>
                📚 Aapke Notes ({notes.length})
            </h2>
            
            {/* Agar notes hain toh dikha do, nahi toh message dikha do */}
            {notes.length === 0 ? (
                <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
                    <p className='text-gray-500 text-lg'>
                        📝 Abhi koi note nahi hai. Upar se naya note banao!
                    </p>
                </div>
            ) : (
                // 🔄 MAP: Array ke har element ke liye NoteCard component render karo
                // Ye React ka powerful feature hai - list rendering
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {notes.map((note) => (
                        <NoteCard 
                            key={note.id}  // React ko unique key chahiye har item ke liye
                            note={note}
                            deleteNote={deleteNote}
                            startEditing={startEditing}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default NotesLists
