// New movies component to display movie data


const Movies = (props) => {
    return(
        <div>
            movies component
            {console.log(props.myMovies)}
        </div>
    )
};

export default Movies;