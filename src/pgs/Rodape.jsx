import { Box } from "../components/Box"
import { BoxItems } from "../components/BoxItems"


export function Rodape(){      

        const rodape = {height:'auto', display:'flex',justifyContent:'space-around',alignitems:'center', padding:'1rem', borderTop:'.5px solid #ccc', flexWrap:'wrap'}
       
    return(
        <div style={rodape}>
            <Box title= 'Como podemos ajudar você?'
                 desc= 'Conheça mais sobre nossa empresa, políticas e tenha o melhor atendimento do mercado pet'/>
            <BoxItems /> 
            
        </div>
    )
}