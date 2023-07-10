import { Link } from "react-router-dom"
import { Caixa } from "./Caixa"
export function BoxItems(){
    const novidades = 
        [
            {nome:'Compras recorrentes', link:'/compras'},
            {nome:'Plano de Saúde', link:'/compras'},
            {nome:'Indique e Ganhe', link:'/compras'},
            {nome:'Dicas', link:'/compras'},
            {nome:'Black Pet', link:'/compras'},
            {nome:'Serviços', link:'/compras'},
            {nome:'Raças de Cachorro', link:'/compras'},
            {nome:'Raçasd de Gatos', link:'/compras'},
        ]
    const MarcasExclusivas = 
        [
            {nome:'Nutrilus Pro', link:'/prod'},
            {nome:'Nitrilus Prime', link:'/prod'},
            {nome:'True', link:'/prod'},
            {nome:'Surpresa', link:'/prod'},
            {nome:'Meau Pet', link:'/prod'},
            {nome:'Future Pet', link:'/prod'},
            {nome:'Snoose', link:'/prod'},
            {nome:'Pidan', link:'/prod'},

        ]
        const categorias = 
        [
            {nome:'Ração para Cachorro', link:''},
            {nome:'Ração para Gato', link:''},
            {nome:'Tapete Higiênico para Cachorro', link:''},
            {nome:'Antipulgas e Carrapatos', link:''},
            {nome:'Osso para Cachorro', link:''},
            {nome:'Casinha de Cachorro', link:''},
            {nome:'Coleira para Gato', link:''},
            {nome:'Alimentação Natural para Gato', link:''},
            {nome:'Comida Natural para Cachorro', link:''},
            {nome:'Vermífugo para Gatos', link:''},
            {nome:'Caminha para Cachorro', link:''},
            {nome:'Arranhador para Gatos', link:''},
            
        ]
        const box={width:'280px', height:'auto', color:'var(--bg)',}
        const link = {textDecoration:'none'}
        
    return(
        <>
         <div style={box}>
            <h3>Novidades e Promoções</h3>
            {
                novidades.map(i=>
                    <Link style={link} to={i.link}>
                         <Caixa li={i.nome} />
                    </Link>
                       
                    )
                    
            }
           
        </div>
                
        <div style={box}>
            <h3>Marcas Exclusivas</h3>    
                
            {
                MarcasExclusivas.map(i=>
                    <Link style={link} to={i.link}>
                         <Caixa li={i.nome} />
                    </Link>
                       
                    )
                    
            }
        
        </div>   
        <div style={box}> 
            <h3>Categoria</h3>
            {
                categorias.map(i=>
                    <Link style={link} to={i.link}>
                        <Caixa li={i.nome}/>
                    </Link>
                    
                    
                    )
            }
        </div>    
        </>

       
           
        
                       
    )
}