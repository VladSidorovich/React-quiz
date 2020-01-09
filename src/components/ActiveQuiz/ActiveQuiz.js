import React from 'react'
import classes from './Active.module.css'
import AnswerList from './ActiveList/AnswersList'

const ActiveQuiz = props => (

  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}.</strong> &nbsp;
                {props.question}
      </span>
<small> {props.answerNumber} from {props.quizLength}</small>
    </p>
    <AnswerList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
)

export default ActiveQuiz