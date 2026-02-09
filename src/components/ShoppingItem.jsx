import '../style/style.css'

export default function ShoppingItem({title, number}){
    return(
        <li className="listepunkt">
            <input type="checkbox"></input> 
            <p>{title}</p>
            <input name="vare" type="number" min="1" value={number} className='antallboks'></input>
        </li>
    )
}


// Få valuen til å kunne gå opp eller ned når man trykker på knappene