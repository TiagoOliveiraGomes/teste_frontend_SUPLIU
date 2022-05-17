
import { Api } from "../service/api"

 export async function PostAlbums (albumName, AlbumYear) {

     try {
        const response = await Api.post("/album", {
            name: albumName,
            year: AlbumYear
        })
        const data = await response.data
        console.log(data)
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}