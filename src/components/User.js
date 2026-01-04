import React from 'react';

class User extends React.Component {
    constructor(props) {
        console.log("Component Constructor");
        super(props);
        this.state = {
            name: "dummy",
            location: "dummy"
        }
    }
    async componentDidMount() {
        console.log("Component Mounted")
        const data = await fetch("https://api.github.com/users/shivanigupta98");
        const json = await data.json();
        this.setState({
            name: json.name,
            location: json.location
        })
    }

    componentDidUpdate() {
        console.log('Component updated');
    }

    componentWillUnmount() {
        console.log("Component unmounted");
    }

    render() {
        console.log("Component Render");
        const { name, location } = this.state;
        return <div className='user-card'>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
        </div>
    }
}

export default User;

/*
Constructor
Render
componentDidMount
componentDidUpdate
componentWillUnmount
*/