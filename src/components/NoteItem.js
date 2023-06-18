import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, showAlert } = props;

  return (
    <div className="col-md-4">
      <div className="card my-3 h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">#{note.tag}</h6>
          <p className="card-text my-2">{note.description.slice(0, 375)}...</p>
          <div className="mt-auto">
            <i
              className="fa-regular fa-trash-can"
              onClick={async () => {
                await deleteNote(note._id);
                showAlert("Deleted Note Successfully", "success");
              }}></i>
            <i
              className="fa-regular fa-pen-to-square mx-4"
              onClick={() => {
                updateNote(note);
              }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
