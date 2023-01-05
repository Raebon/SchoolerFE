import React from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../components/form/inputs';

type Word = {
  id?: number;
  cz: string;
  en: string;
};

const SaveWord = () => {
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ cz: string; en: string }>();
  const [words, setWords] = React.useState<Word[]>([]);
  const [mixedWords, setMixedWords] = React.useState<Word[]>([])

  const onSubmit = (data: { cz: string; en: string }) => {
    // if (errors != null) return alert("Nelze přidat prázdný objekt")

    setWords([...words, { id: words.length, cz: data.cz, en: data.en }]);
    reset();
  };
  // btns fn
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
    <form className="ui fluid form" onSubmit={handleSubmit(onSubmit)}>

      <TextInput name="cz" label="České slovo" placeholder="České slovo" control={control} errors={errors} required />
      <TextInput name="en" label="Anglické slovo" placeholder="Anglické slovo" control={control} errors={errors} required />
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
            <li>{word.cz} - {word.en}</li> <button type="button" onClick={() => clearWord(word.id)}>Odstranit</button>
          </div>
        ))}
      </ul>
    </form>
  );
}

export default SaveWord