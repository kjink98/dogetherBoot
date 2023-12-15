import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/js/NavBar';
import Footer from './components/js/Footer';
import Index from './screens/js/Index';
import Favorite_place from './screens/js/favorite_place';
import Favorite_post from './screens/js/favorite_post';
import Myhistory from './screens/js/myhistory';
import Post_notice from './screens/js/post_notice';
import Post_review from './screens/js/post_review';
import Post_promotion from './screens/js/post_promotion';
import Post_news from './screens/js/post_news';
import Place from './screens/js/place_restaurant_list';
import PlaceDetail from './screens/js/place_detail';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/favorite_place" element={<Favorite_place />}></Route>
        <Route path="/favorite_post" element={<Favorite_post />}></Route>
        <Route path="/myhistory" element={<Myhistory />}></Route>
        <Route path="/post_notice" element={<Post_notice />}></Route>
        <Route path="/post_review" element={<Post_review />}></Route>
        <Route path="/post_promotion" element={<Post_promotion />}></Route>
        <Route path="/post_news" element={<Post_news />}></Route>
        <Route path="/place/:place_category" element={<Place />}></Route>
        <Route path="/place/detail/:place_id" element={<PlaceDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;