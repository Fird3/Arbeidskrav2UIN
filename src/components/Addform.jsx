export default function Addform(setVarer){

    const Leggtil = (e) =>{
        const {title, value} = e.target
        setVarer((prev) => ({...prev, [title]: value}))
    }

    
    

    
    return(
        <form className="form">
            <label>Vare</label>
            <input name="vare" placeholder="Egg.." type="text" required onChange={Leggtil}></input>
            <label>Antall</label>
            <input name="vare" placeholder="2" type="number" min="1" onChange={Leggtil}></input>
            <button >Legg til vare</button>
        </form>
    )
  
}