import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import {useState, useEffect} from "react";
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:5000/produtos"

const Produtos = () => {

  async function atualizarData(){
    try{
      const res = await fetch(url)
      const produtos = await res.json()
      setProdutos(produtos)
    }
    catch(error){
      console.log(error.message)
    }
  }

  const navigate = useNavigate()

  const [produtos, setProdutos] = useState ([]) 


  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch(url)
        const produtos = await res.json()
        setProdutos(produtos)
      }
      catch(error){
        console.log(error.message)
      }
    }
    fetchData()
  }, []);

  return (
    <div style={{backgroundColor:"pink", minHeight:"100vh"}}>
      <NavBar />
      <Container>
      <div className='d-grid col-4 gap-2'>
        <h1>Lista de Alimentos</h1>
        <Button variant="primary" size='lg' className='mb-3 d-inline-flex justify-content-center' onClick={() => {
            navigate('/cadastroProduto')
        }}><span className='material-symbols-outlined flex' style={{fontSize:"30px"}}></span>cadastrar doce</Button>{' '}
             
         </div>
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produtos)=>(
        <tr key={produtos.id}>
          <td>{produtos.id}</td>
          <td>{produtos.nomeDoce}</td>
          <td>{produtos.tipo}</td>
          <td>{produtos.preco}</td>
          <td>
          <Button
                variant="danger"
                onClick={async () => {
                const res = await fetch(`http://localhost:5000/produtos/${produtos.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                });
                const doceRemovido = await res.json()
                alert(`Doce ${doceRemovido.nomeDoce} foi removido`)
                atualizarData()
                }}
                >
              Excluir
            </Button>
            </td>
        </tr>
        ))}
      </tbody>
    </Table>
      </Container>
    </div>
  )
}

export default Produtos