import React from 'react';
import './App.css';
import swal from 'sweetalert';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      labelsSelected: 0,
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
      if (!labels[index].checked) {
        swal('Please select', 'Please select the label to remove', 'error');
      } else {
        labels.splice(index, 1);
        this.setState({labels, labelsSelected: this.state.labelsSelected - 1})
      }
    }.bind(this);
  }

  globalRemove() {
    let labels = this.state.labels;
    let labelsSelected = this.state.labelsSelected;
    for (var i = labels.length - 1; i >= 0; i--) {
      if (labels[i].checked) {
        labels.splice(i, 1);
        labelsSelected = labelsSelected - 1;
      }
    }
    this.setState({labels, labelsSelected});
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
    let labelsSelected = this.state.checked ? 0 : labels.length;
    this.setState({checked: !this.state.checked, labels, labelsSelected});
  }

  toggleCheck(index) {
    return function(event) {
      let labels = this.state.labels;
      labels[index].checked = !labels[index].checked;
      let labelsSelected = labels[index].checked ? this.state.labelsSelected + 1 : this.state.labelsSelected - 1;
      this.setState({labels, labelsSelected});
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
              <span style={{marginTop: 5}} className= "section-heading">Section Heading</span>
              <button className="float-right button" onClick={this.globalRemove.bind(this)} >REMOVE</button>
              {this.state.labelsSelected ? <span className= "selected-labels float-right"> {this.state.labelsSelected} Labels Selected </span> : null}
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
                  <div style={{marginTop: 40, paddingTop: 30, height: 40}} className="h-margin">
                    <div className="label-text">Label {index + 2}</div>
                    <div className='max-width'>
                      <input className="check" type="checkbox" checked={label.checked} onChange={this.toggleCheck(index)}/>
                      <input className="label" value={label.value} onChange={this.changeLabel(index)} />
                      <div onClick={this.removeLabel(index)} className="remove">REMOVE</div>
                    </div>
                  </div>
                </div>
            ))
          }

          <hr/>

          <div onClick={this.addLabel} className="add-label-container">
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
