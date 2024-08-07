import { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
class EditExercise extends Component{
    constructor(props){
        super(props);
        // bind this to the methods
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // set the initial state
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    // make a hook function to define params

    componentDidMount(){
        
        const id = window.location.pathname.split('/').pop();
        axios.get('http://localhost:5000/exercises/'+id)
        .then(response => {
            this.setState({
                username: response.data.username,
                description: response.data.description,
                duration: response.data.duration,
                date: new Date(response.data.date)
            })
        })
        axios.get('http://localhost:5000/users/')
        .then(response => {
        if(response.data.length > 0){
                this.setState({
                users: response.data.map(user => user.username),
        });
    }})}
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        });
    }
    onChangeDate(date){
        this.setState({
            date: date
        });
    }
    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        const id = window.location.pathname.split('/').pop();
        axios.post('http://localhost:5000/exercises/update/'+id, exercise)
        .then(res => console.log(res.data));
        window.location = '/';
    }
    render() {
        return (
            <div>
                <h1>Edit Exercise Log</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user){
                                    return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group" style={
                        {
                            marginTop: 20,
                        }
                    }>
                        <input type="submit"
                            value="Edit Exercise Log"
                            className="btn btn-primary"
                            style={
                                {
                                    width:"100%",
                                    fontWeight: "bold",
                                    background:"rgb(33,37,41)",
                                    color: "white",
                                    
                                }
                            }
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default EditExercise;