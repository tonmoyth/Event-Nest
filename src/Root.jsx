import { Outlet, useNavigation } from 'react-router'
import './App.css'
import NavBer from './components/Header/NavBer'
import Footer from './Layout/HomeLayout/Footer'
import Loading from './components/Header/Loading/Loading';

function Root() {
  const {state} = useNavigation();
  console.log(navigation);
  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <NavBer></NavBer>
      </header>

      <main className='w-11/12 mx-auto py-5'>
        {
          state === 'loading' ? <Loading></Loading> : <Outlet></Outlet>
        }
      </main>

     <footer>
      <Footer></Footer>
     </footer>
    </div>
  )
}

export default Root
