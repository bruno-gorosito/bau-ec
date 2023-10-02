'use client'

import Image from "next/image";
import { Song } from "../types/Song";
import { useState } from "react";


const CardSong = ({ song }: { song: Song }) => {
    const [isHovered, setIsHovered] = useState(false);
  



    return (
            <div
              className="w-full md:w-[calc(100%/2-1rem)] lg:w-[calc(100%/4-2rem)] border-black border"
            >
              <div
                className="aspect-square w-full flex items-center relative "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                        <Image
                            src={song.img}
                            alt={song.name}
                            className={`w-full aspect-square object-cover  ${isHovered ? 'hidden' : 'block'}`}
                        />
                        {/* <YouTube
                            id="videoYoutube"
                            videoId={song.link}
                            opts={opts}
                            onReady={playVideo}
                            className={`aspect-video w-full ${isHovered ? 'block' : 'hidden'}`}
                        /> */}
                        <iframe id="videoYoutube" className={`aspect-square w-full ${isHovered ? 'block' : 'hidden'}`} allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="YouTube video player" src={`https://www.youtube.com/embed/${song.link}?autoplay=${isHovered ? "1" : "0"}&amp;enablejsapi=1&amp;widgetid=41`}></iframe>
                
              </div>
              <div className="w-full text-center py-4">
                <h3>{song.name}</h3>
              </div>
            </div>
    )
}


export default CardSong ;