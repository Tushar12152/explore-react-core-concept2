import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './singer'
import Books from './book'


function App() {
  const [count, setCount] = useState(0)

const actors=['sakib khan','raj','joshim','kanu','riaz chamcha','kabila']

const singers=[
  {name:'mahfuz pagla', age:52},
  {name:'hero alam', age:31},
  {name:'jairalok', age:22},
  {name:'sefuda', age:72},
  {name:'jayen ken', age:42},
 
]

const books=[
  {id:1,name:'physics',price:100},
  {id:1,name:'chemestry',price:150},
  {id:1,name:'oop',price:190},
  {id:1,name:'c++',price:250},
]

  return (
    <>
       {/* <Actor name="bapparaz"></Actor>
       {
        actors.map(name=><Actor name={name}></Actor>)
       } */}
       {/* <Singer name="fedous"></Singer> */}
      {/* <ToDo task="learn React" isDone={true}></ToDo>
      <ToDo task="explore react" isDone={false}></ToDo>
      <ToDo task="explore jsx" isDone={true}></ToDo> */}
      <h1>Vite + React</h1>

       {
        books.map(book=><Books book={book}></Books>)
       }

       {
          singers.map(singer=><Singer singer={singer}></Singer>)

       }

       {/* <Device name="mobile" price="7000"></Device>
       <Device name="Watch" price="500"></Device>
      <Person></Person>
      <Student name="salam" grade="B" score="50"></Student>
      <Student name="kalam" grade="C" score="40"></Student>
      <Job name="khan" income="50"></Job>
       <Developoer></Developoer>
       */}
      
     
    </>
  )
}





function Device(props){
  const style={
    backgroundColor:'gray',
    border:'2px solid black',
    marginBottom:'5px',
    borderRadius:'50px'
  }
  console.log(props)
return (
  <div style={style}>
 <h2>This device :{props.name}</h2>
       <h3>Device price:{props.price}</h3>

  </div>
)
 
}

function Person(){
  
  const age=24;
  const dept='CSE';
  return (
  <h3>my name is {name} my age is {age} and dept {dept}</h3>

    
 
  )
}

function Student(props){
  const data={
    name:'abul',
    roll:58,
    dept:'CSE',
    marks:[85,65,95,65],
  }
const {grade,score,name}=props
  return (
    <div className='student'>
        <h5>my name is {name} my math mark is {data.marks[2]}</h5>

        <h2>grade is {grade} score is{score}</h2>
    </div>
  )
}

function Developoer(){
   
  const style={
     backgroundColor:'aqua',
     border:'2px solid red',
     borderRadius:'50px'
  }

      const data={
        name:'kalam',
        village:'nai',
        pession:'engineer'
      }

  return (
    <h6 style={style}>Developoer name is {data.name} he lives in {data.village} he is an {data.pession}</h6>

  )
}


function Job({name,income}){
  return (
    <div>
       <h1>income: {name}</h1>
       <h1>name: {income}</h1>
    </div>

  )
}

export default App
