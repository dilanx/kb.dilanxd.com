import React from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search is not available yet." disabled />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
}
