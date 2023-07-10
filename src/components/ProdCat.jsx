import { Produtos } from "./Produtos";
export function ProdCat(){
    const prodCats = 
    [
        {img:'https://www.petlove.com.br/images/products/266053/small/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Salm%C3%A3o_para_Gatos_Adultos_Castrados_-_10_1_Kg_31022435-3_1.jpg?1674076294', desc:'Ração Seca PremieR Pet Golden Salmão para Gatos Adultos Castrados - 10,1Kg', val:159.21},
        {img:'https://www.petlove.com.br/images/products/233440/small/Areia_Sanit%C3%A1ria_Kelco_Pipicat_Multicat_-_12_Kg_3105886.jpg?1627748509', desc:'Areia Sanitária Multicat Pipicat - 12Kg', val:40.41},
        {img:'https://www.petlove.com.br/images/products/250855/small/Granulado_Higi%C3%AAnico_0004_15_ORIGINAL_10KG_ean-13_7897575107714.jpg?1636119897', desc:'Granulado Higiênico de Madeira CarePet Premium Original - 10Kg', val:56.69},
        {img:'https://www.petlove.com.br/images/products/250533/small/2492359.jpg?1635795887', desc:'Areia Sanitária Meau Grãos Finos para Gatos - 4Kg', val:10.97},
        {img:'https://www.petlove.com.br/images/products/177801/small/Ra%C3%A7%C3%A3o-Royal-Canin-Premium-Cat-para-Gatos-Adultos-Castrados.jpg?1627584785', desc:'Ração Royal Canin Premium Cat para Gatos Adultos Castrados - 10,1Kg', val:303.59},
        {img:'https://www.petlove.com.br/images/products/266605/small/Petisco_Dreamies_para_Gatos_Adultos_Sabor_Carne_1.jpg?1676561576', desc:'Petisco Dreamies para Gatos Adultos Sabor Carne - 40g', val:5.8},
        {img:'https://www.petlove.com.br/images/products/235184/small/Microcristais.jpg?1627754453', desc:'Areia Sanitária Chalesco Micro Cristais de Sílica - 1,8Kg', val:43.99},
        {img:'https://www.petlove.com.br/images/products/262471/small/Petisco_Nestl%C3%A9_Purina_DentaLife_para_Gatos_-_40_g_1647286_0000_606f6faf2f42b10bcec0a687_2.jpg?1663788143', desc:'Petisco Purina DentaLife DentaLife para Gatos Adultos Sabor Frango - 40g', val:8.21},
    ] 
    const cats = {margin:'0 auto', width:'1200px', height:'100%' , display:'flex', alignItems:'center', justifyContent:'space-around', flexWrap:'wrap', gap:'2rem'}
    return(
    
        <div style={cats}>
            {
                 prodCats.map(i=>
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