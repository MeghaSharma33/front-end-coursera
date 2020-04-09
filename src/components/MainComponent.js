import React,{Component} from 'react';
import Menu from "../components/MenuComponents";
import { DISHES } from '../other/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

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
  console.log(this.state);
  return (
    <div>
      <Navbar dark color="Primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
        onClick={(dishId) => this.props.onDishSelect(dishId)} />
 
    </div>
)}
}

export default Main;
