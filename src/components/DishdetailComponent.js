import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component {    
    constructor(props){
        super(props)
    }
    renderComments(comments){
        return comments.map(comment => (
            <ul key={comment.id} className="list-styled">
                <li className="mb-2">{comment.comment}</li>
                <li>
                    -- {comment.author}{" "}
                </li>
            </ul>


        ));
    }
     
    render(){
        const {dish, showComments} = this.props;
            console.log('Hi',this.props);
            return (
                <div className = "row">
                    <div className = "col-3 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                          {showComments ?  <CardText>{dish.description}</CardText>: null}
                        </CardBody>
                    </Card>
                    </div>
                    {showComments ? <div className="col-3 col-md-5 m-1">
                        <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                    </div>: null}
                </div>
    
            );
    }

}


 export default DishDetail;