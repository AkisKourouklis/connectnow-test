import { FC, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../types/store'
import { clearError } from '../../store/actions/error'

const Notification: FC = () => {
  const dispatch = useDispatch()
  const { isError, description, message, type } = useSelector((state: State) => state.error)

  const closeNotification = (): void => {
    dispatch(clearError())
  }

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        dispatch(clearError())
      }, 3000)
    }
  }, [isError])

  return (
    <>
      {isError ? (
        <Alert className="notification" variant={type} onClose={closeNotification} dismissible>
          <Alert.Heading>{message}</Alert.Heading>
          <p>{description}</p>
        </Alert>
      ) : null}
    </>
  )
}

export default Notification
