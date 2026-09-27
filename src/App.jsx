import { useEffect, useReducer } from 'react'
import './App.css'
// import DateCounter from './DateCounter'
import QuizApp from './quizApp'
const initialvalue ={
  questions:[],
  status :"loading"
}
function reducer(state,action){
 switch(action.type){
  case "datareceved" :
  return  {
    ...state , questions: action.payload,
    status:"ready"

  }
  case "dataNotFound" :
    return {
      ...state, status:"error"
    }
        default:
      throw new Error("Unknown action");
 }
}   
function App() {
  const [state,dispatch] =useReducer(reducer,initialvalue)
  const {questions ,status} =state
  useEffect(() =>{
    async function GetQusetions() {
  try {
    const res = await fetch("http://localhost:8000/questions") 
    if(!res.ok) throw new Error("Faild Get Data ")
      const data = await res.json()
       dispatch({type:"datareceved", payload:data})
    console.log(data);
   }catch{
    dispatch({type:"dataNotFound"})
   }

    }
    GetQusetions()
  },[])
  return (
    // <DateCounter/>
    <QuizApp questions={questions} status={status} />
  )
}

export default App
