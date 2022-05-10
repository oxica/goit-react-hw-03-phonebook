import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}............
        {number}
      </p>
      <button
        className={s.btn}
        type="submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
