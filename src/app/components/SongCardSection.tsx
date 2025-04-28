import SongCard from "./SongCard"

export default function SongCardSection() {
    return (
        <section className="wrapper flow">
      <h2 className="h2 top">MORE MUSIC</h2>
      <div className="grid" data-layout="50-50">
        <SongCard img="./images/wassupp.png" alt="Wassuppp music single cover" listenLink="https://open.spotify.com/track/534DSaFxUFjJWnFR4C4yLK"/>
        <SongCard img="./images/wassupp2.png" alt="Wassuppp2 music single cover" listenLink="https://open.spotify.com/album/384kwooGht7JdEtF5Yo0ir"/>
        <SongCard img="./images/enchante.png" alt="Enchante music single cover" listenLink="https://open.spotify.com/track/36iZVJEDBOuXOD2hCAN6bg"/>
        <SongCard img="./images/wild.png" alt="Wild music single cover" listenLink="https://open.spotify.com/track/2yqWBTSKCeDx1yn3cO4kaa" watchLink="https://www.youtube.com/watch?v=bUFUnS49x94"/>
      </div>
    </section>
    )
}