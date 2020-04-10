import React,{Component} from 'react';
import Menu from "../components/MenuComponents";
import { DISHES } from '../other/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish : DISHES[0]
    };

  }
  onDishSelect = (dishId) => {
    this.setState({ selectedDish: dishId});
  }

  

render (){
  return (
    <div>
      <Header />
      <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.props.onDishSelect(dishId)} />
      <Footer />
 
    </div>
)}
}

export default Main;
