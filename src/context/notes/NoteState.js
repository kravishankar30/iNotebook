import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "https://inotebook-api-30tl.onrender.com/";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  const [loadingDotLoader, setLoadingDotLoader] = useState(false);
  const [loading, setLoading] = useState(false);

  //Get all notes
  const getNotes = async () => {
    //API CALL
    setLoadingDotLoader(true);
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
    setLoadingDotLoader(false);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    setLoading(true);
    //API CALL
    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    setLoading(false);
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //API CALL
    setLoading(true);
    await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    setLoading(false);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    setLoading(true);
    await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    //LOGIC TO EDIT IN CLIENT
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
    setLoading(false);
  };

  return <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes, loading, loadingDotLoader }}>{props.children}</NoteContext.Provider>;
};

export default NoteState;
