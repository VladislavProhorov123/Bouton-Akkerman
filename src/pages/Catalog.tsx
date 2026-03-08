import React from 'react'
import { Link } from 'react-router-dom';

export default function Catalog() {
  const bouquets = [
    { id: 1, name: 'Букет троянд' },
    { id: 2, name: 'Весняний букет' },
  ];

  return (
    <div>
      <h2>Каталог</h2>
      <ul>
        {bouquets.map(b => (
          <li key={b.id}>
            <Link to={`/catalog/${b.id}`}>{b.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
