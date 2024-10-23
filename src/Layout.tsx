import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

export default function Layout() {
  return (
    <div className="flex gap-5 px-2 lg:pl-4 md:pr-0">
      <Sidebar />
      <div className="flex-[4]">
        <Header />
          <Outlet />
      </div>
    </div>
  )
}
