import Nav from './components/Nav';
import UserProfile from './components/UserProfile';
import PhotoSection from './components/PhotoSection';
import ContextUser from './Context/ContextUser';
import { feedsource } from './Service/feedsource';

const App = () => {

  return (
    <main className="App">
      <ContextUser.Provider value={{
        estaLogueado: false,// or true
      }}>
        <Nav />
        <UserProfile />
        <PhotoSection feedsource={feedsource} />
      </ContextUser.Provider>
    </main>
  );
}

export default App;
