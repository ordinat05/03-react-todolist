import React, { useState } from 'react'
import './App.css'


function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("YAPILACAK boş gönderilemez.")
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setItems(oldItems => [...oldItems, item])
    setNewItem("");
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Enter -->", event.key)
      addItem();
    }
    else if (event.key === 'Escape') {
      console.log("ESC -->", event.key)
      setNewItem("");
    }
  };
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <span>değer girilirken, input içinde ENTER a basılırsa YAPILACAK kaydedilir</span>
      <span>değer girilirken, input içinde ESC basılırsa inputtaki yazı silinir</span>
      <input type="text"
        placeholder='bir tane YAPILACAK ekleyiniz.'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={() => addItem()}>Ekle</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.value} {<button onClick={() => deleteItem(item.id)}><b>X</b></button>}</li>
          )
        })}


      </ul>
    </div>
  )
}

export default App
