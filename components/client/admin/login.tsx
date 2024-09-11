import { SignIn } from '@clerk/nextjs';

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn path="/admin/login" routing="path" signUpUrl="/admin/signup" />
    </div>
  );
};

export default AdminLogin;
