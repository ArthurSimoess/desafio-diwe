/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import React from 'react';
import './cardMobileStyles.scss';
import { useNavigate } from 'react-router-dom';
import phone from '../../assets/images/smartphone.svg';
import trash from '../../assets/images/trash.svg';

function CardMobile({ contactList, setModal }) {
  const navigate = useNavigate();

  function createContactBtn() {
    navigate('/createContact');
  }

  function editBtn(id) {
    navigate(`/editContact/${Number(id)}`);
  }

  function openRemoveModal(id, name) {
    setModal({
      open: true,
      id,
      name,
    });
  }

  return (
    <div className="card-container">
      <button
        className="create-contact-btn"
        type="button"
        onClick={createContactBtn}
      >
        Adicionar novo contato
      </button>
      {
        contactList.map((contact) => (
          <div className="card-contact" key={contact.id}>
            <div className="info-contacts">
              <div>
                <h1>{contact.name}</h1>
                <p>{contact.email}</p>
              </div>
              <div>
                <img src={phone} alt="Smartphone icon" />
                <p>{contact.mobile}</p>
              </div>
            </div>
            <div className="edit-remove-btns">
              <button
                type="button"
                onClick={() => editBtn(contact.id)}
              >
                Editar
              </button>
              <button
                type="button"
                onClick={() => openRemoveModal(contact.id, contact.name)}
              >
                <img src={trash} alt="trash icon" />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

CardMobile.propTypes = {
  contactList: PropTypes.any,
  setModal: PropTypes.func.isRequired,
};

export default CardMobile;
