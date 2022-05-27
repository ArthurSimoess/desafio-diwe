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
  const [contactList, setContactList] = useState();

  function createContactBtn() {
    navigate('/createContact');
  }

  useEffect(() => {
    (async () => {
      const { data } = await getContact();
      setContactList(data);
      console.log(contactList);
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
            <tr>
              <td>01</td>
              <td>Parker</td>
              <td>(31) 3333-32232</td>
              <td>aefoeijae@gmail.com</td>
              <td className="btn-body">
                <button
                  type="button"
                >
                  <img src={trash} alt="Lata de lixo simbolizando uma remoção" />
                  Remover
                </button>
                <button
                  type="button"
                >
                  <img src={editIcon} alt="Papel e caneta simbolizando uma edição" />
                  Editar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ContactList;
