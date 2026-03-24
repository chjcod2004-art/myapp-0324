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
function Profilecard({name,age,job}){
  return(
    <div>
      <h2>이름:{name}</h2>
      <p>나이:{age}</p>
      <p>직업:{job}</p>
    </div>
  )
}

function Button({text}){
  return <button>{text}</button>
}

function Card({children}){
  return <div className="card">{children}</div>
}

function Good({fruits}){
  
  return (
    <ul>
      {fruits.map((fruit,index)=> (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  )
}

function App(){
  const fruits=["사과","바나나","포도"]
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
      <hr/>
      <h2>실습4</h2>
      <Profilecard name="정지훈" age={23} job="학생"/>
      <hr/>
      <h2>실습5</h2>
      <Button text="로그인"/>
      <p><Button text="회원가입"/></p>
      <p><Button text="삭제"/></p>
      <hr/>
      <h2>실습6</h2>
      <Card>
        <h2>제목</h2>
        <p>본문 내용입니다.</p>
      </Card>
      <hr/>
      <h2>실습7</h2>
      <Good fruits={fruits} />


  </div>

)
}

export default App;