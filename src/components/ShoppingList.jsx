import ShoppingItem from "./ShoppingItem";



export default function ShoppingList({HandlelisteVare, setListe}){
     
  return(
    <section>
        <ol>
          {HandlelisteVare.map((vare) => 
          <ShoppingItem key={vare.id} title={vare.title} number={vare.number} setListe={setListe} 
          /> )}
        </ol>
        
    </section>
  )
  
}