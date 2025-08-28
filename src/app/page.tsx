import Image from "next/image";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";



export default function Home() {
  return (
    <>
      <header>
          <h1 className="h1 cream">STARBOY<span className="drk-orange szn">SZN</span></h1>
          
          <div className="album-info">
            <p>starboylikemk</p>
            <p>8 August 2025</p>
          </div>
      </header>
      <main className="flow">
        <div className="tracklist">
          <p className="track"><a href="https://open.spotify.com/track/0FWOM27yT6hI2K2lnjsMWC">1 CocaCrazy&nbsp;</a></p>
          <p className="track"><a href="https://open.spotify.com/track/4dgVwV3XGrCyP1D4GPZl9e">2 Wats<span className="lt">Gwaaning</span>&nbsp;</a></p>
          <p className="track"><a href="https://open.spotify.com/track/1trqaVnnKD493OJQcwA4yT">3 Talk2MeGirl&nbsp;</a></p>
          <p className="track"><a href="https://open.spotify.com/track/2wFmLWWcjykzjL3NtUa9mH">4 Nyc<span className="lt">Girl</span>&nbsp;</a></p>
        </div>
        <div className="artwork">
          <Image src='/images/cover.jpg' alt="Album Artwork" layout="responsive"
        width={700}
        height={475}
        sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 60vw,
               33vw"/>
        </div>
        <h2 className="h1 cream">starboylike<span className="drk-orange szn">mk</span></h2>
        <p className="video-name">Talk2MeGirl - Official Music Video</p>
        <VideoPlayer />
      </main>
      <footer>
        
        <nav className="social-nav">
        <ul aria-label="Social Media Navigation">
          <li>
            <a
              href="https://www.youtube.com/channel/UCjsRVXSbljtu-86l6yJtSgQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              title="YouTube"
            >
              <Image src="/icons/youtube.svg" height={30} width={30} alt="YouTube" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@starboylikemk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our TikTok profile"
              title="TikTok"
            >
              <Image src="/icons/tiktok.svg" height={30} width={30} alt="TikTok" />
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Spotify"
              title="Spotify"
            >
              <Image src="/icons/spotify.svg" height={30} width={30} alt="Spotify" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/starboylikemk/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
              title="Instagram"
            >
              <Image src="/icons/instagram.svg" height={30} width={30} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://soundcloud.com/starboylikemk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on SoundCloud"
              title="SoundCloud"
            >
              <Image src="/icons/soundcloud.svg" height={30} width={30} alt="SoundCloud" />
            </a>
          </li>
        </ul>
      </nav>
        {/* <p>© 2025 StarboylikeMK</p>
        <p>All rights reserved</p> */}
      </footer>
    </>
  );
}
