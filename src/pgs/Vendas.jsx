export function Vendas(){
        const produtos = 
        [
          {img:'https://www.petlove.com.br/images/products/267815/small/Ra%C3%A7%C3%A3o_Seca_Nutrilus_Pro__Frango___Carne_para_C%C3%A3es_Adultos_de_Ra%C3%A7as_Pequenas_!.jpg?1681215307', desc:'Ração Seca Nutrilus Pro+ Frango & Carne para Cães Adultos de Raças Pequenas ', val:136.77},
          {img:'https://www.petlove.com.br/images/products/266041/small/Ra%C3%A7%C3%A3o_Seca_PremieR_Pet_Golden_Gatos_Adultos_Castrados_Frango_-_10_Kg_31017079-3_1.jpg?1674072456', desc:'Ração Seca PremieR Pet Golden Gatos Adultos Castrados Frango ', val:152.91},
          {img:'https://www.petlove.com.br/images/products/236466/small/2387560_GP_Sach%C3%AA_Gourmet_Gato_Adulto_Trato_Urin%C3%A1rio_85g_FRONTAL.jpg?1627758936', desc:'Ração Úmida GranPlus Sachê Gourmet Trato Urinário Frango para Gatos Adultos', val:2.78},
          {img:'https://www.petlove.com.br/images/products/209591/small/Ra%C3%A7%C3%A3o_%C3%9Amida_Sheba_Sach%C3%AA_Cortes_Selecionados_Sabor_Atum_Marinado_para_Gatos_Adultos_-_85_g_2340368_1.jpg?1627671746', desc:'Ração Úmida Sheba Sachê Cortes Selecionados Sabor Atum Marinado para Gatos Adultos', val:3.59},
        ]
        const card = {width:'243px', height:'auto', boxShadow:'1px 2px 5px #ccc', padding:'1rem'}
        const img = {width: '150px', margin: '0 1rem'}
        const p = {margin:'1rem 1rem', height:'105px'}
        const span = {fontWeight:'bold', color:'#4E2096', alignItems:'center'}
    return(
       produtos.map(i=>
          <div style={card}>
            <img style={img} src={i.img} alt="minha imagem" />
            <p style={p}>{i.desc} </p>
            <span style={span} >{`R$ `+ i.val.toFixed(2)} </span>
          </div>
        )
     

    )
}