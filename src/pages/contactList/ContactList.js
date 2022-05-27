import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnHeaderTable from '../../components/btnHeaderTable/BtnHeaderTable';
import Header from '../../components/header/Header';
import './contactListStyle.scss';
import trash from '../../assets/images/trash.svg';
import editIcon from '../../assets/images/edit.svg';
import { getContact } from '../../service/api';

function ContactList() {
  const navigate = useNavigate();
  const [contactList, setContactList] = useState([]);

  function createContactBtn() {
    navigate('/createContact');
  }

  function editBtn({ target }) {
    const id = target.name;
    navigate(`/editContact/${id}`);
  }

  useEffect(() => {
    (async () => {
      const result = await getContact();
      if (!result.data) return;
      setContactList(result.data);
    })();
  }, []);

  return (
    <main className="contactList-container">
      <Header path="/" />
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
                    >
                      <img src={trash} alt="Lata de lixo simbolizando uma remoção" />
                      Remover
                    </button>
                    <button
                      type="button"
                      name={contact.id}
                      onClick={editBtn}
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
