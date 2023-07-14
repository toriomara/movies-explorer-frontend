import { RouterProvider } from 'react-router-dom';
import router from '../Router';

const App = () => {
  // const [isLogged, setIsLogged] = useState(false)
  return (
    <RouterProvider router={router}/>
  )
}

export default App;


