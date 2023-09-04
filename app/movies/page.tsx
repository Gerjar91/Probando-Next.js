import axios from 'axios'
import React, { useState } from 'react'
import style from "./page.module.css"
import Link from 'next/link';

interface UserData {
  title: string;
  id: number;
  release_date: string;
  vote_average: number;
  backdrop_path:string
}


const usersData = async () => {
  try {
    const apiKey = 'de1481c9a083747758c7a241e87b1e09';
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);
    return response.data
  } catch (error) {
    console.log(error);

  }
}


async function users() {
  const userData: any = await usersData()
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';  
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <div className={style.containerCard}>
        {
          userData.results.map((item: UserData) =>
            <Link href={`/movies/${item.id}`} className={style.link}>
              <div key={item.id} className={style.card}>
                <h2>{item.title}</h2>
                <h3>Release date : {item.release_date}</h3>
                <h3>{item.vote_average} ⭐⭐</h3>
                <img src={imageBaseUrl + item.backdrop_path} alt="" />
              </div>
            </Link>
          ) 
        }</div>
    </div>
  )
}

export default users