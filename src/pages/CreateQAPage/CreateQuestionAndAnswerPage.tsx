import React from 'react'
import CreateList from './features/create-list/createList';
import { PageContainer } from '../../components/elements/containers/pageContainer';

const CreateQuestionAndAnswerPage = () => {
  return (
    <PageContainer title="Tvorba testu">
      <CreateList />
    </PageContainer>
  )
}

export default CreateQuestionAndAnswerPage