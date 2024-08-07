import { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component{

    onchangeUsername = this.onchangeUsername.bind(this);

    constructor(props){
        super(props);
        this.onchangeUsername = this.onchangeUsername.bind(this);
        this.onsubmit = this.onsubmit.bind(this);
        this.state = {
            username: ''
        }
    }

    onchangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onsubmit(e){
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user);
        this.setState({
            username: ''
        })
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
    }

    

    render(){
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required className="form-control" value={this.state.username} onChange={this.onchangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" style={{paddingInline: 10,width: "100%", background: 
                        "radial-gradient(circle, rgb(120, 201, 216) 40%, rgb(47, 73, 107) 80%)", border: "none"
                        }}/>
                    </div>
                </form>
            </div>
        )
    }
}