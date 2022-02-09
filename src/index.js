import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Contact = (props) => {
  const { name, phone, email } = props;

  return (
    <div>
      <h3>{name}</h3>
      <h4>{phone}</h4>
      <h4>{email}</h4>
      <button>Delete</button>
    </div>
  );
};

export const App = (
  <>
    <h1 className="text-center">My contacts list 📱</h1>
    <div>
      <Contact
        name="Guillaume"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
      />
      <Contact name="Jean" phone="06 00 00 00 00" email="email@hotmail.fr" />
      <Contact
        name="Annabelle"
        phone="06 00 00 00 00"
        email="email@hotmail.fr"
      />
      <Contact name="Anna" phone="06 00 00 00 00" email="email@hotmail.fr" />
      <Contact name="Thomas" phone="06 00 00 00 00" email="email@hotmail.fr" />
    </div>
  </>
);

ReactDOM.render(App, document.getElementById('root'));
