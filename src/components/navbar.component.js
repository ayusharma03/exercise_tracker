import { Component } from "react";
import { Link } from "react-router-dom";

// make a navbar component extending componemt
export default class Navbar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={
            {
                paddingInline:40,
                borderRadius:50,
                }
          }>
          <Link className="navbar-brand" to="/" style={
            {
                color: "White",
                fontSize: "24px",
                fontWeight:"bold",
                fontFamily:"Papyrus"
                }
          }>Exercisor</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className="nav-link" to="/">Exercises</Link>
              <Link className="nav-link" to="/create">Create Exercise</Link>
              <Link className="nav-link" to="/user">Create User</Link>
            </div>
          </div>
        </nav>
        )
    }
}