import React from 'react';
import ContentLoader from 'react-content-loader';

const CoffeeLoader = () => (
  <ContentLoader
    className="coffee-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="20" y="0" rx="20" ry="20" width="240" height="240" /> 
    <rect x="20" y="264" rx="10" ry="10" width="240" height="20" /> 
    <rect x="0" y="310" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="432" rx="10" ry="10" width="95" height="30" /> 
    <rect x="128" y="424" rx="23" ry="23" width="152" height="46" />
  </ContentLoader>
);

export default CoffeeLoader;
