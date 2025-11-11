import './App.css'
import { useRoutes } from 'react-router-dom';
import routes from './Routers/router.jsx';

function App() {
  let Route = useRoutes(routes)

  return (
     <div>
      {Route}
    </div>
  )
}

export default App
