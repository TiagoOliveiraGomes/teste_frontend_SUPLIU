import React, { useEffect, useState } from "react";
import { Api } from "../../service/api";
import { GetAlbums } from "../../service/GetAlbums";

import "./styles.css";

export function AlbumList() {
  const [albumList, setAlbumList] = useState(null)
  const [tableElements, setTableElements] = useState(null)
  

  async function GetAlbums () {
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


  useEffect(()=> {
    GetAlbums()
    if(!albumList) return

    function creatingElementsForTable () {
      const list = albumList.map(item => {
        return(
          <table key={item.id}>
              <caption>Álbum: {item.name}, {item.year}</caption>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Faixa</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                {
                  item.tracks.map(element => {
                    const time = element.duration
                    var minutes = Math.floor(time / 60);
                    var seconds = time - minutes * 60;
                    console.log("minutos: ", minutes)
                    console.log("seguntos: ", seconds)
                    return(
                      <tr key={element.id}>
                        <td>{element.number}</td>
                        <td>{element.title}</td>
                        <td>{minutes}:{seconds?seconds:'00'}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        )
      })
      setTableElements(list)
    }
    
    creatingElementsForTable()
  }, [albumList])

  
  

  return (
    <div className="AlbumList">
      <ul>
        <li>
          {tableElements? tableElements: null}
        </li>
      </ul>
    </div>
  );
}
