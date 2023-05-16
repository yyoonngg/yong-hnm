import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품페이지, 로그인페이지, 상품상세페이지 o 
// 1-1. nav바 o
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다. o
// 3. 로그인 버튼을 누르면, 로그인 페이지가 나온다. o
// 4. 상품 디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지(private route) o
// 5. 로그인이 되어 있을 경우에는 상품 디테일을 볼 수 있다. o
// 6. 로그아웃 버튼을 누르면 로그아웃이 된다. o
// 7. 로그아웃이 되면 상품디테일 페이지를 볼 수 없다. 다시 로그인 페이지 o
// 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다. o
// 9. 상품을 검색할 수 있다. o
// 10. 로고를 누르면 홈페이지로 o
// 11. 사이드 메뉴(모바일) o 

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/products/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
