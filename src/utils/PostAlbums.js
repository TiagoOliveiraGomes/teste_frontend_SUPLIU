import { Api } from "../service/api"

 export async function PostAlbums (albumName, AlbumYear) {
     try {
        const response = await Api.post("/album", {
            name: albumName,
            year: AlbumYear
        })
        const data = response.data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}