import Image from "next/image"

export default function SocialMediaNav () {
    return (
        <nav>
        
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
    )
}