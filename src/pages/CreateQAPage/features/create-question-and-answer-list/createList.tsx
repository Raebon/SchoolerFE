import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../../../../components/form/inputs';
import { QuestionAnswerBanner } from './components/questionAnswerBanner';
import { Word } from './types';
import { PrimaryButton } from '../../../../components/elements/buttons';

const CreateList = () => {
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ question: string; answer: string }>();
  const [words, setWords] = React.useState<Word[]>([]);

  const onSubmit = (data: { question: string; answer: string }) => {
    setWords([...words, { id: words.length, question: data.question, answer: data.answer }]);
    reset();
  };

  const clearWords = () => setWords([])

  const clearWord = (wordId?: number) => {
    return setWords(words.filter(item => item.id !== wordId))
  }

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

      <div className="ui vertically divided grid">
        {words.map((word) => (
          <QuestionAnswerBanner
            key={`${word.id}-${new Date().toISOString()}`}
            onRemoveClick={() => clearWord(word.id)}
          />))}

      </div>
      {words.length > 0 && <button className="ui button" type="button" onClick={clearWords}>Vyčistit list</button>}
    </form>
  )
}

export default CreateList