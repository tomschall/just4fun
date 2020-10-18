import React, { Component } from 'react';
import { Link } from '@reach/router';

class Welcome extends Component {
  render () {
    const  { userName, logOutUser } = this.props;
    
    return (
      <div className="text-center mt-4">
      <span className="text-secondary font-weight-bold pl-1">
        Welcome {userName}
      </span>
      ,
      <Link href="/login" className="font-weight-bold text-primary pl-1"
      onClick={e => logOutUser(e)}>
        log out
      </Link>
      {userName && (
					<div>
						<span className="text-secondary font-weight-bold pl-1">Willkommen {userName},</span>
						<a href="/" className="font-weight-bold text-primary pl-1">
							Logout { userName }
						</a>
					</div>
				)}
      </div>
    );
  }
}

export default Welcome;