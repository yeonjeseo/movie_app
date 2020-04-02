import React from "react";
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.1
    },
    {
        id: 2,
        name: "Samgieopsal",
        image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 5.0
    },
    {
        id: 3,
        name: "Bibimbab",
        image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 3.2
    },
    {
        id: 4,
        name: "Doncasu",
        image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 4.6
    },
    {
        id: 5,
        name: "Kimbab",
        image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 4.3
    }
];

function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h1>{rating}/5.0</h1>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired, 
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

function App() {
    return (
        <div className='App'>
            {foodILike.map(dish => ( 
                <Food 
                key={dish.id} 
                name={dish.name} 
                picture={dish.image} 
                rating={dish.rating} />
            ))}
        </div>
    );
}

export default App;
