import { connect } from "react-redux"
import  Card  from "../CARD/Card.jsx"
import s from "../FAVORITE/Favorite.module.css"
import { orderCards, filterCards } from "../../redux/action/action.js"
import { useDispatch } from "react-redux"

export function Favorites ({ myFavorites }){

    const dispatch = useDispatch()

    const handleDispatch = (e) => {
        const { name, value } = e.target

        if(name === "order"){
            return dispatch(orderCards(value))
        }
        if(name==="filter"){
            return dispatch(filterCards(value))
        }
     }

    return(
        <div className={s.contenedor}>
           <div>
                <select name="order" onClick={handleDispatch}>
                    <option value="Ascedente">Ascendente</option>
                    <option value="Descendente">Descendete</option>
                </select>

                <select name="filter" onClick={handleDispatch}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>


            {myFavorites?.map(fav => (
                <Card
                name={fav.name}
                id={fav.id}
                key={fav.id}
                gender={fav.gender}
                image={fav.image}
                
                />
            ))}
            
        </div>
    )
}


export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)