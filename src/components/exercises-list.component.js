import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
var editimg= require('../image/edit.png');
var deleteimg= require('../image/del.png');
// Exercise component
const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>  <img src={editimg} style={{width:20}}/></Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}><img src = {deleteimg} style={{width:20}}/></a>
        </td>
    </tr>
)
export default class ExerciseList extends Component{
    constructor(props){
        super(props);
        this.state = {exercises: []};
        this.deleteExercise = this.deleteExercise.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({exercises: response.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/del/'+id)
        .then(res => console.log(res.data));
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }
    exerciseList(){
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>
        })
    }
    render() {
        return (
            <div>
                <h1>Logged Exercises</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}