import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinner-overlay";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote, loadingDotLoader } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    ref.current.click();
    await editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Updated Note Successfully", "success");
  };

  const handleClose = () => {
    props.showAlert("Your note was not updated. If you intended to update your note, click on the Update Note button in the Edit menu.", "info");
  };
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Editing Note...
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={1} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label overflow-y-scroll">
                    Description
                  </label>
                  <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                Close
              </button>
              <button disabled={note.etitle.length < 1 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container row mh-80 my-3">
        <h2>Your Notes</h2>
        {loadingDotLoader ? (
          <div className="my-3 mx-2">
          <DotLoader color="#212529" size={9}/>
          </div>
        ) : notes.length === 0 ? (
          <div className="container mx-2">{"No notes to display"}</div>
        ) : (
          notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />;
          })
        )}
      </div>
    </>
  );
};

export default Notes;
