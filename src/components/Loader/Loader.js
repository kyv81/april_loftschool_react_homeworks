import React from 'react';
import './Loader.css';

const Loader = ({ isLoading, error }) => {
  if (isLoading) return <p>Данные загружаются...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return null;
};

export default Loader;
