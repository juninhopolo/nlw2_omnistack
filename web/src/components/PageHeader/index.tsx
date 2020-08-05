import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

//Define o formato das tipagens de um objeto/componente;
interface PageHeaderProps {
    title: string;
}

//React FC: componentes escritos em formato de função;
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {/* .children é uma prop automática dos componentes React que
                    armazenam o conteúdo inserido dentro do componente.
                    <MeuComponente>valor dos childrens</MeuComponente>
                */}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;