import React from 'react'
import Main from './Main'
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from './StartScreen'

const QuizApp = ({ questions, status }) => {
  return (
    <div className='quiz_app'>
       <header> 
        <h1>Test React App </h1>
       </header>
      <Main>
         {status === "loading" && <Loader/>}
         {status === "error" && <Error/>}
         {status === "ready" && <StartScreen questions={questions} />}
      </Main>
    </div>
  )
}

export default QuizApp
