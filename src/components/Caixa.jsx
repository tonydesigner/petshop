export function Caixa(props){
        const li = {listStyle:'none', color:'#666', padding:'.3rem'}
       
    return(
        <div>
            <h1>{props.title} </h1>
            <ul>
                <li style={li} >{props.li}</li>
            </ul>
        </div>
    )
}