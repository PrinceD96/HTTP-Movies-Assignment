import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Input, Label } from "semantic-ui-react";

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
    addedMovie.stars = addedMovie.stars.filter(star => star !== "")

    axios
      .post(`http://localhost:5000/api/movies`, addedMovie)
      .then(res => console.log(`Movie ${addedMovie.id} has been added successfully`))
      .catch(error => console.error("Error trying to add movie", error))
      .finally(() => props.history.push("/"));
  }

  return (
    <div className="add__form__container">
      <Form className="add__form" onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor="title">Movie Title</label>
          <Input type="text" name="title" id="title" value={inputs.title} onChange={handleChange} />
        </Form.Field>

        <Form.Field>
          <label htmlFor="director">Director</label>
          <Input type="text" name="director" id="director" value={inputs.director} onChange={handleChange} />
        </Form.Field>

        <Form.Field>
          <label htmlFor="metascore">Metascore</label>
          <Input type="text" name="metascore" id="metascore" value={inputs.metascore} onChange={handleChange} />
        </Form.Field>

        <Form.Field>
          <h3>Actors</h3>
          {inputs.stars.map((star, index) => (
            <input key={index} actor-id={index} type="text" name="stars" value={inputs.stars[index]} onChange={handleChange} />
          ))}
        </Form.Field>
        <Button color="teal" type="submit">Add Movie</Button>
      </Form>
    </div>
  )
}

export default AddMovie