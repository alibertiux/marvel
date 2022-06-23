import React, { useEffect, useState } from 'react'
import axios from 'axios'

export  const Characteres = () => {
	const [characters, setCharacter] = useState([]);

	// API_URL = 'https://gateway.marvel.com/v1/public/characters'
	// PUBLIC_KEY = 'da0c5b9b0370b60eca6d4e984fafbb28'
	// PRIVATE_KEY = 'a03f9638ed67200624ae2c05467bf960b83dd226'
	// ts: 1
	// original 1a03f9638ed67200624ae2c05467bf960b83dd226da0c5b9b0370b60eca6d4e984fafbb28
	// MD5 62474964ed320649cf3504e76675fbcc
	// Base64 MWEwM2Y5NjM4ZWQ2NzIwMDYyNGFlMmMwNTQ2N2JmOTYwYjgzZGQyMjZkYTBjNWI5YjAzNzBiNjBlY2E2ZDRlOTg0ZmFmYmIyOA==
	// Sha1 07f966267617391b4aca0ddbad973fbc4bea9e17

	const getCharacters = () => {
		axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=da0c5b9b0370b60eca6d4e984fafbb28&hash=62474964ed320649cf3504e76675fbcc`)
		.then(res => {
			//console.log(res.data.data.results);
			setCharacter(res.data.data.results)
		})
	}
	useEffect(getCharacters, [])

	return (
		<div>
			Characteres

			{characters.map((c) => (
				<div>
					<p> {c.name} </p>
					{/* {const imagen = c.thumbnail.path+"."+c.thumbnail.extension} */}
					<img scr= {`${c.thumbnail.path}.${c.thumbnail.extension}`} alt="imagen" />
					{/* {console.log(c.thumbnail.path+".jpg")} */}
				</div>
			))}
		</div>
	)
}
//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a03f9638ed67200624ae2c05467bf960b83dd226
//<img scr="http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg" alt="imagen">