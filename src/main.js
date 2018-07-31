import React from 'react';
import './App.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      labels: [ {checked: false, value: ''} ]
    }

    this.toggleCheck = this.toggleCheck.bind(this);
    this.addLabel = this.addLabel.bind(this);
  }

  toggleCheck() {
    this.setState({checked: !this.state.checked})
  }

  addLabel() {
    let labels = this.state.labels;
    let label = {checked: false, value: ''}
    labels.push(label);
    this.setState({labels})
  }

  removeLabel(index) {
    return function() {
      let labels = this.state.labels;
      console.log(index, labels)
      labels.splice(index, 1);
      console.log(labels)
      this.setState({labels})
    }.bind(this);
  }

  globalRemove() {
    let labels = this.state.labels;
    for (var i = labels.length - 1; i >= 0; i--) {
      if (labels[i].checked) {
        labels.splice(i, 1);
      }
    }
    this.setState({labels});
  }

  changeLabel(index) {
    return function(event) {
      let labels = this.state.labels;
      console.log(index, labels)
      labels[index].value = event.target.value;
      this.setState({labels});
    }.bind(this);
  }

  toggleGlobalCheck() {
    let labels = this.state.labels;
    for (var i = 0; i < labels.length; i++) {
      labels[i].checked = !this.state.checked;
    }
    this.setState({checked: !this.state.checked, labels});
  }

  toggleCheck(index) {
    return function(event) {
      let labels = this.state.labels;
      labels[index].checked = !labels[index].checked;
      this.setState({labels});
    }.bind(this);
  }

  render() {
    let labels = this.state.labels;

    return (
      <div>
        <div className="main">
          <div onClick={this.toggleCheck} >
            <div style={{paddingTop: 30, height: 40}} className="h-margin">
             <input className="check" type="checkbox" checked={this.state.checked} onChange={this.toggleGlobalCheck.bind(this)}/>
              <span style={{marginTop: 5}} className= "section-heading"> Section Heading </span>
              <button className="float-right button" onClick={this.globalRemove.bind(this)} >REMOVE</button>
              <span className= "selected-labels float-right"> 1 Labels Selected </span>
            </div>
          </div>

          <div >
            <div style={{marginTop: 20, paddingTop: 30, height: 40}} className="h-margin">
              <div className="label-text">Label</div>
              <input className="check" type="checkbox" checked={false} disabled={true} />
              <input className="label" />
            </div>
          </div>

          {
            labels.map((label, index) => (
                <div key={index} >
                  <div style={{marginTop: 20, paddingTop: 30, height: 40}} className="h-margin">
                    <div className="label-text">Label {index + 2}</div>
                    <div>
                      <input className="check" type="checkbox" checked={label.checked} onChange={this.toggleCheck(index)}/>
                      <input className="label" value={label.value} onChange={this.changeLabel(index)} />
                      <div onClick={this.removeLabel(index)} className="remove">REMOVE</div>
                    </div>
                  </div>
                </div>
            ))
          }

          <hr/>

          <div onClick={this.addLabel} style={{width: 600, marginLeft: 80, marginTop: 20}}>
            <p className="add-label"> + ADD LABEL</p>
          </div>

          <button className="submit">SUBMIT</button>

        </div>

      </div>
    )
  }
}
export default Main;

/*
<input style={{marginTop: 15}} width={30} height={30} type="checkbox" checked={this.state.checked} />
*/
