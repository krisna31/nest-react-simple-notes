import { useState } from 'react'

function App() {
  const [notes, setNotes] = useState([] as any[])

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>
      <button onClick={() => {
        fetch('http://localhost:3000/notes')
          .then(res => res.json())
          .then(data => setNotes(data))
      }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mb-4">
        Fetch Notes
      </button>
      <ul>
        {notes.map((note: any) => (
          <li key={note.id} className="text-lg">
            <button onClick={() => {
              const newTitle = prompt('Enter new title', note.title);
              const newContent = prompt('Enter new content', note.content);
              if (newTitle && newContent) {
                fetch(`http://localhost:3000/notes/${note.id}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ title: newTitle, content: newContent }),
                })
                  .then(res => res.json())
                  .then(data => {
                    setNotes(notes.map(n => n.id === note.id ? data : n));
                  })
              }
            }} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded cursor-pointer mr-2">
              Edit
            </button>
            <button onClick={() => {
              fetch(`http://localhost:3000/notes/${note.id}`, {
                method: 'DELETE',
              })
                .then(res => res.json())
                .then(() => {
                  setNotes(notes.filter(n => n.id !== note.id));
                })
            }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded cursor-pointer">
              Delete
            </button>
            <h2 className="text-xl font-bold">{note.title}</h2>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        fetch('http://localhost:3000/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content: formData.get('content') as string }),
        })
          .then(res => res.json())
          .then(data => setNotes([...notes, data]))
      }} className="mt-4">
        <input type="text" name="title" placeholder="Note title" className="border border-gray-300 rounded py-2 px-4 mr-2" />
        <br />
        <textarea name="content" placeholder="Note content" className="border border-gray-300 rounded py-2 px-4 mr-2"></textarea>
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Add Note
        </button>
      </form>
    </div>
  )
}

export default App
