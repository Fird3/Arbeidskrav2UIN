import '../style/style.css'
import Checkbox from './Checkbox'

export default function ShoppingItem({title, number, isChecked}){
   
    
    return(
        <li className="listepunkt">
            < Checkbox  isChecked={isChecked} /> 
            <p>{title}</p>
            <input name="vare" type="number" min="1" defaultValue={number} className='antallboks'></input>
        </li>
    )
}


// Få valuen til å kunne gå opp eller ned når man trykker på knappene