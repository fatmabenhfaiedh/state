import './App.css';
import React, { Component } from "react"

export default class App extends Component {
  state = {

    fullName: "Nina Simone",
    bio: "Her birth name was Eunice Kathleen Waymon, her music spanned a broad range of musical styles including classical, jazz, blues, folk, R&B, gospel, and pop.",
    imgSrc : "/1000.jpg",
    imgSrc2 : "/2000.jpg", 
    imgSrc3: "/3000.jpg", 
    imgSrc4: "/4000.jpg", 
    profession: "singer, songwriter, musician, arranger, and civil rights activist.",
    stateShow: false,
    count : 0
  };

  handleShow = () => {
    this.setState(e => ({stateShow : !e.stateShow}));
  };

  componentDidMount(){
    setInterval(() =>this.setState({count : this.state.count +1}), 1000);
  }

  render() 
  
  {
    if (this.state.stateShow){
      return (
        <center>
          <img src={this.state.imgSrc} alt="No" style={{width:310, height:450}} />
          <img src={this.state.imgSrc2} alt="No" style={{width:310, height:450}} />
          <img src={this.state.imgSrc3} alt="No" style={{width:310, height:450}} />
          <img src={this.state.imgSrc4} alt="No" style={{width:310, height:450}} />
          <h1 style={{color: "#ebb678"}}>Artist name is {this.state.fullName}</h1>
          <h3 style={{margin: "50px"}}>{this.state.bio}</h3>
          <h3 style={{margin: "50px"}}>She is a {this.state.profession}</h3>
          <iframe style={{width: "560px", height: "315px"}} src="https://www.youtube.com/embed/mxFuGblbUBM" title="Listen" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <div>
            <button onClick= {()=>this.handleShow()}>{this.state.stateShow ? "Hide" : "Show"} </button> 
          </div>

          <h1 style={{color: "#ebb678"}}>{this.state.count}</h1>
        </center>
      )
    }

    else {
      return(
      <div className="App" style={{margin: "200px"}}>
        <h1 style={{color: "#ebb678"}}>Click the show button to display the artist information</h1>
        <h1 style={{color: "#ebb678"}}>{this.state.count}</h1>
        <div>
        <button onClick={()=>this.handleShow()} > {this.state.stateShow ? "Hide" : "Show"}{" "}</button> 
        </div>
      </div>
      )  
    }
    
  }
}


