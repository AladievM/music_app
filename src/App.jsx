import MainPage from './pages/MainPage';
import Playbar from './componets/playBar/playBar';
import style from './global.module.scss';

const App = () => (
  <div className={style.wrapper}>
    <MainPage />
    <Playbar />
  </div>
);

export default App;
