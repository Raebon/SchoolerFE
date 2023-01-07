import React from 'react'
import CreateList from './features/create-question-and-answer-list/createList';
import { PageContainer } from '../../components/elements/containers/pageContainer';

const CreateQuestionAndAnswerPage = () => {
  return (
    <PageContainer title="Vytvořit test">
      <CreateList />
    </PageContainer>
  )
}

export default CreateQuestionAndAnswerPage