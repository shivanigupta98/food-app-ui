import { Component } from 'react';
import User from './User';

class About extends Component {
    constructor(props) {
        super(props);
       // console.log('Parent Constructor');
    }
    componentDidMount() {
       // console.log('Parent Mounted');
    }
    render() {
       // console.log('Parent Render');
        return (
            <div>
                <h1>About page</h1>
                <User name={"First"} location={"Gwalior"} />
            </div>
        )
    }
}
 
export default About;