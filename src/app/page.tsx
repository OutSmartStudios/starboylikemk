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
        <ul>
          <li><a href="https://www.youtube.com/channel/UCjsRVXSbljtu-86l6yJtSgQ" rel="noopener noreferrer"  target="_blank"><Image src="./icons/youtube.svg" height={30} width={30} alt="Youtube"/></a></li>
          <li><a href="https://www.tiktok.com/@starboylikemk" rel="noopener noreferrer" target="_blank"><Image src="./icons/tiktok.svg" height={30} width={30} alt="Tiktok"/></a></li>
          <li><a href="https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf" rel="noopener noreferrer" target="_blank"><Image src="./icons/spotify.svg" height={30} width={30} alt="Spotify"/></a></li>
          <li><a href="https://www.instagram.com/starboylikemk/" rel="noopener noreferrer" target="_blank"><Image src="./icons/instagram.svg" height={30} width={30} alt="Instagram"/></a></li>
          <li><a href="https://soundcloud.com/starboylikemk" rel="noopener noreferrer" target="_blank"><Image src="./icons/soundcloud.svg" height={30} width={30} alt="Soundcloud"/></a></li>
      </ul>
      </nav>
    </header>
    <main className="wrapper">
        <div className="cta">
          <h2 className="h2">OneTimeAgain</h2>
          <p className="h2 font-xl">OUT NOW</p>
          <div className="button-wrapper">

          <button>
            <a href="https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf?flow_ctx=da3b2c7e-2b50-473e-af5a-f48104fdc891%3A1742566682#login" rel="noopener noreferrer" target="_blank">
              <img src="./images/listen-now-button.svg" alt="Listen now Button"/>
            </a>
          </button>
          <button>
            <a href="https://www.youtube.com/watch?v=LYZvA-f5y5g" rel="noopener noreferrer" target="_blank">
              <img src="./images/watch-now-button.svg" alt="Watch the Video Button"/>
            </a>
          </button>
        </div>
      </div>
    </main>
    </div>

    <div>
    <section className="wrapper flow">
      <h2 className="h2 top">MORE MUSIC</h2>
      <div className="grid" data-layout="50-50">
        <SongCard img="./images/wassupp.png" alt="Wassuppp Single Cover" listenLink="https://open.spotify.com/track/534DSaFxUFjJWnFR4C4yLK"/>
        <SongCard img="./images/wassupp2.png" alt="Wassuppp2 Single Cover" listenLink="https://open.spotify.com/album/384kwooGht7JdEtF5Yo0ir"/>
        <SongCard img="./images/enchante.png" alt="Enchante Single Cover" listenLink="https://open.spotify.com/track/36iZVJEDBOuXOD2hCAN6bg"/>
        <SongCard img="./images/wild.png" alt="Wild Single Cover" listenLink="https://open.spotify.com/track/2yqWBTSKCeDx1yn3cO4kaa" watchLink="https://www.youtube.com/watch?v=bUFUnS49x94"/>
      </div>
    </section>
    </div>
    </>
  );
}
