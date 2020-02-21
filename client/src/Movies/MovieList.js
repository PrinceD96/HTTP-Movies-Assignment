import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Header, Segment, Button } from "semantic-ui-react";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => this.setState({ movies: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="save-wrapper" >
        <div className="movie-card">
          <Header as='h2' attached='top'>
            <div className="movie-card-header">
              {movie.title}
            </div>
          </Header>
          <Segment attached>
            <div>
              Director: <em>{movie.director}</em>
            </div>
            <div>
              Metascore: <strong>{movie.metascore}</strong>
            </div>
            <h3>Actors</h3>

            {movie.stars.map(star => (
              <div key={star} className="movie-star">
                {star}
              </div>
            ))}
          </Segment>
        </div>
      </div>
    </Link>
  );
}
