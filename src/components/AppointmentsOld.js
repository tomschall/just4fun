import React, { Component } from 'react';

class Appointments extends Component {
  constructor(props){
		super(props);
		this.state = {
			appointmentName: null,
		}
	
		this.handelRegisterChange = this.handelRegisterChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handelRegisterChange(e){
		const itemName = e.target.name;
		const itemValue = e.target.value;

		this.setState({[itemName]: itemValue});		
	}
	
	handleSubmit(e) {
    e.preventDefault();
    this.props.addAppointment(this.state.appointmentName);
    this.setState({meetingName: ''});
	}
  render() {
    return (
      <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="font-weight-light">Add a Meeting</h1>
          <div className="card bg-light">
            <div className="card-body text-center">
              <form
                className="formgroup"
                onSubmit={this.handleSubmit}
              >
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    name="meetingName"
                    placeholder="Meeting name"
                    aria-describedby="buttonAdd"
                    value={this.state.appointmentName}
                    onChange={this.handelRegisterChange}
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-sm btn-info"
                      id="buttonAdd"
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Appointments;