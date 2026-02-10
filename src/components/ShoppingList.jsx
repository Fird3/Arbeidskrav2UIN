import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({handlelisteVare, setListe}){
     
  return(
    <section>
        <ol>
          {handlelisteVare.map((vare) => 
          <ShoppingItem key={vare.id} title={vare.title} number={vare.number} id={vare.id} setListe={setListe} 
          /> )}
        </ol>
        
    </section>
  )
  
}