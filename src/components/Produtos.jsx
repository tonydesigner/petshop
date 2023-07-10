
export function Produtos(props){
  const card = {width:'243px', height:'auto', boxShadow:'1px 2px 5px #ccc', padding:'1rem', textAlign:'center'}
  const img = {width: '150px'}
  const p = {margin:'1rem 1rem', height:'105px'}
  const span = {fontWeight:'bold', color:'#4E2096', alignItems:'center'}
  return(
      <div style={card}>
          <img style={img} src={props.img} alt="minha imagem" />
          <p style={p}>{props.desc} </p>
          <span style={span} >{props.val} </span>
      </div>
  )
}