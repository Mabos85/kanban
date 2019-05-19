import React from 'react';
//import Modal from './Modal'; TODO: ADD POP UP / MODAL
import './TrelloCard.css';
import { Draggable } from 'react-beautiful-dnd';

/*const TrelloCard = ({ name, age, adress, img, email, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          className='trello-card'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <span className='close-button'>&#10008;</span>
          <img className='profile-image' src={img} alt='person' />
          <p className='name'>
            {name} <span className='age'>{age}</span>
          </p>
          <p className='email'>{email}</p>
          <p className='adress'>{adress}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
*/

class TrelloCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }
  handleClose = () => {
    console.log(this.props.id);
    this.setState({ addClass: !this.state.addClass });
  };
  render() {
    let boxClass = ['trello-card'];
    if (this.state.addClass) {
      boxClass.push('display-none');
    }

    return (
      <Draggable draggableId={String(this.props.id)} index={this.props.index}>
        {provided => (
          <div
            className={boxClass.join(' ')}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <span className='close-button' onClick={this.handleClose}>
              &#10008;
            </span>
            <img className='profile-image' src={this.props.img} alt='person' />
            <p className='name'>
              {this.props.name} <span className='age'>{this.props.age}</span>
            </p>
            <p className='email'>{this.props.email}</p>
            <p className='adress'>{this.props.adress}</p>
          </div>
        )}
      </Draggable>
    );
  }
}
export default TrelloCard;
