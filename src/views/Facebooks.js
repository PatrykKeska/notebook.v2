/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Facebooks = ({ facebooks }) => (
  <GridTemplate pageType="facebooks">
    <>
      {facebooks.map(({ id, title, date, content }) => (
        <Card id={id}
          cardType="facebooks"
          title={title}
          date={date}
          content={content}
          key={id} />
      ))}
    </>
  </GridTemplate>
);

Facebooks.prototype = {
  facebooks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      key: PropTypes.number,
      id: PropTypes.number.isRequired,
    }),
  ),
};

Facebooks.defaultProops = {
  facebooks: [],
};

const mapStateToProps = ({ facebooks }) => ({ facebooks });

export default connect(mapStateToProps)(Facebooks);
