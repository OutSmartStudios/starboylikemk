type SongCardProps = {
    img: string;
    alt: string;
    listenLink: string;
    watchLink?: string;
  };
  
  export default function SongCard({
    img,
    alt,
    listenLink,
    watchLink,
  }: SongCardProps) {
    return (
        <article className="card">
            <img src={img} alt={alt} />
            <div className="button-wrapper">
            <a
                className="button font-xs"
                href={listenLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Listen to the song"
                title="Listen Now"
             >
                LISTEN NOW
            </a>
            {watchLink && (
            <a
                className="button"
                href={watchLink}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Watch the music video on YouTube"
                title="Watch Video"
            >
                <img
                    src="./images/watch-now-button.svg"
                    alt="Watch music video on YouTube"
              />
            </a>
          )}
        </div>
      </article>
    );
  }