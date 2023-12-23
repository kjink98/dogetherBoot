import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/js/NavBar';
import Footer from './components/js/Footer';
import Index from './screens/js/Index';
import FavoritePlace from './screens/js/FavoritePlace';
import FavoritePost from './screens/js/FavoritePost';
import MyHistory from './screens/js/MyHistory';
import PostNotice from './screens/js/PostNotice';
import PlaceList from './screens/js/PlaceList';
import PlaceDetail from './screens/js/PlaceDetail';
import PostList from './screens/js/PostList';
import PostDetail from './screens/js/PostDetail';
import PostPost from './screens/js/PostPost';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/favorite-place" element={<FavoritePlace />}></Route>
        <Route path="/favorite-post" element={<FavoritePost />}></Route>
        <Route path="/my-history" element={<MyHistory />}></Route>
        <Route path="/post-notice" element={<PostNotice />}></Route>
        <Route path="/post/list/:board_id" element={<PostList />}></Route>
        <Route path="/post/detail/:board_id/:post_id" element={<PostDetail />}></Route>
        <Route path="/post/post/:board_id" element={<PostPost />}></Route>
        <Route path="/place/:place_category" element={<PlaceList />}></Route>
        <Route path="/place/detail/:place_id" element={<PlaceDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;