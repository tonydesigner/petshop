import { Link } from "react-router-dom"

export function Menu(){
    const menus = 
        [
            {title:'Cachorros', link:'/dog'},
            {title:'Gatos', link:'/cat'},
            {title:'Descontos', link:'/cbdesc'},
            {title:'Marcas', link:'/logos'},
            {title:'Serviços', link:'/serv'}
        ]
        const box = {display:'flex',justifyContent:'center',alignItems:'center', height:'65px',textAlign:'center', }
        const menu = {height:'auto', padding:'.5rem', display:'inline',  }
        const link = {textDecoration:'none', color:'var(--bg)'}
        
    return(
        <div >
            <ul style={box}>
            {
                menus.map(i=>
                    <Link style={link} to={i.link}>
                            <li style={menu}>{i.title}</li>  
                    </Link>
                )
            }
        </ul>

        </div>
    )
}