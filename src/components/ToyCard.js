import React, { useState } from "react";

function ToyCard({ toy, handleDeleteToy }) {

  const [likes, setLikes] = useState(toy.likes)

  function handleClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => handleDeleteToy(toy.id));
  }

  function handleUpLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likes: toy.likes + 1
    }),
  })
  setLikes(likes + 1)
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleUpLike} className="like-btn">Like {"❤️"}</button>
      <button onClick={handleClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
