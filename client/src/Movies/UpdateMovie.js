import React from "react";

const UpdateMovie = () => {

  return (
    <>
      <form>
        <input type="text" name="title" />
        <input type="text" name="director" />
        <input type="text" name="metascore" />
        <input type="text" name="actors" />
        <button>Cancel</button>
        <button>Update</button>
      </form>
    </>
  )
}

export default UpdateMovie;