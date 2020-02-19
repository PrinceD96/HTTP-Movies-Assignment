import React from "react";

const UpdateMovieForm = () => {

  return (
    <div className="update__form__container">
      <form className="update__form">
        <input type="text" name="title" />
        <input type="text" name="director" />
        <input type="text" name="metascore" />
        <input type="text" name="actors" />
        <button>Cancel</button>
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateMovieForm;