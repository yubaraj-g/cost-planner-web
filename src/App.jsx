import { lazy, Suspense, useState } from 'react'
import Login from "./pages/Login"

const CostPlanner = lazy(() => import("./pages/CostPlanner"))

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      {
        // if user is null show Login page 
        !user ? <Login /> :
          <Suspense fallback={<h1>Loading...</h1>}>
            <CostPlanner />
          </Suspense>
      }

    </>
  )
}

export default App