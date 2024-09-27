function propsDes (props) {
    const num = [1,2,3,4,5]
    const squared = num.map((item) =>{
      return item * item
    })

    const names = ['alice', 'fred', 'fred', 'fred', 'fred', ]

    const uppercase = names.map((n)=>{
      return n[0].toUpperCase() + n.slice(1)
    })
return(
    <div>
      <h3 style={{display : props.title ?'block' : 'none'}}>Title: {props.title}</h3>
      <h4>sub: {props.subTitle}</h4>
      <hr/>

      <h2>{squared}</h2>

      <h3>{uppercase}</h3>
    </div>
)
}

export default propsDes