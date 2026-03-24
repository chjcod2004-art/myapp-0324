function Hello() {
  return <h2>안녕하세요</h2>;
}
function User({ name }) {
  return <h2>안녕하세요 {name}님</h2>;
}

function Product({name,price}){
  return(
    <div>
      <h3>상품: {name}</h3>
      <h3>가격: {price}</h3>
    </div>
  )
}




function App(){
return (
  <div>
      <h1>4주차 실습</h1>
      <hr/>
      <h2>실습1</h2>
      <Hello/>
      <hr/>
      <h2>실습2</h2>
      <User name='정지훈'/>
      <hr/>
      <h2>실습3</h2>
      <Product name="노트북" price={300000}/>
      <Product name="마우스" price={5000000}/>


  </div>

)
}

export default App;