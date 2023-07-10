import { ProdCat } from "../components/ProdCat";

export function Gatos(){
    const topo = {height:'201px', textAlign:'center',backgroundColor:'#F66B9E'}
    return(
        <>
            <div style={topo} >
                <img src="https://www.petlove.com.br/static/uploads/images/department/gatos.jpg" alt="" />
            </div>
            <ProdCat />
        </>
        
    )
}