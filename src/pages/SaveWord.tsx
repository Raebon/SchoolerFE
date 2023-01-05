import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../components/form/inputs';

import CreateList from './CreateQAPage/features/create-list/createList';

type Word = {
  id?: number;
  question: string;
  answer: string;
};

const SaveWord = () => {
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ question: string; answer: string }>();
  const [words, setWords] = React.useState<Word[]>([]);
  const [mixedWords, setMixedWords] = React.useState<Word[]>([])

  const onSubmit = (data: { question: string; answer: string }) => {
    setWords([...words, { id: words.length, question: data.question, answer: data.answer }]);
    reset();
  };

  const mixWords = () => {
    let mix = shuffleArray(words)
    setMixedWords(mix)
    console.log(mixedWords, words)
  }

  const clearWords = () => setWords([])

  const clearWord = (wordId?: number) => {
    return setWords(words.filter(item => item.id !== wordId))
  }

  const saveWordsIntoLocalStorage = () => {
    return console.log("Uložit do LS")
  }

  //pomocná fce
  const shuffleArray = (array: Word[]) => {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <form className="ui fluid form" onSubmit={handleSubmit(onSubmit)}>

        <TextInput name="question" label="Otázka" placeholder="Otázka..." control={control} errors={errors} required />
        <TextInput name="answer" label="Odpověď" placeholder="Odpověď..." control={control} errors={errors} required />
        <br />
        {/* udělat komponentu pro btn */}
        <button className="ui button" type="submit">Přidat slovo</button>
        <br />
        <button type="button" onClick={mixWords}>Složit test</button>

        <button type="button" onClick={saveWordsIntoLocalStorage}>Uložit</button>

        <button type="button" onClick={clearWords}>Vyčistit list</button>
        <br />
        <ul>
          {words.map((word) => (
            <div key={`${word.id}-${new Date().toISOString()}`}>
              <li>{word.question} - {word.answer}</li> <button type="button" onClick={() => clearWord(word.id)}>Odstranit</button>
            </div>
          ))}
        </ul>
      </form>
      <CreateList />
    </>
  );
}

export default SaveWord