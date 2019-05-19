import { CONSTANTS } from '../actions';

let listID = 5;
let cardID = 3;

const initialState = [
  {
    title: 'Kontakt',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        name: 'John Doe',
        age: 30,
        email: 'john.doe@gmail.com',
        adress: 'Sockenvägen 24',
        img: '/images/person.png'
      },
      {
        id: `card-${1}`,
        name: 'Jane Doe',
        age: 32,
        email: 'jane.doe@gmail.com',
        adress: 'Eknäsvägen 14',
        img: '/images/person.png'
      }
    ]
  },
  {
    title: 'Dialog',
    id: `list-${1}`,
    cards: []
  },
  {
    title: 'Intervju',
    id: `list-${2}`,
    cards: [
      {
        id: `card-${2}`,
        name: 'Mattias Bosved',
        age: 33,
        email: 'mattias.bosved@gmail.com',
        adress: 'Paviljongvägen 24',
        img: '/images/person.png'
      }
    ]
  },
  {
    title: 'Erbjudande',
    id: `list-${3}`,
    cards: []
  },
  {
    title: 'Avslutad',
    id: `list-${4}`,
    cards: []
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        name: action.payload.name,
        age: action.payload.age,
        email: action.payload.email,
        adress: action.payload.adress,
        img: '/images/person.png',
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;

      const newState = [...state];
      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      // between lists
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where it happened
        const listStart = state.find(list => droppableIdStart === list.id);
        //pullout the card
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);
        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;
