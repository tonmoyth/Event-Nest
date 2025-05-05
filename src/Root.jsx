import { Outlet } from 'react-router'
import './App.css'
import NavBer from './components/Header/NavBer'
import Footer from './Layout/HomeLayout/Footer'

function Root() {

  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <NavBer></NavBer>
      </header>

      <main className='w-11/12 mx-auto py-5'>
        <Outlet></Outlet>
      </main>

     <footer>
      <Footer></Footer>
     </footer>
    </div>
  )
}

export default Root
