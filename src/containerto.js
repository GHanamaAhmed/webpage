import React, { Component } from "react";
import axios, { Axios } from "axios"
export default class Containerto extends Component {
    constructor(props) {
        super(props)
        this.clickhandle = this.clickhandle.bind(this)
        this.translatto=this.translatto.bind(this)
    }
    async componentDidMount() {
       
    }
    componentDidUpdate(x) {
        if (x.isrun != this.props.isrun) {
            if (this.props.isrun) {
                this.setState(this.state.pro = ["", "d-none"])
            } else {
                this.setState(this.state.pro = ["d-none", ""])
            }
        }
        if (x.language != this.props.language) {
                this.setState(this.state.language =this.props.language)     
        }
    }
    clickhandle(x) {
        if (x) {
            this.state.pro = ["", "d-none"]
        } else {
            this.state.pro = ["d-none", ""]
        }
    }
    translatto(e){
        if (e.name!=this.state.ftl[2]) {
            this.setState({...this.state,fromt:this.state.ftl.push(e.name)})
        this.setState({...this.state,fromt:this.state.ftl.shift()})
        } 
        this.setState(this.state.transalateto=e.code)
    }
    state = {
        pro: ["d-none", ""],
        language: this.props.language,
        ftl:["English","French","Arabic"]
    }
    render() {
        return (
            <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-start align-items-md-center h-100">
                <img className={`${this.state.pro[1]}`} src={require("../src/undraw_File_synchronization_re_m5jd.png")}height={"60%"} width={"60%"} />
                <div className={`container w-75 ${this.state.pro[0]}`}>
                    <ul className="listp p-0">
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
                                                return i < 12 ? <li key={i} onClick={()=>{this.translatto(e)}} className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                            })}
                                        </ul>
                                        <ul className="dinline mx-1">
                                            {this.state.language.map((e, i) => {
                                                return i >= 12 && i < 24 ? <li key={i} onClick={()=>{this.translatto(e)}}  className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                            })}
                                        </ul>
                                        <ul className="dinline mx-1">
                                            {this.state.language.map((e, i) => {
                                                return i >= 24 ? <li key={i} onClick={()=>{this.translatto(e)}}  className="list-group-item list-group-item-action" value={e.code}>{e.name}</li> : null
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="input-group mb-3">
                        <textarea rows={1} className={`form-control borderround form-control2`} readOnly={true} />
                    </div>
                </div>
            </div>
        )
    }
}