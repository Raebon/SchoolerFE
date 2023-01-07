import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../../../components/form/inputs';
import { QuestionAnswerBanner, AnswerInputWithToggle } from './components/';
import { Question } from './types';
import { PrimaryButton, SecondaryButton } from '../../../../components/elements/buttons';
import { SaveIcon, PlusIcon, TrashIcon, PlusCircleIcon } from '../../../../assets/icons';
import { InfoAlert } from '../../../../components/elements/alerts'

const CreateList = () => {
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ question: string; answer: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [addedAnswerInputFields, setAddedAnswerInputFields] = useState<string[]>([])

  const onSubmit = (data: any) => {
    const addedInputFieldsObjects = Object.keys(data)
      .filter(key => key.startsWith("answer"))
      .map((key) => ({
        answer: data[key],
        isTrue: data[key.replace("answer", "isTrue")] ?? true
      }));

    setQuestions([...questions,
    {
      id: questions.length,
      question: data.question,
      answers: addedInputFieldsObjects,
      hidden: false
    }
    ]);
    reset();
    setAddedAnswerInputFields([])
  };

  const clearQuestions = () => setQuestions([]);

  const clearQuestion = (question: Question) => {
    setQuestions(questions.filter((item) => item.id !== question.id));
  };

  const showCurrentAnswer = (event: Question) => {
    const updatedAnswers = questions
    const index = updatedAnswers.findIndex(item => item.id === event.id)
    if (index !== -1) updatedAnswers[index] = { ...updatedAnswers[index], hidden: event.hidden }
    setQuestions(updatedAnswers);
  }

  const addNewAnswerField = () => setAddedAnswerInputFields([...addedAnswerInputFields, "added"])

  const deleteLastAnswerField = () => setAddedAnswerInputFields(prevArr => prevArr.slice(0, -1))


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoAlert>
        Při tvorbě testu je zapotřebí vyplnit otázku a k ní správnou možnost odpovědi. Je zde možnost přidat další odpovědi, kde je potřeba zvolit zda je odpověď správná nebo nesprávná. Proto při tvorbě testu může vzniknout u jedné otázky více než jedna odpověď správná. Při generování testu se odpovědi promíchají
      </InfoAlert>
      <div className="flex mb-5">
        <div className="flex-1">
          <TextInput name="question" placeholder="Otázka..." control={control} errors={errors} required />
        </div>
      </div>
      <div className="flex mb-5">
        <div className="flex-1">
          <TextInput name="answer" placeholder="Odpověď..." control={control} errors={errors} required />
        </div>
      </div>
      {addedAnswerInputFields.map((item, index) =>
        <AnswerInputWithToggle
          key={index}
          name={index.toString()}
          placeholder="Odpověď..."
          control={control}
          errors={errors}
          label="správná odpověď"
          required
        />
      )}
      <div className="flex gap-1 ">
        <button
          type='button'
          className="flex gap-1 font-medium mx-2 text-gray-500 hover:text-gray-900"
          onClick={addNewAnswerField}>
          <PlusCircleIcon />
          Přidat další odpověď
        </button>
        {addedAnswerInputFields.length > 0 && (
          <button
            type='button'
            className="flex gap-1 font-medium mx-2 text-gray-500 hover:text-gray-900"
            onClick={deleteLastAnswerField}>
            <PlusCircleIcon />
            Odebrat poslední odpověď
          </button>
        )}

      </div>

      <div className="flex justify-center mt-5">
        <PrimaryButton
          type="submit">
          <PlusIcon xs lightColor />
          Přidat otázku do listu
        </PrimaryButton>
      </div>
      <div className="mb-10">
        <div className="flex justify-center mt-5">
          {questions.length > 0 && (
            <>
              <SecondaryButton
                type="button"
                onClick={clearQuestions}>
                <TrashIcon xs />
                Vyčistit list
              </SecondaryButton>
              <SecondaryButton
                type="button"
                onClick={clearQuestions}>
                <SaveIcon xs />
                Uložit list
              </SecondaryButton>
            </>
          )}
        </div>
        {questions.map((item) => (
          <QuestionAnswerBanner
            key={`${item.id}-${new Date().toISOString()}`}
            onRemoveClick={clearQuestion}
            question={item}
            onShowAnswerClick={showCurrentAnswer}
          />
        ))}
      </div>
    </form>
  );
};

export default CreateList;