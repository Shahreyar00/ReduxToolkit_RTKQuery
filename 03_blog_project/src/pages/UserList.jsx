import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../redux/usersSlice";

const UserList = () => {
    const users = useSelector(selectAllUsers);

    return (
        <section>
            <h3>Users:</h3>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default UserList