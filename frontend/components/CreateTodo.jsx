import { useState } from 'react';

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:4500/todo", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(async (res) => {
              if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
              }
              const json = await res.json();
              alert("Todo Added");
            })
            .catch((error) => {
              console.error('Error adding todo:', error);
              alert('Failed to add todo');
            });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
