import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/js/NavBar';
import Footer from './components/js/Footer';
import Index from './screens/js/Index';
import FavoritePlace from './screens/js/FavoritePlace';
import FavoritePost from './screens/js/FavoritePost';
import MyHistory from './screens/js/MyHistory';
import PostNotice from './screens/js/PostNotice';
import LoginForm from './screens/js/LoginForm';
import PlaceList from './screens/js/PlaceList';
import PlaceDetail from './screens/js/PlaceDetail';
import PostList from './screens/js/PostList';
import PostDetail from './screens/js/PostDetail';
import PostPost from './screens/js/PostPost';
import KakaoMap from './components/js/KakaoMap';
import PostUpdate from './screens/js/PostUpdate';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/place/:place_category" element={<PlaceList />}></Route>
        <Route path="/place/detail/:place_id" element={<PlaceDetail />}></Route>

        <Route path="/post/list/notice" element={<PostNotice />}></Route>
        <Route path="/post/list/:board_category" element={<PostList />}></Route>
        <Route path="/post/detail/:board_category/:post_id" element={<PostDetail />}></Route>
        <Route path="/post/post/:board_category" element={<PostPost />}></Route>
        <Route path="/post/update/:board_category/:post_id" element={<PostUpdate />}></Route>
        <Route path="/favorite-place/:user_id" element={<FavoritePlace />}></Route>
        <Route path="/favorite-post/:user_id" element={<FavoritePost />}></Route>
        <Route path="/my-history/:user_id" element={<MyHistory />}></Route>

        <Route path="/user/login" element={<LoginForm />}></Route>

        <Route path="/maptest" element={<KakaoMap />}></Route>
      </Routes>
    </Router>
  );
}

export default App;