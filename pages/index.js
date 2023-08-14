import React from 'react';
import Image from 'next/image';
import '/app/globals.css';
import Link from "next/link";

function Login() {
  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-purple-400 to-pink-400">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div>
            <Image src="/blog.png" alt="Blog" width={400} height={400} />
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12 rounded-lg">
            <h2 className="text-3xl mb-4">Log In</h2>
            <p className="mb-4">Enter your credentials to log in</p>
            <form action="#">
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <button className="w-full bg-purple-500 py-3 text-center text-white">Log In</button>
              </div>
              <div className='mt-5 text-center'>
                <Link href="/signup">
                  <div><button>Sign up</button></div>
               </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
