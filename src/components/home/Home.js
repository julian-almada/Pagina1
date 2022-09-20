import React from 'react'
import './Home.css'



const Home = () => {
  return (
    <main>

        <div class="cover">
            <div class="text-information-cover">
                <span>Hi!</span>
                <h1>Welcome to my Web Site.</h1>

                <h2>Web Desing | Full Stack Developper | Content Creator</h2>
                <p>I design and code beautifully simple things, and I love what I do.</p>

                <div class="buttons-cover">
                    <input type="button" class="btn-register-cover" id="btn" value="registrarse" />
                    <input type="button" class="btn-readMore-cover" id="btn" value="leer mas" />
                </div>
            </div>

            <div class="media-cover">
                <video src="media/media_animacion_cover.webm" autoplay playinline loop preload="auto" muted />
            </div>

        </div>

        <div class="container-banner">

            <div class="banner">
                <div class="banner-icon-heart">
                    <img src="media/heart_notify.png" id='heart' alt="" />
                </div>
                <div class="banner-icon-fire">
                    <img src="media/fire-dynamic-color.png" id='fire' alt="" />
                </div>
                <div class="banner-text">
                    <h2>I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</h2>
                    <a href="#">Leer mas</a>
                </div>
            </div>

        </div>

    </main>
  )
}

export default Home