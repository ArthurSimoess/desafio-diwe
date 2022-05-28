import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnHeaderTable from '../../components/btnHeaderTable/BtnHeaderTable';
import Header from '../../components/header/Header';
import './contactListStyle.scss';
import trash from '../../assets/images/trash.svg';
import editIcon from '../../assets/images/edit.svg';
import { getContact } from '../../service/api';
import RemoveModal from '../../components/removeModal/removeModal';
import MyContext from '../../context/MyContext';
import SuccessMessage from '../../components/successMessage/SuccessMessage';

function ContactList() {
  const navigate = useNavigate();
  const [contactList, setContactList] = useState([]);
  const {
    modal, setModal, message, setMessage,
  } = useContext(MyContext);
  const [change, setChange] = useState(false);

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

  useEffect(() => {
    (async () => {
      const result = await getContact();
      if (!result.data) return;
      setContactList(result.data);
    })();
  }, [change]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('teste setTimeOut');
      setMessage({
        show: false,
        name: '',
        action: '',
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, [change]);

  return (
    <main className="contactList-container">
      {
        modal.open && <RemoveModal change={change} setChange={setChange} />
      }
      <Header path="/" />
      { message.show && (
        <SuccessMessage
          name={message.name}
          action={message.action}
        />
      )}
      <section className="list-container">
        <div className="header-list">
          <h1>Listagem de Contatos</h1>
          <button
            type="button"
            onClick={createContactBtn}
          >
            Adicionar novo contato
          </button>
        </div>
        <table className="table">
          <thead className="th-head">
            <tr>
              <th>
                <BtnHeaderTable
                  title="#"
                />
              </th>
              <th>
                <BtnHeaderTable
                  title="Nome"
                />
              </th>
              <th>
                <BtnHeaderTable
                  title="Celular"
                />
              </th>
              <th>
                <BtnHeaderTable
                  title="Email"
                />
              </th>
              <th>
                <p>Ações</p>
              </th>
            </tr>
          </thead>
          <tbody className="tb-body">
            {
              contactList.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>{contact.name}</td>
                  <td>{contact.mobile}</td>
                  <td>{contact.email}</td>
                  <td className="btn-body">
                    <button
                      type="button"
                      name={contact.id}
                      onClick={() => openRemoveModal(contact.id, contact.name)}
                    >
                      <img src={trash} alt="Lata de lixo simbolizando uma remoção" />
                      Remover
                    </button>
                    <button
                      type="button"
                      onClick={() => editBtn(contact.id)}
                    >
                      <img src={editIcon} alt="Papel e caneta simbolizando uma edição" />
                      Editar
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ContactList;
