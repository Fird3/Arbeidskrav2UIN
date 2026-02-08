
export default function ShoppingItem({title, number}){
    return(
        <article>
            <input type="checkbox"></input> 
            <p>{title}</p>
            <p>{number}</p>
        </article>
    )
}