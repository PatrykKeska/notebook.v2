import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const dataFacebook = [
  {
    id: 1,
    title: 'Patryk Keska',
    date: '3 days',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  },
  {
    id: 2,
    title: 'Soemone 1',
    date: '3 days',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  },
  {
    id: 3,
    title: 'Someone 2',
    date: '3 days',
    content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  },
];

const Facebooks = () => (
  <GridTemplate pageType="facebooks">
    <>
      {dataFacebook.map(item => (
        <Card
          id={item.id}
          cardType="facebooks"
          title={item.title}
          dataCreated={item.date}
          content={item.content}
          key={item.id}
        />
      ))}
    </>
  </GridTemplate>
);
export default Facebooks;
