import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import stylef from 'styled-components'
// import {Link} from 'react-router-dom'
import DetailsTemplate from '../templates/DetailsTemplate';
import { routs } from '../routs/index';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routs.note:
        this.setState({
          pageType: 'notes',
        });
        break;

      case routs.facebook:
        this.setState({
          pageType: 'facebooks',
        });

        break;

      case routs.article:
        this.setState({
          pageType: 'articles',
        });
        break;

      default:
        break;
    }
  }

  render() {
    const { match } = this.props;
    const { pageType } = this.state;

    return (
      <>
        <DetailsTemplate pageType={pageType} />
        <p> {`is note : ${match.path === routs.note}`}</p>
        <p> {`is facebook : ${match.path === routs.facebook}`}</p>
        <p> {`is article : ${match.path === routs.article}`}</p>
      </>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
