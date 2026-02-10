export default function Addform({varer, setVarer, setListe}){

    const Leggtil = (e) =>{
        const {name, value} = e.target
        console.log("name ", name, " value ", value)
        setVarer((prev) => ({...prev, [name]: value}))
        console.log(varer, "varer")
    }

    
    

    const Knapp = (e)=>{
        e.preventDefault()
        const unikId = Math.floor(Math.random() * (999 - 0 + 1) + 1)
        setListe((prev) => ([...prev, {id:unikId, ...varer}]))

    }

  
    
    return(
        <form className="form" onSubmit={Knapp}>
            <label htmlFor="formtitle">Vare</label>
            <input name="title" placeholder="Egg.." id="formtitle" type="text" required onChange={Leggtil}></input>
            <label>Antall</label>
            <input name="number" placeholder="2" type="number" min="1" required onChange={Leggtil}></input>
            <button >Legg til vare</button>
        </form>
    )
  
}