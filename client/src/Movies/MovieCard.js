import React from 'react';
import { Header, Segment, Button } from "semantic-ui-react";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
      <Header as='h2' attached='top'>
        <div className="movie-card-header">
          {title}
          <div className="button__container">
            <Button color="teal" className="save-button" onClick={props.saveMovie}>
              Save
            </Button>
            <Button color="teal" className="update-button" onClick={props.updateMovie} >
              Update
            </Button>
            <Button color="red" className="delete-button" onClick={props.deleteMovie} >
              Delete
            </Button>
          </div>
          <div className="icon__container">
            <Button color="teal" className="save-button" onClick={props.saveMovie} icon="bookmark" />
            <Button color="teal" className="update-button" onClick={props.updateMovie} icon="edit" />
            <Button color="red" className="delete-button" onClick={props.deleteMovie} icon="delete" />
          </div>
        </div>
      </Header>
      <Segment attached>
        <div>
          Director: <em>{director}</em>
        </div>
        <div>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </Segment>
    </div>
  );
};

export default MovieCard;
