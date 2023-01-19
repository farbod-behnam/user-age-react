import { Fragment, useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';
import { User } from './models/User.model';

function App() {

  const [usersList, setUsersList] = useState<User[]>([]);

  const addUserHandler = (user: User): void => {

    setUsersList(prevUsersList => {

      const usersList = [...prevUsersList];
      usersList.push(user);

      return usersList;

    })

  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </Fragment>
  );
}

export default App;
