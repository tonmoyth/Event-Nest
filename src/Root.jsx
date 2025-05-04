import { Outlet } from 'react-router'
import './App.css'
import NavBer from './components/Header/NavBer'

function Root() {

  return (
    <div>
      <header className='w-11/12 mx-auto'>
        <NavBer></NavBer>
      </header>

      <main className='w-11/12 mx-auto py-5'>
        <Outlet></Outlet>
      </main>

     <footer></footer>
    </div>
  )
}

export default Root
