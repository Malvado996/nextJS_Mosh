

const UsersPage = async () => {

    interface User {
        id: number;
        name: string;
    }

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json();

    return (
        <>
            <h1>Ajaxs Minions</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UsersPage