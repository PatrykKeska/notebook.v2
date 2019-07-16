import React from 'react';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/molecules/Card/Card';

const dataNotes = [
  {
    title: 'Learn React',
    date: '3 days',
    content: 'keep going and learn react ,',
    id: 1,
  },
  {
    title: 'Learn JS',
    date: '2 days',
    content: 'keep going and learn js ,',
    id: 2,
  },
  {
    title: 'Learn Css',
    date: '10 days',
    content: 'keep going and learn css ,',
    id: 3,
  },
  {
    title: 'Learn node.js',
    date: '1 days',
    content: 'keep going and learn node.js ,',
    id: 4,
  },
];

const Notes = () => (
  <GridTemplate pageType="notes">
    <>
      {dataNotes.map(item => (
        <Card
          cardType="notes"
          title={item.title}
          dataCreated={item.date}
          content={item.content}
          key={item.id}
          id={item.id}
        />
      ))}
    </>
  </GridTemplate>
);

export default Notes;
