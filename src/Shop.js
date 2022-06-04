import React, { useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("https://covid-shop-mcs.herokuapp.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, desc: desc }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc,
      },
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="mt-4 flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow">
        <AddItem
          name={name}
          desc={desc}
          valid={valid}
          onNameChange={handleNameChange}
          onDescChange={handleDescChange}
          onFormSubmit={handleFormSubmit}
        />
        <div className="">
          {items.length === 0 && (
            <p className="text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 font-bold h- m-2">
              Добавьте первый товар
            </p>
          )}
        </div>
        <ItemsList items={items} onDeleteClick={handleDeleteClick} />
      </div>
    </>
  );
}
