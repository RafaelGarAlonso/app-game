import { UserContext } from './UserContext';
import { INIT_USER, INIT_USERS_TABLE } from '../../constants/users'

export const UserProvider = ({ children }) => {

  const getUser = () => {
    const localStorageData = localStorage.getItem('currentUser');
    return localStorageData ? JSON.parse(localStorageData) : INIT_USER;
  };

  const setNewUserSession = ({ userName }) => {
    const listOfUsers = getListOfUsers();

    for (const [index, user] of listOfUsers.entries()) {
      if (user.userName === userName) {
        const { userName, points } = listOfUsers[index];
        localStorage.setItem('currentUser', JSON.stringify({ userName, points }));
        return false;
      }
    };

    localStorage.setItem('currentUser', JSON.stringify({ userName, points: 0 }));
    return true;
  };

  const getAppLoaded = () => {
    return sessionStorage.getItem('appLoaded');
  };

  const setAppLoaded = (loaded) => {
    sessionStorage.setItem('appLoaded', loaded);
  };

  const userEarnPoints = () => {
    const user = getUser();
    localStorage.setItem('currentUser', JSON.stringify({ userName: user.userName, points: user.points + 1 }));
  };

  const getListOfUsers = () => {
    const listOfUsers = localStorage.getItem('listOfUsers');
    return listOfUsers ? JSON.parse(listOfUsers) : null;
  };

  const setNewListOfUsers = (listOfUsers = INIT_USERS_TABLE) => {
    localStorage.setItem('listOfUsers', JSON.stringify(listOfUsers));
  };

  const setPointsToListUsers = (currentUser) => {
    const listOfUsers = getListOfUsers();

    for (let [index, user] of listOfUsers.entries()) {
      if (user.userName === currentUser.userName) {
        listOfUsers[index].points = currentUser.points;
        break;
      }
    };

    setNewListOfUsers(listOfUsers);
  };

  return (
    <UserContext.Provider value={{
      setNewUserSession,
      getUser,
      setAppLoaded,
      getAppLoaded,
      userEarnPoints,
      getListOfUsers,
      setNewListOfUsers,
      setPointsToListUsers
    }}>
      {children}
    </UserContext.Provider>
  )
}