import { database } from "../Assets/api";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../Assets/usercontext";

const Users = () => {
  const { username } = useParams();
  const [allUsers, setAllUsers] = useState([]);
  const { setUser, user } = useContext(UserContext);
  useEffect(() => {
    database
      .get("/users", {
        params: {
          username: username,
        },
      })
      .then((res) => {
        setAllUsers(res.data.users);
      });
  });
  return (
    <section className="Main">
      {!allUsers.length ? (
        <p>...Loading</p>
      ) : (
        <ul className="allItemsList">
          {allUsers.map((userData) => {
            return (
              <div key={userData.username} className="itemCard">
                <section className="itemImage">
                  <img src={userData.avatar_url} alt="user_image" />
                </section>
                <section className="itemText">
                  <p>username: {userData.username}</p>
                  <p>kudos: {userData.kudos} </p>
                </section>
                <button
                  onClick={() => {
                    setUser(userData);
                    console.log(user);
                  }}
                >
                  Select This User
                </button>
                <button>Give Kudos</button>
              </div>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Users;
