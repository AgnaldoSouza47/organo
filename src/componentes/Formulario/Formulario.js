//index.js do formulário
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { useState } from 'react'


const Formulario = (props) => {


  const [nome, setNome] = useState('')
  const [profissao, setProfissao] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {

    evento.preventDefault()

    props.aoColaboradorCadastrado({
      nome,
      profissao,
      imagem,
      time

    })
setNome('')
setProfissao('')
setImagem('')
setTime('')
  }
  return (
    <section className="formulario">

      <form onSubmit={aoSalvar}>

        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={valor => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Profissão"
          placeholder="Digite o seu cargo"
          valor={profissao}
          aoAlterar={valor => setProfissao(valor)}

        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterar={valor => setImagem(valor)}

        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterar={valor => setTime(valor)}

        />
        <Botao>Criar Card </Botao>

      </form>

    </section>

  )

}
export default Formulario
