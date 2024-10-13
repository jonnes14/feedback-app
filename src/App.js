import Header from "./Components/Header";
import Feedbacklist from './Components/Feedbacklist';
import FeedbackStats from "./Components/FeedbackStats";
import Feedbackform from "./Components/Feedbackform";
import AboutPage from "./Pages/AboutPage";
import AboutIcons from './Components/AboutIcons';
import { FeedbackProvider } from './context/FeedbackContext';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App(){
              return(
               <FeedbackProvider>
                     <Router>
                     <Header/>
                  <div className='container'>
                     <Routes>
                        <Route path='/' element={
                           <>
                  <Feedbackform/>
                     <FeedbackStats/>
                     <Feedbacklist/>
                     <AboutIcons/>
                     </>
                     }
                     />
                     <Route path='/about' element={<AboutPage/>} />
                     </Routes>
                  </div>
                  </Router>
                  </FeedbackProvider>
              )
}
export default App; 