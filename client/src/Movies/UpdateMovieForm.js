import React, { useState, UseEffect } from "react";

const UpdateMovieForm = () => {
  const [inputs, setInputs] = useState({
    id: null,
    title: '',
    director: '',
    metascore: '',
    stars: []
  });

  return (
    <div className="update__form__container">
      <form className="update__form">
        <label htmlFor="title">Movie Title</label>
        <input type="text" name="title" id="title" value={inputs.title} />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" id="director" value={inputs.director} />

        <label htmlFor="metascore">Metascore</label>
        <input type="text" name="metascore" id="metascore" value={inputs.metascore} />

        <h2>Actors</h2>
        {inputs.stars.map((star, idx) => (
          <input key={idx} type="text" name="stars" value={inputs.stars[idx]} />
        ))}

        <button>Cancel</button>
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateMovieForm;