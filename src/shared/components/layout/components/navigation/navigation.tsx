import React from 'react';
import NavigationItem from './navigation-item';
import {
  faHome,
  faBookOpen,
  faFont,
  faCreditCard,
  faCashRegister,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <ul>
      <NavigationItem name="Home Page" route={'/'} icon={faHome} />
      <NavigationItem name="Blog" route={'/blog'} icon={faBookOpen} />
      <NavigationItem name="Glossary" route={'/glossary'} icon={faFont} />
      <NavigationItem
        name="Getting Started"
        route={'/getting-started'}
        icon={faCreditCard}
      />
      <NavigationItem
        name="Playground"
        route={'/playground'}
        icon={faCashRegister}
      />
    </ul>
  );
};

export default Navigation;
