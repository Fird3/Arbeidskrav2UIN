export default function Addform({Varer, setVarer, setListe}){

    const Leggtil = (e) =>{
        const {navn, verdi} = e.target
        setVarer((prev) => ({...prev,[navn]: verdi}))

    }

    const Knapp = (e)=>{
        e.preventDefault()
        const unikId = Math.floor(Math.random() * (999 - 0 + 1) + 1)
        setListe((prev) => ([...prev, {id:unikId, ...Varer}]))

    }
    
    return(
        <form className="form" onSubmit={Knapp}>
            <label htmlFor="formtitle">Vare</label>
            <input name="title" placeholder="Egg.." id="formtitle" type="text" required onChange={Leggtil}></input>
            <label>Antall</label>
            <input name="number" placeholder="2" type="number" min="1" onChange={Leggtil}></input>
            <button >Legg til vare</button>
        </form>
    )
  
}