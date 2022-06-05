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
      setValid(() => {
        return (
          <p className="flex flex-wrap bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold"> Введите название </strong>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </p>
        );
      });
      return;
    }
    if (!desc) {
      setValid(() => {
        return (
          <p className="flex flex-wrap bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold"> Введите описание </strong>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </p>
        );
      });
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
