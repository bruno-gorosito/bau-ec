import { Song } from "../types/Song"
import CardSong from "./CardSong"
import imgReflejos from '@/assets/reflejos.webp'
import imgCodigo428 from '@/assets/codigo_428.png'
import imgLibertad from '@/assets/libertad.png'
import imgElTiempo from '@/assets/elTiempo.png'
const SectionSongs = () => {

    const songs : Song[] = [
        {id: 1, name: 'Reflejos', link: 'otuaTpLfH1g', img: imgReflejos },
        {id: 1, name: 'Libertad ft Kcho', link: 'tWj6rRXXfy0', img: imgLibertad },
        {id: 1, name: 'Código 4:28', link: '8BcRLn1LzWI', img: imgCodigo428 },
        {id: 1, name: 'El tiempo', link: 'WTvWhzaPcEo', img: imgElTiempo },
        {id: 1, name: 'Reflejos', link: 'otuaTpLfH1g', img: imgReflejos },
        {id: 1, name: 'Libertad', link: 'tWj6rRXXfy0', img: imgLibertad },
        {id: 1, name: 'Código 4:28', link: '8BcRLn1LzWI', img: imgCodigo428 },
        {id: 1, name: 'El tiempo', link: 'WTvWhzaPcEo', img: imgElTiempo },
        
    ]
    return (
        <>
            <h2 className="text-center my-8 text-2xl">Canciones Disponibles</h2>
            <div className="w-full flex flex-wrap gap-4 px-4">
                {songs.map(song => (
                    <CardSong 
                        key={song.id}
                        song={song}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionSongs