import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button, Header } from "semantic-ui-react";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="saved-list">
          <h2 className="left">Saved Movies:</h2>
          <div className="saved__movies__container">
            {this.props.list.map(movie => {
              return (
                <NavLink
                  to={`/movies/${movie.id}`}
                  key={movie.id}
                // activeClassName="saved-active"
                >
                  <span className="saved-movie">{movie.title}</span>
                </NavLink>
              );
            })}
          </div>
          <div className="right">
            <Button color="blue" className="home-button">
              <Link to="/">Home</Link>
            </Button>
            <Button color="blue" className="add-movie-button">
              <Link to="/add-movie">Add Movie</Link>
            </Button>
          </div>
        </div>

      </>
    );
  }
}
