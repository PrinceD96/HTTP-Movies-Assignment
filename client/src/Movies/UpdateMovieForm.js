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