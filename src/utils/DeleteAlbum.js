import { Api } from "../service/api"

 export async function DeleteAlbums (album_id) {
     try {
        const response = await Api.delete(`/album/${album_id}`)
        const data = await response.data
        console.log(data)
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}