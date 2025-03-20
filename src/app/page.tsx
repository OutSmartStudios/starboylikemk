import SongCard from "./components/SongCard";

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
          <li><a href="https://open.spotify.com/artist/6RchwmvR0TrucPeYCqvsdf" target="_blank"><img src="./icons/spotify.svg"/></a></li>
          <li><a href="https://www.twitter.com" target="_blank"><img src="./icons/tiktok.svg"/></a></li>
          <li><a href="https://www.instagram.com" target="_blank"><img src="./icons/instagram.svg"/></a></li>
          <li><a href="https://www.linkedin.com" target="_blank"><img src="./icons/youtube.svg"/></a></li>
          <li><a href="https://www.linkedin.com" target="_blank"><img src="./icons/soundcloud.svg"/></a></li>
      </ul>
      </nav>
    </header>
    <main className="wrapper">
        <h2 className="h2">ONETIMEAGAIN</h2>
        <p className="h2 font-xl">OUT NOW</p>
        <div className="button-wrapper">
        <button>
          <img src="./images/listen-now-button.svg" alt="Listen now Button"/>
        </button>
        <button>
          <img src="./images/watch-now-button.svg" alt="Watch the Video Button"/>
        </button>
      </div>
    </main>
    </div>

    <div className="background">
    <section className="wrapper flow">
      <h2 className="h2 top">MORE MUSIC</h2>
      <div className="grid" data-layout="50-50">
        <SongCard img="./images/wassupp.png" alt="Wassupp Single Cover"/>
        <SongCard img="./images/wassupp2.png" alt="Wassupp2 Single Cover"/>
        <SongCard img="./images/enchante.png" alt="Enchante Single Cover"/>
        <SongCard img="./images/wild.png" alt="Wild Single Cover"/>
      </div>
    </section>
    </div>
    </>
  );
}
