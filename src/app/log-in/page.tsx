"use client"
import Image from 'next/image';
export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 right-0 h-48 bg-no-repeat bg-cover bg-center overflow-hidden">
        {/* Add a background image here if needed */}
        <Image src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/YTxDupKsU8j.png" alt="Threads Background" layout="fill" />
      </div>
      <div className="flex flex-col items-center justify-center z-10">
        <h1 className="text-center text-lg font-semibold">
          Đăng nhập bằng tài khoản Instagram
        </h1>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Tên người dùng, số điện thoại hoặc email"
            className="block w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="block w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
          />
          <button className="w-80 bg-black text-white py-2 rounded-md hover:bg-opacity-90">
            Đăng nhập
          </button>
        </div>

        <p className="mt-4 text-gray-500">Bạn quên mật khẩu ư?</p>

        <div className="flex items-center my-4">
          <hr className="w-24 border-gray-300" />
          <span className="px-2 text-gray-500">hoặc</span>
          <hr className="w-24 border-gray-300" />
        </div>

        <button className="flex items-center justify-center w-80 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          <Image src="/path-to-instagram-logo.png" width={24} height={24} alt="Instagram" />
          <span className="ml-2">Tiếp tục bằng Instagram</span>
        </button>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 Điều khoản của Threads | Chính sách quyền riêng tư | Chính sách cookie | Báo cáo sự cố
      </div>

      <div className="mt-4">
        <Image src="/path-to-qr-code.png" alt="QR Code" width={80} height={80} />
        <p className="text-sm">Quét để tải ứng dụng</p>
      </div>
    </div>
  );
}
