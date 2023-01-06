import React, { useState } from 'react'
import { Question } from '../types'
import { ChevronDownIcon, EyeIcon, EyeoffIcon, TrashIcon } from "../../../../../assets/icons/"
import classnames from 'classnames';

interface Props {
  onRemoveClick: () => void
  question: Question
}

export const QuestionAnswerBanner: React.FC<Props> = ({ onRemoveClick, question }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const handleShowAnswerClick = () => setShowAnswer(prev => !prev)
  return (
    <div >
      <h2>
        <div
          /* type="button" */
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200" >
          <span className='font-bold flex-1'>{question.id}.<span className="pl-5 font-medium">{question.question}</span></span>
          <button
            type='button'
            className="mx-2"
            onClick={onRemoveClick}>
            <TrashIcon />
          </button>
          <button
            type='button'
            className="mx-2"
            onClick={handleShowAnswerClick}>
            {showAnswer ? (<EyeIcon />) : (<EyeoffIcon />)}
          </button>
          {/* <span className={classnames("mx-2", { 'rotate-180': !showAnswer })}>
            <ChevronDownIcon />
          </span> */}
        </div>
      </h2>
      <div className={classnames({ 'hidden': showAnswer })}>
        <div className="py-5 font-light border-b border-gray-200">
          <p className="pl-5 mb-2 text-gray-500">
            {question.answer}
          </p>
        </div>
      </div >
    </div >



  )
}
