// RODAPE.JS

import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="blank">
                            <img src="/imagens/fb.png" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="blank">
                            <img src="/imagens/tw.png" alt="twitter" />
                        </a>
                        <li>
                            <a href="instagram.com" target="blank">
                                <img src="/imagens/ig.png" alt="instagran" />
                            </a>

                            <li>
                                <a href="https://github.com/AgnaldoSouza47" target="blank">
                                    <img src="/imagens/github.png" alt="github" />
                                </a>

                            </li>
                        </li>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    &copy; Desenvolvido por Agnaldo Souza
                </p>
            </section>
        </footer>
    )
}
export default Rodape
