import React from "react";

class App extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        setTimeout( () => {
            this.setState({ isLoading: false, Ryuha: true });
            console.log(this.state);
        }, 6000);
    }

    render() {
        console.log("this.state");
        // C++ using namespace 사용과 비슷한 듯
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : "We are ready"};</div>;
    }
}

export default App;
