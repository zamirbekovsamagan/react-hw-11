import { useState } from 'react'
import Card from '../UI/Card'
import DeleteModal from '../UI/DeleteModal'
import Button from '../UI/Button'
import styles from './UsersList.module.css'

function UsersList(props) {

    const [click, setClick] = useState(false)

    function deleteModal() {
        setClick(true)
    }
    function noDelete() {
        setClick(false)
    }


    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {click && <DeleteModal onDelete={props.onDeleteUser} onNoDelete={noDelete} id={user.id} />}
                        {user.name} - {user.age} years old
                        <Button onClick={deleteModal}>Delete</Button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList