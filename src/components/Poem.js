import React from "react";

function Poem({poemObject}) {
  const {author, title, content} = poemObject

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button>Mark as read</button>
    </div>
  );
}

export default Poem;
