import { Api } from "../service/api"

 export async function PostTrack (album_id, number, title, duration) {
     console.log("na função postTrack:")
     console.log("album_id:", album_id)
     console.log("number:", number)
     console.log("title:", title)
     console.log("duration:", duration)
     try {
        const response = await Api.post("/track", {
            album_id,
            number,
            title,
            duration
        })
        const data = response.data
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}