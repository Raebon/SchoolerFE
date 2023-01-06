import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../../../../components/form/inputs';
import { QuestionAnswerBanner } from './components/questionAnswerBanner';
import { Word } from './types';

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
    <form className="ui fluid form" onSubmit={handleSubmit(onSubmit)}>
      <div className="ui vertically divided grid">
        <div className="three column row">
          <div className="column">
            <TextInput name="question" placeholder="Otázka..." control={control} errors={errors} required />
          </div>
          <div className="column">
            <TextInput name="answer" placeholder="Odpověď..." control={control} errors={errors} required />
          </div>
          <div className="column">
            <button className="ui button" type="submit">Přidat slovo</button>
          </div>
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