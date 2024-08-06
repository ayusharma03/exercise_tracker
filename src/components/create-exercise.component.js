import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component{

    onchangeUsername = this.onchangeUsername.bind(this);
    onchangeDescription = this.onchangeDescription.bind(this);
    onchangeDuration = this.onchangeDuration.bind(this);
    onchangeDate = this.onchangeDate.bind(this);
    onSubmit = this.onSubmit.bind(this);
    
    constructor(props){
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }
    onchangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }
    onchangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }
    onchangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }
    onchangeDate(date){
        this.setState({
            date: date
        })
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
        window.location = '/';
    }
    
    render(){
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onchangeUsername}>
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
                            onChange={this.onchangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onchangeDuration}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker size="10" 
                                selected={this.state.date}
                                onChange={this.onchangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group" style={{ paddingTop: "10px" }}>
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" style={{paddingInline: 10,width: "100%"}}/>
                    </div>
                </form>
            </div>
        )
    }
}