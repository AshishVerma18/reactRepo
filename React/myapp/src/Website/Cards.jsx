import React ,{Component} from  'react';
import sData from './CardArr';
import CardComp from './CardComp';
class Cards extends Component{
    newData=(val)=>{
        return(
        <CardComp 
         key={val.id}
         src={val.src}
         name={val.name}
         genere={val.genere}/>);

    }
    render(){
        return(
            <>
            
                         {sData.map(this.newData)};
               
            </>
        )
    }
}
export default Cards;
