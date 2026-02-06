
export default function ShoppingItem({title, number}){
    return(
        <article>
            <input type="checkbox"></input> 
            <h3>{title}</h3>
            <p>{number}</p>
            <input type="number" min="1"></input>
            
        </article>
    )
}