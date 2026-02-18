import '../style/style.css'
import Checkbox from './Checkbox'
import handlelisteVare from '../App'




export default function ShoppingItem({title, number}){
    const renderCheckbox =() =>     {
        return handlelisteVare.map()
    }
   
   
    
    return(
        <li className="listepunkt">
            < Checkbox /> 
            
            {/* <input type='checkbox' defaultValue={checked}></input> */}
            <p>{title}</p>
            <input name="vare" type="number" min="1" defaultValue={number}  className='antallboks'></input>
        </li>
    )
}


// Få valuen til å kunne gå opp eller ned når man trykker på knappene