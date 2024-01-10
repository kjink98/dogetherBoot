import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
// 네비게이션 바
import NavBar from './components/js/NavBar';
// 메인
import Index from './screens/js/Index';
// 장소 추천
import PlaceList from './screens/js/PlaceList';
import PlaceDetail from './screens/js/PlaceDetail';
// 커뮤니티
import PostNotice from './screens/js/PostNotice';
import PostList from './screens/js/PostList';
import PostDetail from './screens/js/PostDetail';
import PostDetail2 from './screens/js/PostDetail2';
import PostPost from './screens/js/PostPost';
import PostPost2 from './screens/js/PostPost2';
import PostUpdate from './screens/js/PostUpdate';
// 마이페이지
import MyInfo1 from './screens/js/MyInfo1';
import MyInfo2 from './screens/js/MyInfo2';
import PwChange from './screens/js/PwChange'
import FavoritePlace from './screens/js/FavoritePlace';
import FavoritePost from './screens/js/FavoritePost';
import MyHistory from './screens/js/MyHistory';
// 유저
import LoginForm from './screens/js/LoginForm';
import Login from './screens/js/Login';
import SignUp from './screens/js/SignUp';
import Find from './screens/js/Find';
// Footer
import Footer from './components/js/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("jwt") == null ? false : true);
  return (
    <Router>
      {/* 네비게이션 바 */}
      <NavBar isLogin={isLogin} setIsLogin={setIsLogin}></NavBar>

      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Index />}></Route>

        {/* 장소 추천 */}
        <Route path="/place/:place_category" element={<PlaceList />}></Route>
        <Route path="/place/detail/:place_id" element={<PlaceDetail />}></Route>

        {/* 커뮤니티 */}
        <Route path="/post/list/notice" element={<PostNotice />}></Route>
        <Route path="/post/list/:board_category" element={<PostList />}></Route>
        <Route path="/post/detail/:board_category/:post_id" element={<PostDetail />}></Route>
        <Route path="/post/detail2/:board_category/:post_id" element={<PostDetail2 />}></Route>
        <Route path="/post/post/:board_category" element={<PostPost />}></Route>
        <Route path="/post/post2/:board_category" element={<PostPost2 />}></Route>
        <Route path="/post/update/:board_category/:post_id" element={<PostUpdate />}></Route>

        {/* 마이페이지 */}
        <Route path="/my-info1" element={<MyInfo1 isLogin={isLogin} />}></Route>
        <Route path="/my-info2" element={<MyInfo2 setIsLogin={setIsLogin} />}></Route>
        <Route path="/pw-change" element={<PwChange isLogin={isLogin} />}></Route>
        <Route path="/favorite-place" element={<FavoritePlace isLogin={isLogin} />}></Route>
        <Route path="/favorite-post" element={<FavoritePost isLogin={isLogin} />}></Route>
        <Route path="/my-history" element={<MyHistory isLogin={isLogin} />}></Route>

        {/* 유저 */}
        <Route path="/user/login" element={<LoginForm setIsLogin={setIsLogin} />}></Route>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/find" element={<Find />}></Route>

      </Routes>
    </Router>
  );
};

export default App;