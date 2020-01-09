import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

  state = {
    quiz: [
      {
        question: 'Учить javascript легко?',
        rightAnswerId: 2,
        answers: [
          {text: 'тяжело', id: 1},
          {text: 'легко', id: 2},
          {text: 'ultra hard', id: 3},
          {text: 'ТУТ ХЗ', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log(answerId)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1> Ответьте на все вопросы </h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz