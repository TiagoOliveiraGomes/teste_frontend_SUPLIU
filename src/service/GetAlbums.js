import { Api } from "./api"

 export async function GetAlbums () {

    try {
      const api = await Api.get('/album')
      const response = await api.data

      return response.data
      
    } catch (error) {
      console.log(error)
    }
}