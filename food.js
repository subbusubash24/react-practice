import "./food.css"
function Food(props){
    return(
        <div className="foodBox">
            <div className="foodImage">
                <img src={props.image}/>
                
            </div>
            <p className="foodName">{props.name}</p>
            <p className="foodPrice">{props.price}</p>

        </div>
    )
}
export default Food;