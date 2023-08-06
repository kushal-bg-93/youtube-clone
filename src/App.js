import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider,BrowserRouter} from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SearchPage from './components/SearchPage';
import Test from './components/Test';
import VideoCardShimmer from './components/VideoCardShimmer';
import WatchPage from './components/WatchPage';
import store from './utils/store'


export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      },
      {
        path:"/shimmer",
        element:<VideoCardShimmer/>
      },
      {
        path:"/test",
        element:<Test/>
      },
      {
        path:"/search",
        element:<SearchPage/>
      }
    ]
  },
  {
    path:"/about",
    element:<AboutMe/>
  }
]
)


function App() {
  return (
    <Provider store={store}>
      <div>
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
