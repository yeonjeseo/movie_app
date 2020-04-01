import React from "react";

function Food({favorite}) {
    return <h1>I like {favorite}!!</h1>;
}
function App() {
    return (
        <div className='App'>
            Hello!!!
            <Food favorite='kimchi' />
            <Food favorite='samgiopsal' />
            <Food favorite='ramen' />
            <Food favorite='chukumi' />
        </div>
    );
}

export default App;
