import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components'
// import {Link} from 'react-router-dom'
import DetailsTemplate from '../templates/DetailsTemplate';
import { routs } from '../routs/index';

class DetailsPage extends Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
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
    const { pageType } = this.state;

    return (
      <>
        <DetailsTemplate pageType={pageType} />
      </>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
