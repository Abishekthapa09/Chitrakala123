import { Outlet, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './components/auth/require-auth';
import { NotFound, Checkout,Product, Success, Orders, Home, Auth } from './pages';
import { CategorySection } from './components/categories/category-section';
import { Header } from './components/layout/header';
import { CartModal } from './components/cart/cart-modal';
import { ProfileModal } from './components/profile/profile-modal';
import { Footer } from './components/layout/footer';
import CheckoutForm from './pages/Checkout_Form';
import firebase from 'firebase/app'; // Import the Firebase core module
// import 'firebase/auth'; // Import Firebase Authentication module
// import firebaseConfig from '../firebaseConfig'; // Import your Firebase configuration
// import {Elements, useStripe} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
// const stripePromise = loadStripe('pk_test_51NkgvfLyF1hITntDKT3V6OFvlzBoIlx0eB8OEAB7kRdjnNj5Xs7CCGc84dBogb0NZnS5hmsRZ8RoCcBjp0VnMRvD009ZHWoUCT');

// const secret ="sk_test_51NkgvfLyF1hITntDp07ACEyTotPdmK6W5JxvqTSD2IzoiUVc2ruttSwyQstGqYdaw68r88uzh4xbAVbYjFFuWueJ00m0lnaEdx"

function App() {
//   // const options = {
//   //   clientSecret: 'sk_test_51NkgvfLyF1hITntDp07ACEyTotPdmK6W5JxvqTSD2IzoiUVc2ruttSwyQstGqYdaw68r88uzh4xbAVbYjFFuWueJ00m0lnaEdx',
//   // };
  
  return (
    <main className="flex flex-col min-h-[100svh] ">
      <h1 className="sr-only">Chitrakala</h1>
      <Header>
        <CartModal />
        <ProfileModal />
      </Header>
      <Routes>
  <Route path={'/'} element={<Home />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="/category/product/:id" element={<Product />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path={'/category'} element={<CategorySection />} />
  <Route path={'/about'} element={''} />
  <Route element={<RequireAuth />}>
    <Route path="/orders/:oId" element={<Orders />} />
    <Route path="/checkout/success" element={<Success />} />
    {/* <Route path="/checkout/CheckoutForm" element={<CheckoutForm />} /> */}
  </Route>
  <Route path="*" element={<NotFound />} />
<Route path="auth" element={<Auth />} />
</Routes>
      <Outlet />
      <Footer />
    </main>
   
  );
}

export default App;
