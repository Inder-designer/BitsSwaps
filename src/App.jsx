import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Swap from './Pages/Swap'
import Pool from './Pages/Pool'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      children: [
        {
          path: '/swap',
          element: <Swap/>
        },
        {
          path: '/pool',
          element: <Pool/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
