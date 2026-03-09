import React from 'react'
import { Link } from 'react-router-dom';
import { products } from '../data/product';

export default function Catalog() {
  

  return (
    <div className='mt-[100px]'>
      <h2>Каталог</h2>
      <ul>
        {products.map(b => (
          <li key={b.id}>
            <Link to={`/catalog/${b.id}`}>{b.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
