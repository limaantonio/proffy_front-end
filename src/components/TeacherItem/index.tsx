import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
    <header>
     <img src="https://avatars3.githubusercontent.com/u/40245102?s=460&u=e0a4a756b23faa7fb2828213f1fbed6875a035ba&v=4" alt="Antonio"/>
       <div>
         <strong>Antonio Carlos</strong>
         <span>Quimica</span>
       </div>
   </header>
   <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> <br/>Velit inventore nihil minima repellendus. Laudantium consequatur, alias dicta sapiente laborum ab omnis delectus expedita dignissimos officia, commodi voluptas, at incidunt aliquid?
   </p>

   <footer>
     <p>
       Preço/hora
       <strong>R$ 20</strong>
     </p>
     <button type="button">
       <img src={whatsappIcon} alt="Whatsapp"/>
       Entrar em contato
     </button>
   </footer>
  </article>
  )
}

export default TeacherItem;