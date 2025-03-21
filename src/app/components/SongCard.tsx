
type SongCardProps = {
    img: string;
    alt: string
    listenLink: string;
    watchLink?: string;
}


export default function SongCard({img, alt, listenLink, watchLink}:SongCardProps) {
    return (
    <article className="card">
        <img src={img} alt={alt}/>
        <div className="button-wrapper">
            <button className="font-xs">
                <a href={listenLink} rel="noopener noreferrer" target="_blank">
                    LISTEN NOW
                </a>
            </button>
            {watchLink && 
                <button>
                    <a href={watchLink} rel="noopener noreferrer" target="_blank">
                        <img src="./images/watch-now-button.svg"/>
                    </a>
                </button>
            }
        </div>
    </article>
    )
}