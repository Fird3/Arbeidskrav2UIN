export default function Addform(){
    
    return(
        <form >
            <label>Vare</label>
            <input name="vare" placeholder="Egg.." type="text" required></input>
            <label>Antall</label>
            <input name="vare" placeholder="2" type="number" min="1"></input>
            <button>Legg til vare</button>
        </form>
    )
  
}