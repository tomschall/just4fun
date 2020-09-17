import React from 'react';

function Footer() {
	return (
		<footer className="container d-flex bg-text-color py-2">
      <p>
        &copy; 2020
        <a href="https://www.habescha.ch"> Web & Interpret </a>. 
        Alle Rechte vorbehalten
      </p>
      <div className="ml-auto">
        <a className="d-block" href="#">Nutzungsbedingungen</a>
        <a className="d-block" href="#">Datenschutz</a>
      </div>
      {/*<!-- col-md-6 -->*/}
      
</footer>
	);
}
export default Footer;

