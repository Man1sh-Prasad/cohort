import { useState } from 'react'
import './App.css'
import { useRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, networkAtom, notificationAtom, messagesAtom, totalNotificationSelector } from './atoms'


function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const [messagesNotificationCount, setMessageNotificationCount] = useRecoilState(messagesAtom);
  const notificationCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <button>Home</button>

      <button>My Network ({ networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsNotificationCount >= 100 ? "99+" : jobsNotificationCount})</button>
      <button>Messages ({messagesNotificationCount >= 100 ? "99+" : messagesNotificationCount})</button>
      <button>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
