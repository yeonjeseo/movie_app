import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=ratings");
        console.log(movies);
        // this.setState({ movies: movies });
        this.setState({ movies, isLoading: false });
    };
    
    componentDidMount() {
        this.getMovies();
    }

    render() {
        // C++ using namespace 사용과 비슷한 듯
        const { isLoading, movies } = this.state;

        return (
            <section className="container">
                <div className="movies">
                {isLoading ? (
                    <div className='loader'>
                        <span className='loader_text'>Loading.....</span>
                    </div>
                ) : (
                    movies.map((movie) => <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />)
                    )}
                </div>
            </section>
        );
    }
}

export default App;
