import React,{Component} from 'react';
import Dishdetail from './DishdetailComponent';


class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
						selectedDish : null
	
				}
    }
    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish});
    }

    renderDish = (dish) => {
			console.log('THE DUS', dish)
        if(dish != null) {
					return(
            <Dishdetail dish={dish} onDishSelect={this.onDishSelect} showComments={true}/>
        	)
				} else {
					return null;
				}
        
        
    }


    render(){
			const menu = this.props.dishes.map((dish) => {       
            return(
                <div className = "container" >
										<Dishdetail dish={dish} onDishSelect={this.onDishSelect}/>        	
                </div>
            );
			});           
      return(<div className="container">
				<div className="row">{menu}</div>
				<div className="row">{this.renderDish(this.state.selectedDish)}</div>
			</div>)     
    }

    

    
};
export default Menu;





