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
import { useState } from 'react';
import { useEffect } from 'react';
import { CiLight } from 'react-icons/ci';


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
      },
      {
        path:"/header",
        element:<Header/>
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
  const [showMobileWarning, setShowMobileWarning] = useState(false)
  
  useEffect(() => {
    console.log('This is window innerwidth>>>',window.innerWidth)
    if(window.innerWidth <= 1200) {
      console.log("Entered innerwidth")
      setShowMobileWarning(true)
    } 
  }, [window.innerWidth])

  if(showMobileWarning==true) return (
    <div className='flex items-center justify-center h-[100vh] w-[100vw]'>
    <h1 className='bg-red-600 text-white p-5 rounded-lg'>Currently the application can only be viewed in PC's</h1>
    </div>
    )

  return(
    <Provider store={store}>
      <div>
      
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
