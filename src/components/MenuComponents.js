import React,{Component} from 'react';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../other/dishes';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
                        dishes : DISHES,
						selectedDish : null
	
				}
    }
    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish});
    }

    
    renderDish = (dish) => {
        if(dish != null) {
					return(
            <DishDetail dish={dish} onDishSelect={this.onDishSelect} showComments={true}/>
        	)
				} else {
					return null;
				}
        
        
    }
    onClick =(id) => {
        const dish = this.state.dishes.filter((item) => item.id === id)[0]; 
        this.onDishSelect(dish)
    }


    render(){
			const menu = this.props.dishes.map((dish) => {       
            return(
                <div className = "container" >
                    <DishDetail dish={dish} onClick={this.onClick}/>
                </div>
            );
			});           
      return(
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home
                    </Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                    </div>
                </div>
				<div className="row">{menu}</div>
				<div className="row">{this.renderDish(this.state.selectedDish)}</div>
            </div>
            )     
    }

    

    
};
export default Menu;
