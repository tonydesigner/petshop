import '.././Global.css'
export function Services(props){
    const box = {width:'308px', height:'auto', textAlign:'center', padding:'1rem', boxShadow:'1px 2px 5px #ccc'}
    const img = {width: '100px', height:'100px', borderRadius:'50%'}
    const title = {margin:'1rem 0', color:'#4E2096'}
    const paragrafo = {height:'90px', display:'flex', alignItems:'center'}
    

   
    return(
        <div style={box}>
            <img style={img} src={props.img} alt={props.alt} />
            <h3 style={title}>{props.title} </h3>
            <p style={paragrafo}>{props.desc} </p>
            <button className='btn'>{props.btn}</button>
        </div>
    )
}