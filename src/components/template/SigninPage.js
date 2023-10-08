'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import Loader from '../icons/Loader';

const SigninPage = () => {
  const[loading, setLoading]= useState(false);
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

    return (
      <div className='flex flex-col items-center justify-center pt-12 text-primary text-sm'>
        <h4 className='text-2xl font-bold pb-5'>فرم ورود</h4>
        <form className='flex flex-col bg-white border border-2 border-primary rounded-md w-64 h-96 px-6 justify-evenly py-4'>
          <div className='form-items'>
            <label className='font-semibold'>ایمیل:</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='forms-input'
            />
          </div>
          <div className='form-items'>
            <label className='font-semibold'>رمز عبور:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='forms-input'
            />
          </div>
          {loading ? <Loader /> : <button className='form-button'>ورود</button>}
        </form>
        <p className='pt-2 text-neutral'>
          حساب کاربری ندارید؟
          <Link className='font-bold text-primary border-b border-b-2 border-primary pb-0.5 
          pr-0.5 hover:border-hovercolor' href="/signup">ثبت نام</Link>
        </p>
    </div>
    );
};

export default SigninPage;