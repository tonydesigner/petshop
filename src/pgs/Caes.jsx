import { ProdCaes } from "../components/ProdCaes"


export function Caes(){
        const caes = {width: '100%', height: '100%', padding:'1rem'}
        const topo = {height:'201px', textAlign:'center',backgroundColor:'#F66B9E'}
    return(
        <>
         <div style={topo}>
                <img src="https://www.petlove.com.br/static/uploads/images/department/cachorro.jpg" alt="imagem cao" />
        </div>
        <ProdCaes />
        </>

       
    )
}