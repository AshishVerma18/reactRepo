import React ,{Component} from  'react';

class CardComp extends Component{
    render(){
        return(
            <>
           
                        <div className="card">
                            
                            <img className="card-img" src={this.props.src} alt="img"/>
                           
                            <div className="card-body">
                                <h3 className="card-body">{this.props.name}</h3>
                                <h5 className="card-body">{this.props.genere}</h5>
                            </div>
                            <div className="card-footer">
                                <button className="btn ">Book Now</button>
                            </div>
                        </div>
                    
            
            </>
        )
    }
}
export default CardComp;