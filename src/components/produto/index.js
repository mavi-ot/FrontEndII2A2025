import styles from "./produto.module.css";

export default function produto({ id, nome, preco }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.titulo}>{id} - {nome}</h2>
            <p className={styles.preco}>{preco}</p>
        </div>
    )
}