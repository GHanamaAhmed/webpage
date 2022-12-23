import React, { Component } from "react";
import Containerto from "./containerto";
import axios from "axios";
export default class Container extends Component {
    constructor(props) {
        super(props)
        this.clickhandle = this.clickhandle.bind(this)
        this.translatto = this.translatto.bind(this)
        this.translatfrom = this.translatfrom.bind(this)
        this.transalatee = this.transalatee.bind(this)
        this.state.areatransalate = React.createRef();
    }
    state = {
        isrun: false,
        display: "",
        form: "",
        border: "border-round",
        language: [],
        transalatefrom: "",
        transalateto: "",
        transalate: "",
        areatransalate: "",
        fromt:["English","French","Arabic"],
        ftl:["English","French","Arabic"]
    }
    translatto(e) {
        if (e.name!=this.state.ftl[2]) {
            this.setState({...this.state,fromt:this.state.ftl.push(e.name)})
        this.setState({...this.state,fromt:this.state.ftl.shift()})
        } 
        this.setState({ ...this.state, transalateto: e.code })
    }
    translatfrom(e) {
        if(e.name!=this.state.fromt[2]){
            this.setState({...this.state,fromt:this.state.fromt.push(e.name)})
        this.setState({...this.state,fromt:this.state.fromt.shift()})
        }
        this.setState({ ...this.state, transalatefrom: e.code })
    }

    async transalatee() {

        // const parms = new URLSearchParams()
        


    }
    async componentDidMount() {
        const res = await axios.get('https://libretranslate.com/languages', { headers: { 'accept': 'application/json' } }).then(res => res.data)
        this.setState(this.state.language = res)
        document.addEventListener("click", (e) => {
            if (e.target.id != "from" && document.getElementById("from").value == "") {
                this.setState({ isrun: false, form: "", border: "border-round", display: "" })
            }
        })
    }
    clickhandle = () => {
        this.setState({ isrun: true, form: "form-control2", border: "border", display: "d-none" })
    }

    render() {
        return (
            <div className="container-fluid row p-0 m-0">
                <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-center h-100">
                    <div className="container w-75">
                        <h1 className={`${this.state.display}`}>Get a Quick,Free</h1>
                        <h1 className={`${this.state.display}`}> Translation</h1>
                        <ul className={`listp p-0`}>
                            <li>From:</li>
                            <li>{this.state.fromt[0]}</li>
                            <li>{this.state.fromt[1]}</li>
                            <li>{this.state.fromt[2]}</li>
                            <li>
                                <div className="btn-group">
                                    <button type="button" className="btnl" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fi fi-ss-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu px-3">
                                        <li >
                                            <ul className="dinline mx-1">
                                                {this.state.language.map((e, i) => {
                                                    return i < 12 ? <li key={i} onClick={() => { this.translatfrom(e) }} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                                })}
                                            </ul>
                                            <ul className="dinline mx-1">
                                                {this.state.language.map((e, i) => {
                                                    return i >= 12 && i < 24 ? <li key={i} onClick={() => { this.translatfrom(e) }} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                                })}
                                            </ul>
                                            <ul className="dinline mx-1">
                                                {this.state.language.map((e, i) => {
                                                    return i >= 24 ? <li key={i} onClick={() => { this.translatfrom(e) }} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                        <div className="input-group mb-3">
                            <textarea id="from" ref={this.state.areatransalate} onClick={this.clickhandle} rows={1} className={`form-control ${this.state.border} ${this.state.form}`} placeholder="Entre your text here" />
                            <button className="btn trans" onClick={this.transalatee} type="button"><i className="fi fi-rs-angle-double-right"></i></button>
                        </div>
                        <ul className={`listp listto p-0 ${this.state.display}`}>
                            <li>To:</li>
                            <li>{this.state.ftl[0]}</li>
                            <li>{this.state.ftl[1]}</li>
                            <li>{this.state.ftl[2]}</li>
                            <li>
                                <div className="btn-group">
                                    <button type="button" className="btnl" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fi fi-ss-angle-down"></i>
                                    </button>
                                    <ul className="dropdown-menu px-3">
                                        <li >
                                            <ul className="dinline mx-1">
                                                {this.state.language.map((e, i) => {
                                                    return i < 12 ? <li key={i} onClick={() => { this.translatto(e) }} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                                })}
                                            </ul>
                                            <ul className="dinline mx-1">
                                                {this.state.language.map((e, i) => {
                                                    return i >= 12 && i <= 24 ? <li key={i} onClick={() => { this.translatto(e) }} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                                })}
                                            </ul>
                                            <ul className="dinline mx-1">
                                                {this.state.language.map((e, i) => {
                                                    return i >= 24 ? <li key={i} onClick={() => { this.translatto(e) }} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                                })}
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Containerto isrun={this.state.isrun} language={this.state.language} />
            </div>
        )
    }
}