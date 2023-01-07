import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from '../../../../components/form/inputs';
import { QuestionAnswerBanner } from './components/questionAnswerBanner';
import { Question } from './types';
import { PrimaryButton } from '../../../../components/elements/buttons';

const CreateList = () => {
  const { formState: { errors }, control, handleSubmit, reset } = useForm<{ question: string; answer: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);

  const onSubmit = (data: { question: string; answer: string }) => {
    setQuestions([...questions, { id: questions.length, question: data.question, answer: data.answer, hidden: false }]);
    reset();
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
      {questions.length > 0 && (
        <div className="flex justify-center mt-10">
          <PrimaryButton type="button" onClick={clearQuestions}>Vyčistit list</PrimaryButton>
          <PrimaryButton type="button" onClick={clearQuestions}>Uložit list</PrimaryButton>
        </div>
      )}
      <div className="mb-10">
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