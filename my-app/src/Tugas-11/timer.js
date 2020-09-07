import React, {Component} from 'react'

class Timer extends Component{
  constructor(){
    super()
    var today = new Date()
    this.curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    this.state = {
      time: 101,
      jam : this.curTime,
      show: true
    }
  }
  componentDidUpdate() {
    if(this.state.show) {
      if(this.state.time < 0) {
        this.setState({
          show: false
        })
      }
    }
  }
  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
      );
  }

  tick() {
    this.setState({
      time: this.state.time - 1 ,
      jam: new Date().toLocaleTimeString()
    });
  }


  render(){
    return(
      <>

      {this.state.show && (
        <h1 style={{visible: "false"}}>
        sekarang jam : {this.state.jam}
        &nbsp;
        hitung mundur : {this.state.time}
        
        </h1>
        )}
        </>
        )
    }
  }

  export default Timer