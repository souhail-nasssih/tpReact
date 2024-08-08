import React from "react";

export default function Category({ category, onClick }) {
  return (
    <div className="col-2 mb-2">
      <button className="btn btn-outline-primary" onClick={() => onClick(category)}>
        {category}
      </button>
    </div>
  );
}
