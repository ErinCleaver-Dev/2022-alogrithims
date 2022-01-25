import Link from 'next/link'

import React from 'react';

const Sidebar = ({sidebarFormat}) => {
  return (
      <div >
        <ul className={sidebarFormat}>
            <li>
            <Link href="/">
                 <a>Home</a>
            </Link>
            </li>
            <li>
                <Link href="/big_o">
                    <a>Big O</a>
                </Link>
            </li>
        </ul>
      </div>
  );
};

export default Sidebar;
