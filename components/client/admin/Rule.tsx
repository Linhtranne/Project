import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdminPage = ({ children }: { children: ReactNode }) => {
  const { user, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn || user?.role !== 'admin') {
      router.push('/admin/login');
    }
  }, [isSignedIn, user, router]);

  return <>{isSignedIn && user?.role === 'admin' && children}</>;
};

export default AdminPage;
