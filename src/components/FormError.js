import React, {Component} from 'react';

class FormError extends Component {
  render(){
    const {theMessage} = this.props;

    return(
      <div className="col-12 alert alert-danger px-2">
      {theMessage}
      </div>
    )
  }
}

export default FormError;