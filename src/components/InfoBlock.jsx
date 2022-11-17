import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/InfoBlock.module.scss';

function InfoBlock(props) {
  return (
    <div className={styles.blocks}>
      <div className={styles.singleBlock}>
        <p>
          <img src={props.img} border="0" alt="" />
        </p>
        <p>
          <Link to={props.to}>{props.title}</Link>
        </p>
      </div>
    </div>
  );
}

export default InfoBlock;
