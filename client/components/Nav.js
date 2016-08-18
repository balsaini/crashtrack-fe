/* eslint-disable max-len, jsx-a11y/href-no-hash */

import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">Crash Tracker</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav" />
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/"><i className="fa fa-home fa-fw" /> Home</Link></li>
          <li><Link to="/about"><i className="fa fa-hashtag fa-fw" /> About</Link></li>
          <li><Link to="/faq"><i className="fa fa-question-circle-o fa-fw" /> Faq</Link></li>
          <li><Link to="/person"><i className="fa fa-user fa-fw" /> Add a Person</Link></li>
          <li><Link to="/car"><i className="fa fa-car fa-fw" /> Add a Car</Link></li>
          <li><Link to="/claim"><i className="fa fa-exclamation fa-fw" /> Add a claim</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);
