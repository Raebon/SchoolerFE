import React, { useState, useEffect } from 'react'
import { Question } from '../types'
import { EyeIcon, EyeoffIcon, TrashIcon } from "../../../../../assets/icons/"
import classnames from 'classnames';

interface Props {
  onRemoveClick: (event: Question) => void
  onShowAnswerClick: (event: Question) => void
  question: Question
}

export const QuestionAnswerBanner: React.FC<Props> = ({ onRemoveClick, question, onShowAnswerClick }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(question.hidden)

  const handleShowAnswerClick = () => {
    setShowAnswer(prev => !prev)
    let questionPayload: Question = {
      id: question.id,
      question: question.question,
      answer: question.answer,
      hidden: !showAnswer,
    }
    onShowAnswerClick(questionPayload)
  }

  return (
    <div >
      <h2>
        <div
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" >
          <span className='font-bold flex-1'>{question.id + 1}.<span className="pl-5 font-medium">{question.question}</span></span>
          <button
            type='button'
            className="mx-2"
            onClick={() => onRemoveClick(question)}>
            <TrashIcon />
          </button>
          <button
            type='button'
            className="mx-2"
            onClick={handleShowAnswerClick}>
            {!showAnswer ? (<EyeIcon />) : (<EyeoffIcon />)}
          </button>
        </div>
      </h2>
      <div className={classnames('', { 'hidden': showAnswer })}>
        <div className="py-5 font-light border-b border-gray-200">
          <p className="pl-5 mb-2 text-gray-500">
            Odpověď: {question.answer}
          </p>
        </div>
      </div >
    </div >
  )
}
