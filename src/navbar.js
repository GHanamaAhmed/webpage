import React, { Component } from "react";
import "./navbar.css";
export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.toggleleft=this.toggleleft.bind(this)
        this.toggleright=this.toggleright.bind(this)
        this.togglemiddle=this.togglemiddle.bind(this)
    }
    state={
        btn:"span-left",
        color:["text-white","",""]
    }
    toggleleft(){
        this.setState({...this.state,btn:"span-left",color:["text-white","",""]})
    }
    toggleright(){
        this.setState({...this.state,btn:"span-right",color:["","","text-white"]})
    }
    togglemiddle(){
        this.setState({...this.state,btn:"span-middle",color:["","text-white",""]})
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid d-flex justify-content-beetwen">
                    <p className="navbar-brand ms-2">Translate</p>
                    <div className="groubbtn">
                        <span className={`w-25 h-100 ${this.state.btn}`}></span>
                        <button className={`btn ${this.state.color[0]}`} onClick={this.toggleleft}>Home</button>
                        <button className={`btn ${this.state.color[1]}`} onClick={this.togglemiddle}>Sign in</button>
                        <button className={`btn ${this.state.color[2]}`} onClick={this.toggleright}>Sign up</button>
                    </div>
                </div>
            </nav>)
    }
}