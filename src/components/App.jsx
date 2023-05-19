import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputNote, setInputNote] = useState("");

  const [Notes, setNote] = useState([]);

  function changeInputTitle(event) {
    setInputTitle(event.target.value);
  }

  function onChangeInputNote(event) {
    setInputNote(event.target.value);
  }

  function addNotes(event) {
    setNote((prevvalues) => {
      return [...prevvalues, [inputTitle, inputNote]];
    });
    event.preventDefault();
    setInputTitle("");
    setInputNote("");
  }

  function deleteNote(id) {
    setNote((prevItems) => {
      return Notes.filter((item, index) => {
        return id !== index;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        onSubmit={addNotes}
        onChangeInput={changeInputTitle}
        valueInput={inputTitle}
        onChangeText={onChangeInputNote}
        valueText={inputNote}
      />
      {Notes.map((item, index) => (
        <Note
          id={index}
          title={item[0]}
          content={item[1]}
          onClick={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
