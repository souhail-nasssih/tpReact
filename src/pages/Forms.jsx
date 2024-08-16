import React, { useState } from "react";

export default function Forms() {
  const [formValue, setFormValue] = useState({});
  const handleChange = (e) => {
    const currentTarget = e.currentTarget;
    const id = currentTarget.id;
    let value = currentTarget.value
    if (currentTarget.type === "checkbox") {
      value = currentTarget.checked;
    }

    setFormValue(prevState =>{
        return {...prevState , ...{[id]:value}}
    })
  }
  const handleClick=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="container">
      {JSON.stringify(formValue)}
      <h1>Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nom"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prenom:</label>
          <input
            type="text"
            className="form-control"
            id="prenom"
            placeholder="Prenom
            "
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Age"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="accepte"
            className="me-3"
            onChange={handleChange}
          />
          <label htmlFor="accepte"> Accepter</label>
        </div>
        <div className="form-group">
          <label htmlFor="pays">Pays:</label>
          <select id="pays" className="form-control" onChange={handleClick}>
            <option value="france">France</option>
            <option value="algeria">algeria</option>
            <option value="maroc">Maroc</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
