import React from "react";

export default function AddItem(props) {
  return (
    <form
      className="w-full max-w-sm flex flex-col items-center"
      onSubmit={props.onFormSubmit}
    >
      <div className="py-4">
        <label className="" htmlFor="item-name">
          Название:
        </label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="form-footer">
        <div className="pt-4">{props.valid}</div>
        <input
          type="submit"
          className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors block mx-auto"
          value="Добавить"
        />
      </div>
    </form>
  );
}
