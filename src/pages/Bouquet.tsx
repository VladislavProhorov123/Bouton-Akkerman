import React from 'react'
import { useParams } from 'react-router-dom';

export default function Bouquet() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className='mt-[100px]'>Сторінка букета з id: {id}</div>

  )
}
