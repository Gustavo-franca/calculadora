import React from 'react';

function Header() {

    return(
        <header>
            <div className="nav">
                <div className="nav-header">
                    <div className="nav-icon">
                        <span className="iconify nav-icon" data-icon="ei:navicon" data-inline="false"></span>
                    </div>
                    <h2 className="mode">Padrão</h2>
                </div>

                <nav className="nav-toggle">
                        <li className="sub-title"><h3>Calculadora</h3></li>
                        <li className="selected">
                            <span className="iconify" data-icon="icons8:calculator" data-inline="false"></span>
                            <p><a href="">Padrão</a></p>
                        </li>
                        <li>
                            <span className="iconify" data-icon="icons8:calculator" data-inline="false"></span>
                            <p><a href="">Padrão</a></p>
                        </li>
                    
                        <div className="about">
                            <a href=""><h3>Sobre</h3></a> 
                        </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;