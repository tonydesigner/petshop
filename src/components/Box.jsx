
export function Box(props){
        const box = {width: '250px',height:'180px',  padding:'.7rem', }
        const h3 = {color:'var(--bg)', textAlign:'left'}
        
    return(
        <div style={box}>
            <h3 style={h3}>{props.title} </h3>
            <p>{props.desc} </p>
        </div>
        
    )
}