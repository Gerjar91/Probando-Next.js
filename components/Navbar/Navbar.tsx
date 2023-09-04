import React from 'react'
import style from "./Navbar.module.css"
import Link from 'next/link'
function Navbar() {
    return (
        <div className={style.navbar}>
            <h2>Next js App</h2>
            <ul>
                <Link href={"/"} className={style.link}>
                    <p>Home</p>
                </Link>
                <Link href={"/movies"} className={style.link}>
                    <p>Movies</p>
                </Link>

            </ul>
        </div>
    )
}

export default Navbar