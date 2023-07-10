import { Produtos } from "./Produtos";
    const prodCaes = 
    [
        {img:'https://www.petlove.com.br/images/products/267509/small/%2820%29_Ra%C3%A7%C3%A3o_Seca_Nutrilus_Pro__Frango___Carne_para_C%C3%A3es_Adultos_2.jpg?1680129321', desc:'Ração Seca Nutrilus Pro+ Frango & Carne para Cães Adultos - 20Kg', val:165.67},
        {img:'https://www.petlove.com.br/images/products/260949/small/Tapete_Higi%C3%AAnico_Super_Sec%C3%A3o_Citrus_3104451_%281%29.jpg?1660325640', desc:'Tapete Higiênico Super Secão Citrus - 30 Unidades', val:88.11},
        {img:'https://www.petlove.com.br/images/products/237822/small/Ra%C3%A7%C3%A3o_Seca_True_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_2638251.jpg?1627769277', desc:'Ração Seca True para Cães Adultos Raças Pequenas - 2,5Kg', val:121.41},
        {img:'https://www.petlove.com.br/images/products/87805/small/70361.jpg?1627502005', desc:'Brinquedo Chalesco Pelúcia Macaco - Tam. Único', val:28.34},
        {img:'https://www.petlove.com.br/images/products/212637/small/Brinquedo_Pet_Games_Jogo_Interativo_Redon_Dog_1192243.jpg?1627682890', desc:'Brinquedo Pet Games Jogo Interativo RedonDog - Tam. PP', val:22.97},
        {img:'https://www.petlove.com.br/images/products/260163/small/Antipulgas_e_Carrapatos_NexGard_28_3_mg_para_C%C3%A3es_de_4_1_a_10_Kg_-_1_Tablete_3105746_%283%29.jpg?1659559617', desc:'Antipulgas e Carrapatos NexGard 28,3 mg para Cães de 4,1 a 10Kg - 1 Tablete', val:85.95},
        {img:'https://www.petlove.com.br/images/products/187462/small/31010152.jpg?1627607228', desc:'Comedouro e Bebedouro Duplo em Inox com Suporte - Tam. 03', val:44.91},
        {img:'https://www.petlove.com.br/images/products/215879/small/Tapete_Higi%C3%AAnico_Petmais_TreinePet_para_C%C3%A3es_-_50_Unidades_1213465_0.jpg?1627693685', desc:'Tapete Higiênico Petmais TreinePet para Cães - 50 Unidades', val:96.21},
    ]   
    const caes = {margin:'0 auto', width:'1200px', height:'100%' , display:'flex', alignItems:'center', justifyContent:'space-around', flexWrap:'wrap', gap:'2rem'}
export function ProdCaes(){
    return(
        <div style={caes}>
            {
                 prodCaes.map(i=>
                    <Produtos 
                        img={i.img}
                        desc={i.desc}
                        val={"R$ "+i.val.toFixed(2)}
                    />
                    )
            }
        </div>
       
        
    )
}
