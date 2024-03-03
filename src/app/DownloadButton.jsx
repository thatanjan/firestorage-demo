'use client'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { storage } from './firebase'

const DownloadButton = ({ url }) => {
	console.log(url)

	const handleClick = async () => {
		try {
			const response = await fetch(url)
			console.log(response.blob)
			const blob = await response.blob()

			const blobUrl = URL.createObjectURL(blob)

			const a = document.createElement('a')
			a.href = blobUrl
			a.download = 'image.jpg'
			a.click()

			URL.revokeObjectURL(blobUrl) // Clear the blob url
		} catch (error) {
			console.error('Error downloading the file:', error)
		}
	}

	const handleDelte = async () => {
		try {
			await deleteObject(ref(storage, url))
		} catch (error) {
			console.error('Error deleting the file:', error)
		}
	}

	return (
		<div>
			<button onClick={handleClick}>Download</button>
			<button onClick={handleDelte}>Delete</button>
		</div>
	)
}

export default DownloadButton
