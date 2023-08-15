import '/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    sex: '',
    age: '',
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-purple-400 to-pink-400">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Register-Background.png')" }}
          >
            <div>
              <Image src="/blog.png" alt="Blog" width={400} height={400} />
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">Create your account. It’s free and only takes a minute</p>
            <form onSubmit={handleRegister}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-400 py-1 px-2"
                  name="firstName"
                />
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-400 py-1 px-2"
                  name="lastName"
                />
              </div>
              <div className="mt-5">
                <input
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="password"
                />
              </div>
              <div className="mt-5">
                <input
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="confirmPassword"
                />
              </div>
              <div className="mt-5">
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="email"
                />
              </div>
              <div className="mt-5">
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Mobile"
                  className="border border-gray-400 py-1 px-2 w-full"
                  name="mobile"
                />
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <select
                  onChange={handleInputChange}
                  className="border border-gray-400 py-1 px-2"
                  name="sex"
                >
                  <option value="">Select Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Age"
                  className="border border-gray-400 py-1 px-2"
                  name="age"
                />
              </div>
              <div className="mt-5">
                <button onClick={handleRegister} className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
              <div className='text-center'>
                <Link href="/">
                  <button className='mt-5'>Log in</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
