'use client'

import { useState } from 'react';
import styles from './page.module.css';

export default function Produtos() {
    const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Mouse", preco: 80 },
        { id: 3, nome: "Teclado", preco: 150 },
        { id: 4, nome: "Monitor", preco: 1200 },
        { id: 5, nome: "Impressora", preco: 900 },
        { id: 6, nome: "Cadeira Gamer", preco: 1800 },
        { id: 7, nome: "Headset", preco: 300 },
        { id: 8, nome: "Webcam", preco: 600 },
        { id: 9, nome: "HD Externo", preco: 400 },
        { id: 10, nome: "Mesa Digitalizadora", preco: 750 }
    ];

    const [busca, setBusca] = useState('');

    const produtosFiltro = produtos.filter( prod => prod.nome.toLowerCase().includes(busca.toLowerCase()));
    const [show, setShow] = useState(false)
    

    // const numeros = [1,2,3,4,5,6,7,8,9,10];
    // const pares = numeros.filter( num => (num%2===0));
    // console.log(numeros)
    // console.log(pares)

    // const nomes = ['mavi', 'juju', 'paulinha', 'arthur', 'nessa'];
    // const inic = nomes.filter(name => (name.toLowerCase().startsWith('a')))
    // console.log(inic)

    return (
        <div className={styles.divTitulo}>
            <h1>Produtos</h1>
            <input type= "text" 
            onChange={e => setBusca(e.target.value)}
            value={busca}
            />
        {show && <div className={styles.modal}
        onClick={() => setShow(false)}>

        <CardProduto
        nome="Teclado"
        />
        </div>}
        <table className={styles.tbl}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {produtosFiltro.map((prod)=> (
                    <tr key={prod.id}>
                        <td>{prod.id}</td>
                        <td>{prod.nome}</td>
                        <td>{prod.preco.toLocaleString('pt-br', {style: 'currency',currency: 'BRL',})}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}