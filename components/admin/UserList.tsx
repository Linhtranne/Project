import { useUser } from '@clerk/nextjs';
import { useState } from 'react';
const UserList = () => {
  const { users } = useUser();
  const [sortOrder, setSortOrder] = useState('asc');
  const sortedUsers = [...users].sort((a, b) => sortOrder === 'asc' ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username));
  const lockUser = async (userId: string) => {
    await fetch(`/api/users/${userId}/lock`, { method: 'POST' });
  };
  return (
    <div>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
      </button>
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.status === 'active' ? 'Active' : 'Locked'}</td>
              <td>
                <button onClick={() => lockUser(user.id)}>
                  {user.status === 'active' ? 'Lock' : 'Unlock'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
