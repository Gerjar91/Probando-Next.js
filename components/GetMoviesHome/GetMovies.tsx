"use client";
import React, { useState } from 'react'
import style from "./page.module.css"




function GetMovies({ images }: any) {

    const [currentIndex, setcurrentIndex] = useState(0)

    console.log(currentIndex);
    const nextSilder = () => {

        setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        console.log("aaaaa",(prevIndex + 1) % images.length);

    }
    const prevSilder = () => {
        setcurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )

    }
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
            <div className={style.leftArrow} onClick={prevSilder} >&#10092;
            </div>
            <div className={style.rightArrow} onClick={nextSilder}>&#10093;
            </div>
            <div className={style.mainContainer}>
                <div className={style.containerImagesLeft}>
                    <img src={images[prevIndex]} alt="" />
                </div>
                <div className={style.containerImages}>
                    <img src={images[currentIndex]} alt="" />
                </div>
                <div className={style.containerImagesLeft}>
                    <img src={images[nextIndex]} alt="" />
                </div>

            </div >
        </div>)
}

export default GetMovies