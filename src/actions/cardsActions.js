import { CONSTANTS } from '../actions';
export const addCard = (listID, name, age, email, adress, img) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {
      listID,
      name,
      age,
      email,
      adress,
      img
    }
  };
};

/// remove card
export function removeCard(cardID, listID) {
  return {
    type: CONSTANTS.REMOVE_CARD,
    cardID,
    listID
  };
}
