import BusinessList from '../../components/BusinessList/BusinessList';
import Categories from '../../components/CategoryFilter/CategoryFilter';
import Map from '../../components/Map/Map';
import './style.css';
import { useTranslation } from 'react-i18next'


export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div id="home" className="home" data-testid="home-element">
      <Categories />
      <section className="home__info">
        <BusinessList />
        <Map />
      </section>
    </div>
  );
}

