import React from 'react'

export default function Product(props) {

    var [heart, setHeart] = React.useState(props.isFav);

    console.log("props: ", props.fDisp)

    function fiveSentence(des, n){
        var string = des;
        const firstFive = string.split(' ').slice(0,n).join(' ');
        return firstFive;
    }
    
    function toggleFav(){
        setHeart(function(){

            if (heart===true){
                return !heart;
            }
            else{
                return !heart;
            }
        })
    }
   
    // var string=props.description;
    // const first8 = string.split(' ').slice(0, 8).join(' ');
    // console.log(first8); 

    return (
        
        <div className={props.fDisp ? 'col-md-12' : 'col-md-3'}>

        <div className={props.fDisp ? 'd-flex align-items-center' : 'd'}>
            <img src={props.image} className={props.fDisp ? 'w-25' : 'w-100'} />
            
            <div className="card-body">
            <div className="d-flex  justify-content-between">
                <h5>{fiveSentence(props.title, 3)}</h5><i onClick={toggleFav} className={heart ? "fa fa-heart" : "fa fa-heart-circle-plus"}></i>
                </div>
           
                {props.fDisp && <p>{props.description}</p>}

                <hr />
                <div className="d-flex gap-2 ">
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-info">View Item</button>
                </div>
            </div>
          </div>
        </div>
    )
}
