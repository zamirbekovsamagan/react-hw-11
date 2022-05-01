import Button from './Button'
import Card from './Card'
import styles from './DeleteModal.module.css'

function DeleteModal(props) {
    return (
        <div className={styles.delete_backdrop} onClick={props.onNoDelete}>
            <Card className={styles.delete_modal}>
                <header className={styles.delete_header}>
                    <h2>Deleting a user</h2>
                </header>
                <div className={styles.delete_content}>
                    <p>Do you really want to delete?</p>
                </div>
                <footer className={styles.delete_actions}>
                    <Button onClick={() => props.onDelete(props.id)}>Yes</Button>
                    <Button onClick={props.onNoDelete}>No</Button>
                </footer>
            </Card>
        </div>
    )
}

export default DeleteModal

