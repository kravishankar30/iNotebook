import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-regular fa-trash-can"
            onClick={async () => {
              await deleteNote(note._id);
              showAlert("Deleted Note Successfully", "success");
            }}></i>
          <i className="fa-regular fa-pen-to-square mx-4" onClick={() => {updateNote(note)}
          }></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
