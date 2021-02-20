import React, { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const NavigationItem: FC<{
  name: string;
  route: string;
  icon: IconDefinition;
}> = ({ name, route, icon }) => {
  return (
    <li>
      <Link href={`${route}`}>
        <a className="flex items-center p-5 rounded-lg hover:bg-gray-100">
          {icon && (
            <span className="mr-2">
              <FontAwesomeIcon icon={icon} aria-hidden="true" />
            </span>
          )}
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavigationItem;
