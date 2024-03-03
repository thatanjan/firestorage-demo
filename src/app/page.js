import Image from 'next/image'
import styles from './page.module.css'
import { imageRef, storage } from './firebase'
import {
	getBlob,
	getBytes,
	getDownloadURL,
	listAll,
	ref,
} from 'firebase/storage'
import Uploader from './Uploader'
import DownloadButton from './DownloadButton'

export default async function Page() {
	// const data = await getBlob(imageRef)
	const data = await listAll(ref(storage, 'images'))
	// getBytes(imageRef)
	// console.log(data.items.map(item => item.root))

	const url = await getDownloadURL(imageRef)

	// fetch(url, {
	// 	method: 'GET',
	// 	headers: {
	// 		'Content-Type': 'image/jpeg',
	// 	},
	// })

	return (
		<main>
			{/* <img src={url} style={{ width: '100%', height: 'auto' }} /> */}
			<Uploader />

			<Image
				src={url}
				alt='image'
				width={500}
				height={500}
				// loader={({ src }) => src}
			/>
			<DownloadButton url={url} />
		</main>
	)
}
