import { ExclusiveNav } from './components/ExclusiveNav/page';
import { Navigation } from './components/Navigation/page';
import { SearchBar } from './components/SearchBar/page';

function NavBar() {
  return (
    <div className="
      w-full flex flex-col sm:flex-row items-center 
      justify-between gap-2 sm:gap-8 px-2 sm:px-8 py-4 bg-white
    ">
      <ExclusiveNav />
      <Navigation />
      <SearchBar />
    </div>
  );
}

export default NavBar;