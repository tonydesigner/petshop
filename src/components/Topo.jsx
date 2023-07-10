import { Link } from "react-router-dom"

export function Topo(props){
    const topo = {height: '100px', display:'flex', alignItems:'center', padding:'1rem', gap:'.5rem', borderBottom:'1px solid #ccc', textAlign:'center', backgroundColor:'#fff'}
    const logo = {width:'225px',height:'auto', }
    const img = {height:'80px'}
    const cep = {width:'121px',textAlign:'center'}
    const search = {border:'1px solid #ccc',borderRadius:'.5rem', width:'275px',outline:'0', height:'40px', padding:'.18rem', textAlign:'center', display:'flex',alignItems:'center', justifyContent:'center' }
    const campo = {background:'transparent', width:'222px', height:'38px', padding:'.5rem', border:'0'}
    const compras = {width: '208px', gap:'.5rem', padding:'1rem', textAlign:'left', display:'flex', alignItems:'center', justifyContent:'center'}
    const pedidos = {width:'183px',display:'flex',justifyContent:'center',alignItems:'center', gap:'1rem'}
    const entra= {width:'368px' ,display:'flex',justifyContent:'center',alignItems:'center', gap:'1rem'}
    const btn = {width:'150px', height:'35px', background:'transparent', border:'0', fontFamily:'Montserrat', fontSize:'13pt'}
    
    return(
        <div style={topo}>
            <div style={logo} >
                <Link to='/'>
                    <img style={img} src={props.img} alt="" />
                </Link>
               
            </div>
            
            <span style={cep} className="link">{props.cep} </span>
            <div style={search}>
                <input style={campo} type={props.type} placeholder={props.nome} />
                <box-icon  color='#ccc' name={props.search}></box-icon>
            </div>
            <span style={compras} className="link">
                <box-icon size='md' color='#ccc' name={props.compras}></box-icon>
                {props.name}
            </span>
                
            <span style={pedidos} className="link">
                <box-icon  color='#ccc' size='md' name={props.gift}></box-icon>
                {props.pedidos}
                <box-icon size='md' color='#ccc' name={props.cart}></box-icon>
            </span>
            
            <span style={entra} >
              
                <button style={btn} className="link">{props.logIn}</button>
                <box-icon size='md' color='#ccc' name={props.arrow}></box-icon>
            </span>
        </div>
    )
}