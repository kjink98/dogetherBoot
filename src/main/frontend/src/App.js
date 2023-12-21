import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/js/NavBar';
import Footer from './components/js/Footer';
import Index from './screens/js/Index';
import Favorite_place from './screens/js/favorite_place';
import Favorite_post from './screens/js/favorite_post';
import Myhistory from './screens/js/myhistory';
import Post_notice from './screens/js/post_notice';
import Place from './screens/js/place_restaurant_list';
import PlaceDetail from './screens/js/place_detail';
import Post_list from './screens/js/post_list';
import Post_detail from './screens/js/post_detail';
import Post_post from './screens/js/post_post';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element = { <Index/> }></Route>
        <Route path="/favorite_place" element = { <Favorite_place/> }></Route>
        <Route path="/favorite_post" element = { <Favorite_post/> }></Route>
        <Route path="/myhistory" element = { <Myhistory/> }></Route>
        <Route path="/post_notice" element = { <Post_notice/> }></Route>
        <Route path="/post/list/:board_id" element = { <Post_list/> }></Route>
        <Route path="/post/detail/:board_id/:post_id" element = { <Post_detail/> }></Route> 
        <Route path="/post/post/:board_id" element = { <Post_post/> }></Route>
        <Route path="/place/:place_category" element={<Place />}></Route>
        <Route path="/place/detail/:place_id" element={<PlaceDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;