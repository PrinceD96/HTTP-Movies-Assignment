import React, { useState } from "react";
import axios from "axios";

const AddMovie = props => {
  const [inputs, setInputs] = useState({
    id: null,
    title: '',
    director: '',
    metascore: '',
    stars: ['']
  });

  const handleChange = e => {
    if (e.target.name !== "stars") {
      setInputs({ ...inputs, [e.target.name]: e.target.value })
    } else {
      const id = e.target.getAttribute('actor-id');
      const newStars = [...inputs.stars];
      newStars[id] = e.target.value;
      setInputs({
        ...inputs,
        stars: newStars
      });
    }
    console.log(e.target.name, inputs[e.target.name])
  }

  const handleSubmit = e => {
    e.preventDefault()

    const addedMovie = inputs;

    axios
      .post(`http://localhost:5000/api/movies`, addedMovie)
      .then(res => console.log(`Movie ${addedMovie.id} has been added successfully`))
      .catch(error => console.error("Error trying to add movie", error))
      .finally(() => props.history.push("/"));
  }

  return (
    <div className="add__form__container">
      <form className="add__form" onSubmit={handleSubmit}>
        <label htmlFor="title">Movie Title</label>
        <input type="text" name="title" id="title" value={inputs.title} onChange={handleChange} />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" id="director" value={inputs.director} onChange={handleChange} />

        <label htmlFor="metascore">Metascore</label>
        <input type="text" name="metascore" id="metascore" value={inputs.metascore} onChange={handleChange} />

        <h2>Actors</h2>
        {inputs.stars.map((star, index) => (
          <input key={index} actor-id={index} type="text" name="stars" value={inputs.stars[index]} onChange={handleChange} />
        ))}
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddMovie