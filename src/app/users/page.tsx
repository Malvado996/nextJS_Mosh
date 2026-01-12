const UsersPage = async () => {
    interface User {
        id: number;
        name: string;
    }

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            cache: 'no-store'
        }
    );

    // Optional: handle errors
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    const users: User[] = await res.json();

    return (
        <>
            <h1>Ajaxs Minions</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default UsersPage;