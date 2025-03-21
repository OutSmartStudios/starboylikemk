import SongCard from "./components/SongCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="hero-background">
    <header>
      <nav>
        <div>
          <h1>Starboylikemk</h1>
        </div>
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
    </header>
    <main className="wrapper">
        <div className="cta">
          <h2 className="h2">OneTimeAgain</h2>
          <p className="h2 font-xl">OUT NOW</p>
          <div className="button-wrapper">

          <a
            className="button"
            href="https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf?flow_ctx=da3b2c7e-2b50-473e-af5a-f48104fdc891%3A1742566682#login"
            rel="noopener noreferrer"
            target="_blank"
            title="Listen on Spotify"
            aria-label="Listen to song on Spotify"
          >
            <img src="./images/listen-now-button.svg" alt="Listen to song on Spotify" />
          </a>
          <a
            className="button"
            href="https://www.youtube.com/watch?v=LYZvA-f5y5g"
            rel="noopener noreferrer"
            target="_blank"
            title="Watch on YouTube"
            aria-label="Watch the video on YouTube"
          >
            <img src="./images/watch-now-button.svg" alt="Watch the Video on YouTube" />
          </a>
        </div>
      </div>
    </main>
    </div>

    <div>
    <section className="wrapper flow">
      <h2 className="h2 top">MORE MUSIC</h2>
      <div className="grid" data-layout="50-50">
        <SongCard img="./images/wassupp.png" alt="Wassuppp music single cover" listenLink="https://open.spotify.com/track/534DSaFxUFjJWnFR4C4yLK"/>
        <SongCard img="./images/wassupp2.png" alt="Wassuppp2 music single cover" listenLink="https://open.spotify.com/album/384kwooGht7JdEtF5Yo0ir"/>
        <SongCard img="./images/enchante.png" alt="Enchante music single cover" listenLink="https://open.spotify.com/track/36iZVJEDBOuXOD2hCAN6bg"/>
        <SongCard img="./images/wild.png" alt="Wild music single cover" listenLink="https://open.spotify.com/track/2yqWBTSKCeDx1yn3cO4kaa" watchLink="https://www.youtube.com/watch?v=bUFUnS49x94"/>
      </div>
    </section>
    </div>
    </>
  );
}
