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
      <div>
       {textarea ? (
        <textarea
        type='text'
        name={name}
        value={formData[name]}
        onChange={changeHandler} />
       ): (
        <input
        type='text'
        name={name}
        value={formData[name]}
        placeholder={title}
        onChange={changeHandler} />
       )}
      </div>
    );
  }
  
  export default TextInput;
  