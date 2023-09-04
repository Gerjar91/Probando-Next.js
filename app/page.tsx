"use cliente";
import axios from "axios";
import GetMovies from "../components/GetMoviesHome/GetMovies"

const usersDataHome = async () => {
  try {
    const apiKey = 'de1481c9a083747758c7a241e87b1e09';
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`);
    return response.data
  } catch (error) {
    console.log(error);
  }
}

async function homeCarousel() {
  const imagesCarouselList = []
  const imagesCarousel: any = await usersDataHome()
  const imageBaseUrlCarousel = 'https://image.tmdb.org/t/p/w500';
  for (let i = 0; i < 10; i++) {
    imagesCarouselList.push(imageBaseUrlCarousel + imagesCarousel.results[i].poster_path)
  }

return (
    <>
    <GetMovies
      images={imagesCarouselList} />
    </>                    
  
  )
}

export default homeCarousel;
