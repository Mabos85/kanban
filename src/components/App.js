import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../actions';
import Nav from './Nav';
import backgroundImage from '../img/bg-balloon-min.jpg';
import 'normalize.css';
import './App.css';

import TrelloSwimlane from './TrelloSwimlane';

class App extends React.Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    const imageUrl = backgroundImage;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className='App' style={{ backgroundImage: `url(${imageUrl})` }}>
          <Nav />
          <h2>Rekrytering 2019</h2>
          <div className='wrapper'>
            {lists.map(list => (
              <TrelloSwimlane
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
          </div>
        </div>
      </DragDropContext>
    );
  }
}
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
