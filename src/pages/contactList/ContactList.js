import React from 'react';
import ButtonTable from '../../components/buttonTable/BtnTable';
import Header from '../../components/header/Header';
import './contactListStyle.scss';

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
          <thead>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Peter</td>
              <td>Parker</td>
              <td>Spiderman</td>
            </tr>
            <tr>
              <td>Bruce</td>
              <td>Wayne</td>
              <td>Batman</td>
            </tr>
            <tr>
              <td>Clark</td>
              <td>Kent</td>
              <td>Superman</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default ContactList;
