
import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([])

  function addUserHandler(uName, uAge) {
    setUserList(prevUserList => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  function deleteUser(id){
    let users = userList.filter(item=>{
      if(item.id !== id){
        return [item]
      }
    })
    setUserList(users)
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} onDeleteUser={deleteUser}/>
    </div>
  );
}

export default App;
