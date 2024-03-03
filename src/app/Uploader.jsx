import React from 'react'

const Uploader = () => {
	const handleUpload = async formData => {
		'use server'
		const data = formData.get('image')
		console.log(data)
	}

	return (
		<div>
			<form action={handleUpload}>
				<input name='image' type='file' />
				<button type='submit'>Upload</button>
			</form>
		</div>
	)
}

export default Uploader
