import React, { useContext } from "react";
import { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { RouletteSpinnerOverlay } from 'react-spinner-overlay';

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote, loading } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = async (e) => {
    e.preventDefault();
    await addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Note Successfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="container">
      <RouletteSpinnerOverlay loading={loading} size ={50} color="#212529" overlayColor="rgb(255 255 255 / 40%)"/>
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" value = {note.title}aria-describedby="emailHelp" onChange={onChange} minLength={1} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" name="description" value = {note.description}onChange={onChange} minLength={5} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input type="text" className="form-control" value = {note.tag} id="tag" name="tag" onChange={onChange} />
        </div>
        <button disabled = {note.title.length < 1 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
