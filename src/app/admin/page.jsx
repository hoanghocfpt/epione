'use client'
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
const AdminPage = () => {
    const [value, setValue] = useState('');
    
    const modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image', 'video'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ]
    };  
    return (
        <div className=''>
            <ReactQuill className='h-72' theme='snow' value={value} onChange={setValue} modules={modules} />
        </div>
    );
};

export default AdminPage;