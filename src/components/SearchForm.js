import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getForecast(this.state.location);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    
    return (
      <div className="search-form">
        <form id="user-location" onSubmit={this.handleSubmit}>
          <input type="text" name="location" id="location" value={this.state.location}
            onChange={this.handleChange}/>
          <button type="submit" className="btn">Search</button>
        </form>
      </div>
    );
  }
}


// Proptypes
SearchForm.propTypes = {
  getForecast: PropTypes.func.isRequired
}

export default SearchForm;


