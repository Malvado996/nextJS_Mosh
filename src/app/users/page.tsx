const UsersPage = async () => {
    interface User {
        id: number;
        name: string;
    }

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            revalidate: 10,  // top-level works fine
        } as RequestInit & { revalidate?: number }  // quick assertion
    );

    // Optional: handle errors
    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    const users: User[] = await res.json();

    return (
        <>
            <h1>Ajaxs Minions</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

export default UsersPage;