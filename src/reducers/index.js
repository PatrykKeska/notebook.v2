const initialState = {
  notes: [
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
  ],
  facebooks: [
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
  ],

  articles: [
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
  ],
};
const rootReducer = (state = initialState) => {
  return state;
};

export default rootReducer;
