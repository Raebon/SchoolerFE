import { PageContainer } from '../../components/elements/containers/pageContainer';
import { useUsersQuery } from "../../api/queries/users/getUsersQueryKey"

const MainPage = () => {
  const { isLoading, error, data } = useUsersQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    console.log(error)
    return <div>Error...</div>
  }

  if (!data || !data.data) {
    return <div>No data available</div>
  }

  return (
    <PageContainer title="">
      <div className="">
        {data.data.map(({ id, firstName, lastName, email, role }) => {
          return (
            <div key={id}>
              {firstName} {lastName} ({role}) - {email}
            </div>
          )
        })}
      </div>
    </PageContainer>
  )
}

export default MainPage