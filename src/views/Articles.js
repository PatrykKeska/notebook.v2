/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const Articles = ({ articles }) => (
  <GridTemplate pageType="articles">
    <>
      {articles.map(({ id, title, date, content, link }) => (
        <Card
          id={id}
          cardType="articles"
          title={title}
          dataCreated={date}
          content={content}
          key={id}
          link={link}
        />
      ))}
    </>
  </GridTemplate>
);

Articles.prototype = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      key: PropTypes.number,
      id: PropTypes.number.isRequired,
      link: PropTypes.string,
    }),
  ),
};

Articles.defaultProops = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
