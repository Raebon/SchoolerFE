import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../../../../components/form/inputs';
import { QuestionAnswerBanner } from './components/questionAnswerBanner';
import { Question } from './types';
import { PrimaryButton } from '../../../../components/elements/buttons';

const CreateList = () => {
  const [showAllAnswers, setShowAllAnswers] = useState(false)
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ question: string; answer: string }>();
  const [questions, setQuestions] = React.useState<Question[]>([]);

  const onSubmit = (data: { question: string; answer: string }) => {
    setQuestions([...questions, { id: questions.length, question: data.question, answer: data.answer }]);
    reset();
  };

  const clearWords = () => setQuestions([])

  const clearWord = (wordId?: number) => {
    return setQuestions(questions.filter(item => item.id !== wordId))
  }

  const handleShowAllAnswers = () => setShowAllAnswers(prev => !prev)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 ">
        <div className="flex-1">
          <TextInput name="question" placeholder="Otázka..." control={control} errors={errors} required />
        </div>
        <div className="flex-1">
          <TextInput name="answer" placeholder="Odpověď..." control={control} errors={errors} required />
        </div>
        <div>
          <PrimaryButton type="submit">Přidat otázku</PrimaryButton>
        </div>
      </div>

      {questions.length > 0 &&
        <div className='flex justify-center mt-10'>
          <PrimaryButton
            type="button"
            onClick={clearWords}>Vyčistit list</PrimaryButton>
          <PrimaryButton
            type="button"
            onClick={handleShowAllAnswers}>{showAllAnswers ? "Otevřít všechny otázky" : "Zavřít všechny otázky"}</PrimaryButton>
          <PrimaryButton
            type="button"
            onClick={clearWords}>Uložit list</PrimaryButton>
        </div>
      }

      <div className="mb-10">
        {questions.map((item) => (
          <QuestionAnswerBanner
            key={`${item.id}-${new Date().toISOString()}`}
            onRemoveClick={() => clearWord(item.id)}
            question={item}
            toogleAllAnswers={showAllAnswers}
          />))}
      </div>
    </form>
  )
}

export default CreateList