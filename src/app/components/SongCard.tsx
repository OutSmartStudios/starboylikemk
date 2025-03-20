
type SongCardProps = {
    img: string;
    alt: string
}


export default function SongCard({img, alt}:SongCardProps) {
    return (
    <article className="card">
        <img src={img} alt={alt}/>
        <div className="button-wrapper">
            <button className="font-xs">
                LISTEN NOW
            </button>
            <button>
                <img src="./images/watch-now-button.svg"/>
            </button>
        </div>
    </article>
    )
}