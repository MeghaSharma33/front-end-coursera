import React,{Component} from 'react';
import Menu from "../components/MenuComponents";
import { DISHES } from '../other/dishes';
import { COMMENTS } from '../other/comments';
import { PROMOTIONS } from '../other/promotions';
import { LEADERS } from '../other/leaders';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import DishDetail from './DishdetailComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
      
    };

  }
  // onDishSelect = (dishId) => {
  //   this.setState({ selectedDish: dishId});
  // }

  

render (){
  const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      )
  }
  const DishWithId = ({match}) => {
    return(
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
      comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    );
    
  }
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        <Route path ="menu/:dishId" comment={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Route path="/aboutus" component={() => <About leaders={this.state.leaders}/>} />
        <Redirect to="/home" /> 
      </Switch> 
      
      <Footer />
 
    </div>
)}
}

export default Main;
