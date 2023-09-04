import axios from 'axios';
import React from 'react'
interface params {
  params: { userId: string }
}
interface dataUser {
  id: number,
  email: string,
  first_name: 'Janet',
  last_name: 'Weaver',
  avatar: 'https://reqres.in/img/faces/2-image.jpg'
}

const detailuser = async (userId: string) => {
  const apiKey = 'de1481c9a083747758c7a241e87b1e09';

  const response = await axios(`https://api.themoviedb.org/3/movie/${userId}?api_key=${apiKey}`)
  return response.data
}


async function Page({ params }: params) {
  const data = await detailuser(params.userId)
  console.log("idddddddd", params.userId);
  console.log(data);
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>{
      <>
        <div style={{ display: "flex", gap: "15px", color: "GrayText" }}>
          <img src={imageBaseUrl + data.poster_path} alt="" />
          <div>
            <h1>TITULO: {data.title}</h1>
            <h3>LENGUAJE ORIGINAL : {data.original_language}</h3>
            <p>POPULARIDAD : {data.popularity}</p>
            <text>RESUMEN: {data.overview}</text>
            <p>PUNTUACION : {data.vote_average}</p>
          </div>
        </div>
      </>
    }</div>
  )
}

export default Page