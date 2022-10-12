import './App.css';
import Navbar from './component/Navbar';
import {HomePage,AboutPage,ArticleListPage,ArticlePage,LoginPage,CreateAccount} from '../src/pages/index';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NotFindPage from './component/NotFindPage';

function App() {
  return (
    <Router>
    <div className='App'>
    <Navbar />
    <div id='page-body'>
    <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/article-list' element={<ArticleListPage />} />
    <Route path='/articles/:name' element={<ArticlePage />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/create-account' element={<CreateAccount />} />
    <Route path='*' element={<NotFindPage />} />
    </Routes>
    </div>
    </div>
   </Router>
  );
}

export default App;

