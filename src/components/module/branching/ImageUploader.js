'use client';

import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG","JPEG"];

function ImageUploader() {
const [file, setFile] = useState(null);
const handleChange = file => {
	setFile(file);
};
return (
	<div className="text-raven">
	<FileUploader
		handleChange={handleChange}
		name="file"
		types={fileTypes}
        multiple={false}
        lable="تصویری از ملک را بارگزاری کنید..."
        hoverTitle="تصویر را اینجا قرار دهید"
        maxSize={1}
	/>
    <p>تصویری از ملک را بارگزاری کنید...</p>
	</div>
	
);
}

export default ImageUploader;
