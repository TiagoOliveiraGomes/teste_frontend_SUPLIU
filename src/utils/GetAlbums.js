import { Api } from "../service/api"

 export async function GetAlbums ({albumList, setAlbumList}) {
    if(albumList)return
    try {
      const api = await Api.get('/album')
      const response = await api.data
      setAlbumList(response.data)
      return response.data
      
    } catch (error) {
      console.log(error)
    } 
}