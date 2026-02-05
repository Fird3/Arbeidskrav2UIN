export default function ShoppingItem({title, number}){
    return(
        <article>
            <h3>{title}</h3>
            <p>{number}</p>
            <input type="checkbox"></input> 
        </article>
    )
}