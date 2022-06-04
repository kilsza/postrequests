import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="flex flex-col mx-auto w-full">
      <div className="flex flex-col mx-auto">
        <h2 className="text-gray-700 text-base mt-4 text-xl font-bold">
          {info.name}
        </h2>
        <p className="text-gray-700 text-base mt-4 text-xl font-bold">
          {info.desc}
        </p>
      </div>
      <div className="flex flex-row mx-auto mt-4">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors"
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="m-2 items-center">{total ? total : ""}</h3>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
