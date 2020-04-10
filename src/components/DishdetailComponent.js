import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component {    

    // componentDidMount(){
    //     console.log('Dishdetail mounted');
    // }
   
    // componentDidUpdate(){
    //     console.log('Dishdetail updated');
    // }
    renderComments(comments){
        return comments.map(comment => (
            <ul key={comment.id} className="list-styled">
                <li className="mb-2">{comment.comment}</li>
                <li>
                    -- {comment.author}{" "} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </li>
            </ul>


        ));
    }
     
    render(){
        const {dish, showComments} = this.props;
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