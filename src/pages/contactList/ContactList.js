import React from 'react';
import ButtonTable from '../../components/buttonTable/BtnTable';
import Header from '../../components/header/Header';
import './contactListStyle.scss';
import trash from '../../assets/images/trash.svg';
import editIcon from '../../assets/images/edit.svg';

function ContactList() {
  return (
    <main className="contactList-container">
      <Header path="/" />
      <section className="list-container">
        <div className="header-list">
          <h1>Listagem de Contatos</h1>
          <button
            type="button"
          >
            Adicionar novo contato
          </button>
        </div>
        <table className="table">
          <thead className="th-head">
            <tr>
              <th>
                <ButtonTable
                  title="#"
                />
              </th>
              <th>
                <ButtonTable
                  title="Nome"
                />
              </th>
              <th>
                <ButtonTable
                  title="Celular"
                />
              </th>
              <th>
                <ButtonTable
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
                  <img src={trash} alt="Papel e caneta simbolizando uma edição" />
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
            <tr>
              <td>02</td>
              <td>Parker</td>
              <td>(31) 3333-32232</td>
              <td>aefoeijae@gmail.com</td>
            </tr>
            <tr>
              <td>03</td>
              <td>Parker</td>
              <td>(31) 3333-32232</td>
              <td>aefoeijae@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ContactList;
