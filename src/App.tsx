import { EncrypterProvider } from './context/EncrypterContext';
import HomeLayout from './pages/LandingPage/components/layouts/HomeLayout';

const App = () => {
  return (
    <EncrypterProvider>
      <HomeLayout />
    </EncrypterProvider>
  );
};

export default App;
