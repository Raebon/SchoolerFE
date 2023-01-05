import React from 'react'
import { Word } from '../types'

export const QuestionAnswerBanner = () => {
  return (
    <div className="ui vertically divided grid">
      <div className="two column row">
        <div className="column">
          Otázka
        </div>
        <div className="column">
          Odpověď
        </div>
      </div>
    </div>
  )
}
