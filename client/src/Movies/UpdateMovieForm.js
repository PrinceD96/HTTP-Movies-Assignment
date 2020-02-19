import React, { useState, useEffect } from "react";
import axios from 'axios';

const UpdateMovieForm = props => {
  const [inputs, setInputs] = useState({
    id: null,
    title: '',
    director: '',
    metascore: '',
    stars: []
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setInputs(res.data))
      .catch(error => console.error(error))
  }, [props.match.params.id])

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
    const updatedMovie = inputs;

    axios
      .put(`http://localhost:5000/api/movies/${updatedMovie.id}`, updatedMovie)
      .then(res => console.log(`Movie ${updatedMovie.id} has been edited successfully`))
      .catch(error => console.error(`Error trying to update movie ${updatedMovie.id}`, error))
      .finally(() => props.history.push(`/movies/${updatedMovie.id}`));
  }

  return (
    <div className="update__form__container">
      <form className="update__form" onSubmit={handleSubmit}>
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

        <button>Cancel</button>
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateMovieForm;