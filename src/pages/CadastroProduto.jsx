import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Produtos from '../pages/Produtos';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/produtos"

const CadastroProduto = () => {
  const navigate = useNavigate()

    const [nomeDoce, setNomeDoce] = useState ("") 
    const [tipo, setTipo] = useState ("") 
    const [preco, setPreco] = useState ("")  

    const handleCadastrar = async () => {
        if(nomeDoce != "" && tipo != "" && preco != ""){
            const produtos = {nomeDoce, tipo, preco};
            const res = await fetch(url, {
              method:"POST",
              headers: {"Content-Type": "application/json"},
              body:JSON.stringify(produtos),
            });
            setNomeDoce("")
            setTipo("")
            setPreco("")
            alert("cadastrado com suceso")
            navigate('/produtos')
            
        } else{
            alert("Cadastrado com sucesso")
        }
    } 

  return (
    <div style={{backgroundColor:"pink", minHeight:"100vh"}}>
      <NavBar/>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{ width: "80%"}}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar produto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Produtos</h4>

          {/**caixinha do nome */}
        <FloatingLabel
          controlId="floatingInputName"
          label="Nome"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Digite nome do doce" value={nomeDoce} onChange={(e) => {setNomeDoce(e.target.value)}}/>
        </FloatingLabel>

            {/**caixinha do categoria */}
        <FloatingLabel
          controlId="floatingInputName"
          label="Tipo"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Digite tipo" value={tipo} onChange={(e) => {setTipo(e.target.value)}}/>
          </FloatingLabel>

          {/**caixinha preço */}
        <FloatingLabel
          controlId="floatingInputName"
          label="Preço"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Digite valor do alimento" value={preco} onChange={(e) => {setPreco(e.target.value)}}/>
        </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Modal.Footer>
        </div>
      </div>
    </div>
  )
}
export default CadastroProduto