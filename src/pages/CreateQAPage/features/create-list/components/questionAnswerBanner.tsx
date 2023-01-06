import React from 'react'
import { Word } from '../types'

interface Props {
  onRemoveClick: () => void
}

export const QuestionAnswerBanner: React.FC<Props> = ({ onRemoveClick }) => {
  return (

    <div className="row">
      <div className="column">
        Otázka
      </div>
      <div className="column">
        Odpověď
      </div>
      <div className="column">
        <button type="button" onClick={onRemoveClick}>Odstranit</button>
      </div>
    </div>

  )
}
