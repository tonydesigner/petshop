
export function Anuncio(){
        
        const anuncio = {height:'auto', padding:'.7rem', color:'#fff', textAlign:'center', fontFamily:'Cooper Black',fontSize:'1.2rem'}
        const p = {display:'flex', justifyContent:'center'}
        const h4 = {fontFamily:'Cooper Black', }
    return(
        <div className='cor' style={anuncio}>  
            <p style={p}><span>Cupom</span>&nbsp;&nbsp; <h4 >GANHE15</h4> &nbsp;&nbsp; 15% OFF + frente grátis na primeira compra  </p>
        </div>
    )
}