import React from 'react';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './AddButton.css';
class AddButton extends React.Component {
  state = {
    formOpen: false,
    name: '',
    age: '',
    email: '',
    adress: '',
    img: ''
  };
  openForm = () => {
    this.setState({
      formOpen: true
    });
  };
  closeForm = e => {
    this.setState({
      formOpen: false
    });
  };

  hanldeInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleAddCard = e => {
    e.preventDefault();

    const { dispatch, listID } = this.props;
    const { name, age, email, adress, img } = this.state;
    if (name) {
      this.setState({
        formOpen: false,
        name: '',
        age: '',
        email: '',
        adress: '',
        img: ''
      });
      dispatch(addCard(listID, name, age, email, adress, img));
    } else {
      return null;
    }
  };

  renderAddButton = () => {
    return (
      <div onClick={this.openForm}>
        <span className='add-button'>&#x2b; Lägg till kandidat </span>
      </div>
    );
  };
  renderForm = () => {
    return (
      <div className='card'>
        <form
          className='form-wrapper'
          autoComplete='off'
          onSubmit={this.handleAddCard}>
          <input
            name='name'
            type='text'
            placeholder='Namn'
            value={this.state.name}
            onChange={this.hanldeInputChange}
            autoComplete='off'
          />
          <input
            name='age'
            type='text'
            placeholder='Ålder'
            value={this.state.age}
            onChange={this.hanldeInputChange}
            autoComplete='off'
          />
          <input
            name='email'
            type='text'
            placeholder='E-post'
            value={this.state.email}
            onChange={this.hanldeInputChange}
            autoComplete='off'
          />
          <input
            name='adress'
            type='text'
            placeholder='Adress'
            value={this.state.adress}
            onChange={this.hanldeInputChange}
            autoComplete='off'
          />
          {/*  
         <input
            name='img'
            type='text'
            placeholder='Bild'
            value={this.state.img}
            onChange={this.hanldeInputChange}
            autoComplete='off'
          />
          */}
          <button
            type='submit'
            className='btn btn-success'
            onMouseDown={this.handleAddCard}>
            Lägg till kandidat
          </button>
          <button className='btn btn-dark' onClick={this.closeForm}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </form>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(AddButton);
