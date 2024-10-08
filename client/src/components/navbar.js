import React, { Component } from 'react'
import '../navbar.css';

export default class navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">LankaSub World</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                    <a className="nav-link" aria-current="page" href="/about">About Us</a>
                    <a className="nav-link" aria-current="page" href="/">Contact</a>
                    <a className="nav-link" href='/search'>search</a>
                    <a className="nav-link-right" href="/login">Want to Add Subtitles? Join Us!</a>
                    
                </div>
            </div>
            
        </div>
    </nav>
    )
  }
}
