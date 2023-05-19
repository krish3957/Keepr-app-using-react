import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          onChange={props.onChangeInput}
          value={props.valueInput}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={props.onChangeText}
          value={props.valueText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
