import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WatchList from './pages/WatchList';
import Header from './components/Header';
import Stock from './pages/Stock';

const App = () => {
    return (
        <>
          <Header/>
        </>
    )
}
export const appRouter = createBrowserRouter([
  {
    path: '/home',
    element: <HomePage/>
  },
  {
    path: '/watchlist',
    element: <WatchList/>
  },
  {
    path:'/stock/:stockSymbol/:stockName',
    element: <Stock/>
  }
])

export default App;