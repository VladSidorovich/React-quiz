import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Учить javascript легко?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'тяжело', id: 1},
          {text: 'легко', id: 2},
          {text: 'ultra hard', id: 3},
          {text: 'ТУТ ХЗ', id: 4}
        ]
      },
      {
        question: 'Как у нас дела?',
        rightAnswerId: 1,
        id: 2,
        answers: [
          {text: 'супер', id: 1},
          {text: 'хорошо', id: 2},
          {text: 'плохо', id: 3},
          {text: 'ужасно', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({ isFinished: true})
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })  
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1> Ответьте на все вопросы </h1>
          {this.state.isFinished
          ? <FinishedQuiz />
          : <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
        }
        </div>
      </div>
    )
  }
}

export default Quiz