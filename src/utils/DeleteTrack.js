import { Api } from "../service/api"

 export async function DeleteTrack (id) {
     try {
        const response = await Api.delete(`/track/${id}`)
        const data = await response.data
        console.log(data)
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}