import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/32656150?s=460&u=c863b43a8cec7af5e938c1caeb91c452329fd4c7&v=4" alt="Junior Polo" />
                <div>
                    <strong>Junior Polo</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores vitae voluptate ipsa rem, minus excepturi deleniti aliquid repellat architecto labore. Ex voluptatem vitae possimus asperiores ad nisi corrupti dignissimos praesentium.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim mollitia non deserunt nisi voluptatem sed expedita commodi fugit deleniti nobis facere autem quos impedit et ipsam, architecto similique, doloremque itaque.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;