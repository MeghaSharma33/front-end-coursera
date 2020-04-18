import { DISHES } from '../other/dishes';
import { COMMENTS } from '../other/comments';
import { PROMOTIONS } from '../other/promotions';
import { LEADERS } from '../other/leaders';


export const initialState = {
    dishes: DISHES,
    comments:COMMENTS,
    leaders:LEADERS,
    promotions:PROMOTIONS

};

export const Reducer = (state = initialState, action) => {
  return state;
};