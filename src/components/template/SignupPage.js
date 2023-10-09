'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'react-hot-toast';
import Loader from '@/components/module/Loader';

const SignupPage = () => {
  const router = useRouter();
  const[loading, setLoading]= useState(false);
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');
  const[rePassword, setRePassword]= useState('');

  const signupHandler = async(e) => {
    e.preventDefault();
    if(password !== rePassword) {
      toast.error('پسورد و تکرار آن برابر نیست');
      return;
    }
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setLoading(false);
    if(res.status===201) {
      router.push('/signin');
    } else {
      toast.error(data.error);
    }
  };

    return (
      <div className='flex flex-col items-center justify-center pt-12 text-primary text-sm'>
        <h4 className='text-2xl font-bold pb-5'>فرم ثبت نام</h4>
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
          <div className='form-items'>
            <label className='font-semibold'>تکرار رمز عبور:</label>
            <input
              type='password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              className='forms-input'
            />
          </div> 
          {loading ? <Loader /> : 
          <button className='form-button' onClick={signupHandler}>ثبت‌نام</button>}
        </form>
        <p className='pt-2 text-neutral'>
          حساب کاربری دارید؟
          <Link className='font-bold text-primary border-b border-b-2 border-primary pb-0.5 
          pr-0.5 hover:border-hovercolor' href="/signin">ورود</Link>
        </p>
        <Toaster position="top-center" />
    </div>
    );
};

export default SignupPage;