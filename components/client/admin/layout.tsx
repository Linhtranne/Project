import { ReactNode } from 'react';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
const [searchQuery, setSearchQuery] = useState('');
const filteredUsers = users.filter((user) =>
  user.username.toLowerCase().includes(searchQuery.toLowerCase())
);
const AdminLayout = ({ children }: { children: ReactNode }) => {
    
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white">
        <nav className="p-4">
          <ul>
            <li><Link href="/admin/users">Users</Link></li>
            <li><Link href="/admin/posts">Posts</Link></li>
            <li><Link href="/admin/groups">Groups</Link></li>
            <li><Link href="/admin/reports">Reports</Link></li>
            <li><Link href="/admin/ads">Ads</Link></li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="bg-gray-200 p-4 shadow-md">Admin Dashboard</header>
        <main className="p-4">{children}</main>
      </div>
      <header className="bg-gray-200 p-4 shadow-md">
    <div className="flex justify-between">
      <h1>Admin Dashboard</h1>
      <SignOutButton />
    </div>
  </header>
    </div>
    
  );
};

export default AdminLayout;
