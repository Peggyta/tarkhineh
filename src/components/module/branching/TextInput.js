import React from 'react';

function TextInput({
    name,
    title,
    formData,
    setFormData,
    textarea = false,
  }) {
    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
  
    return (
      <div className='w-full'>
       {textarea ? (
        <textarea
        type='text'
        name={name}
        value={formData[name]}
        placeholder={title}
        onChange={changeHandler}
        className='border border-bordercolor rounded-md lg:w-72 w-full text-sm py-2 pr-3' />
       ): (
        <input
        type='text'
        name={name}
        value={formData[name]}
        placeholder={title}
        onChange={changeHandler}
        className='border border-bordercolor rounded-md lg:w-72 w-full text-sm py-2 pr-3' />
       )}
      </div>
    );
  }
  
  export default TextInput;
  