import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const dataArticles = [
  {
    id: 1,
    title: 'Article 1',
    date: '3 days',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    link: 'https://www.google.com/',
  },
  {
    id: 2,
    title: 'Article 2Article 2Article 2Article',
    date: '3 days',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    link: 'https://www.google.com/',
  },
  {
    id: 3,
    title: 'Article 3',
    date: '3 days',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    link: 'https://www.google.com/',
  },
];

const Articles = () => (
  <GridTemplate pageType="articles">
    <>
      {dataArticles.map(item => (
        <Card
          id={item.id}
          cardType="articles"
          title={item.title}
          dataCreated={item.date}
          content={item.content}
          key={item.id}
          link={item.link}
        />
      ))}
    </>
  </GridTemplate>
);
export default Articles;
