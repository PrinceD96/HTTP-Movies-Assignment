import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Loader from "react-loader-spinner";
import { Button } from "semantic-ui-react";

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchMovie(this.props.match.params.id);
    }, 1500)
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  updateMovie = () => {
    this.props.history.push(`/update-movie/${this.state.movie.id}`)
  }

  deleteMovie = () => {
    axios
      .delete(`http://localhost:5000/api/movies/${this.state.movie.id}`)
      .then(res => this.setState({ ...this.state, movie: res.data }))
      .catch(error => console.log(error))
      .finally(this.props.history.push("/"))
  }

  render() {
    if (!this.state.movie) {
      return (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={50}
          width={100}
          timeout={3000}
          style={{ textAlign: 'center' }} />)
    };

    return (
      <div className="save-wrapper" >
        <MovieCard movie={this.state.movie} saveMovie={this.saveMovie} updateMovie={this.updateMovie} deleteMovie={this.deleteMovie} />
        {/* <div className="button__container">
          <Button color="teal" className="save-button" onClick={this.saveMovie}>
            Save
          </Button>
          <Button color="teal" className="update-button" onClick={this.updateMovie} >
            Update
          </Button>
          <Button color="red" className="delete-button" onClick={this.deleteMovie} >
            Delete
          </Button>
        </div> */}
      </div >
    );
  }
}
