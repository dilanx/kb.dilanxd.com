import Link from '@docusaurus/Link';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Tile.module.scss';

export default function Tile({ label, image, icon, to, href }) {
  return (
    <Link
      className={styles.tile}
      href={to || href}
      target={href ? '_blank' : '_self'}
      rel={href ? 'noreferrer' : undefined}
    >
      {icon && (
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
      {image && <img src={image} alt={label} />}
      <h3>{label}</h3>
      {href && (
        <FontAwesomeIcon icon={faUpRightFromSquare} className={styles.ext} />
      )}
    </Link>
  );
}
