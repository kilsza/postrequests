import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li className="border border-slate-200 my-4" key={item.id}>
          <Item info={item} />
          <button
            className="transition-colors flex mx-auto my-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
