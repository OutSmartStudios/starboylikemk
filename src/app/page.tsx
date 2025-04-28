import MSNav from "./components/MSNav"
import Image from "next/image";


export default function Home() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
    <MSNav/>
    <div className="flex-center">
    <main className="myspace-grid flow wrapper" data-layout="50-50">
      <div className="div1">
        <h1>Starboy_likeMK</h1>
      </div>
      <div className="div2">
      <article className="profile-section grey-container flow">
        <p>&quot;if ur tryna feel some come my way &lt;3&quot; </p>
          <img src="/images/ms-pp.png"  alt="Starboylikemk profile picture" />
        <p>Last Login: {currentDate} </p>
      </article>
      </div>

      
      <nav className="container div3">
        <a
          href="mailto:starboylikemk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message via email"
          title="Message"
        >
          <Image src="/icons/message.svg" height={30} width={30} alt="Message" /> <p>Send message</p>
        </a>
        <a
          href="https://www.youtube.com/channel/UCjsRVXSbljtu-86l6yJtSgQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our YouTube channel"
          title="YouTube"
        >
          <Image src="/icons/share.svg" height={30} width={30} alt="YouTube" /> Watch videos
        </a>
        <a
          href="https://soundcloud.com/starboylikemk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen to SoundCloud"
          title="SoundCloud"
        >
          <Image src="/icons/addtofriends.svg" height={30} width={30} alt="SoundCloud" /> New sounds
        </a>
        <a
          href="https://www.instagram.com/starboylikemk/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Instagram"
          title="Instagram"
        >
          <Image src="/icons/instagram.svg" height={30} width={30} alt="Instagram" /> Follow on IG
        </a>
        <a
          href="https://www.tiktok.com/@starboylikemk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on TikTok"
          title="TikTok"
        >
          <Image src="/icons/tiktok.svg" height={30} width={30} alt="TikTok" /> Follow on TT
        </a>
      </nav>

      <article className="div4 flow grey-container ">
        <h2>MySpace URL:</h2>
        <a className="myspace-url" href="https://www.starboylikemk.com/">https://www.starboylikemk.com/</a>
      </article>

      <div className="div5 ">
        <a 
          href="https://open.spotify.com/album/7Jo6yKInyN3wz0yZTmBW4p?uid=94abd9667c81a62971cf&uri=spotify%3Atrack%3A09LrSEf5G3T5bpGteuN02L"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play Music"
          title="Play Music">
            <img src="/images/player.svg" alt="Music player image"/>
        </a>
      </div>

      
      <article className="div6 flow">
          <a
            href="https://soundcloud.com/starboylikemk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Latest Music"
            title="Latest Music">
            <div className="music-entry">
              <h2>Starboy_likeMK&apos;s latest</h2>
              <Image src='/icons/music-cd.svg' width={32} height={32} alt="Soundcloud" />
            </div>
          </a>
        
        <div className="latest-music flow">
          <div className="music-entry">
            <h3>MYSPACE</h3>
            <p>[<a 
              href="https://open.spotify.com/album/7Jo6yKInyN3wz0yZTmBW4p?uid=94abd9667c81a62971cf&uri=spotify%3Atrack%3A09LrSEf5G3T5bpGteuN02L"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen to MYSPACE"
              title="Listen to MYSPACE">
                view more</a>]</p>
          </div>
          <div className="music-entry">
            <h3>OneTimeAgain</h3>
            <p>[<a 
                href="https://open.spotify.com/track/3QrXYGifSunOG23bWwk5uI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen to OneTimeAgain"
                title="Listen to OneTimeAgain">
                  view more</a>]</p>
          </div>
          <div className="music-entry">
            <h3>Wassuppp</h3>
            <p>[<a 
              href="https://open.spotify.com/track/534DSaFxUFjJWnFR4C4yLK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen to Wassuppp"
              title="Listen to Wassuppp">
               view more</a>]</p>
          </div>
        </div>
        
          <a
            href="https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Music"
            title="Music">
              <div className="music-entry">
                <h2>Starboy_likeMK&apos;s music</h2>
                <Image src='/icons/spotify.svg' width={32} height={32} alt="Spotify" />
              </div>
          </a>
        
          <a
            href="https://www.youtube.com/channel/UCjsRVXSbljtu-86l6yJtSgQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Videos"
            title="Videos">

        <div className="music-entry">
          <h2>Starboy_likeMK&apos; videos</h2>
          <Image src='/icons/youtube.svg' width={32} height={32} alt="Youtube" />
        </div>
        </a>
      </article>

      <article className="div7">
        <h2>About me:</h2>
        <div className="grey-container">
          <p>17</p>
          <p>London</p>
          <p>Artist / Producer / Starboy </p>
          <p>It&apos;s a starboy world!!</p>
        </div>
      </article>

      <div className="div8">
          <h1 className="graffiti">Starboylikemk</h1>
      </div>
    </main>
    </div>
    </>
  );
}
