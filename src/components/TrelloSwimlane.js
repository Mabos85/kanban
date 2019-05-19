import React from 'react';
import './TrelloSwimlane.css';
import TrelloCard from './TrelloCard';
import AddButton from './AddButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloSwimlane = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className='trello-swimlane'>
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              name={card.name}
              age={card.age}
              email={card.email}
              img={card.img}
              adress={card.adress}
              id={card.id}
              index={index}
            />
          ))}
          <AddButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TrelloSwimlane;
