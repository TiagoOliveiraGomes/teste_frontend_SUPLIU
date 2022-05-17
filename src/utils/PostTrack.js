import { Api } from "../service/api"

 export async function PostTrack (album_id, number, title, duration) {
     try {
        const response = await Api.post("/track", {
            album_id,
            number,
            title,
            duration
        })
        const data = await response.data
        console.log(data)
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}