import '../style/style.css'

export default function ShoppingItem({title, number, checked}){
  
    console.log(checked)
   
    return(
        <li className="listepunkt">   
            <input type="checkbox" name="check" id="" defaultChecked={checked}  />
            <p>{title}</p>
            <input name="vare" type="number" min="1" defaultValue={number}  className='antallboks'></input>
        </li>
    )
}

// Fikk hjelp i studass time av Thor til å få defaultChecked={checked til å fungere
//  ettersom jeg tenkte litt for avansert. 
// Hadde glømt å putte checked={vare.checked} i shoppingList under}

// Fant ut at jeg måtte bruke defaultValue og defaultChecked istedenfor bare Value og Checked med hjelp av:
// https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable

