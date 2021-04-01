import { Layout, notification, BackTop } from 'antd'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearError } from '../../store/actions/error'
import { INotification } from '../../types/notification'
import { State } from '../../types/store'

const { Content, Header, Footer } = Layout

const openNotification = ({ message, description, type, dispatch }: INotification): void => {
  notification[type]({
    message,
    description,
    onClose: () => {
      dispatch(clearError())
    },
  })
}

const Main: FC = ({ children }) => {
  const dispatch = useDispatch()
  const { isError, description, message, type } = useSelector((state: State) => state.error)

  useEffect(() => {
    if (isError === true) {
      openNotification({ type, message, description, dispatch })
    }
  }, [isError])

  return (
    <Layout>
      <BackTop />
      <Header>Header</Header>
      <Content>
        <div>{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default Main
