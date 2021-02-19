import React from 'react';
import NavigationItem from './navigation-item';

const NavigationContainer = () => {
  return (
    <ul>
      <NavigationItem name="Home Page" route={'/'} icon={`Home`} />
      <NavigationItem name="Blog" route={'/blog'} icon={`BookOpen`} />
      <NavigationItem name="Glossary" route={'/glossary'} icon={`Type`} />
      <NavigationItem
        name="Getting Started"
        route={'/getting-started'}
        icon={`CreditCard`}
      />
      <NavigationItem
        name="Playground"
        route={'/playground'}
        icon={`TrendingUp`}
      />
    </ul>
  );
};

export default NavigationContainer;
