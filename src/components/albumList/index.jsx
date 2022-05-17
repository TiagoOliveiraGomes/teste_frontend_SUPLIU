import React, { useContext, useEffect, useState } from "react";
import { IsModalOpenContext } from "../../contexts/modalOpen";
import { CreatingElementsForTable } from "../../utils/CreatingTableList";
import { GetAlbums } from "../../utils/GetAlbums";

import "./styles.css";

export function AlbumList(props) {
  const [albumList, setAlbumList] = useState(null)
  const [tableElements, setTableElements] = useState(null)
  const {searchTerm, pressSearchButton, setIsModalQuestionOpen, setYesOptionInModal} = props
  

  const contextModal = useContext(IsModalOpenContext)
  const {isModalOpen, setIsModalOpen, setType, setAlbum_id, setTrack_id} = contextModal
  
  useEffect(()=> {
    let isRendering = true
    isRendering && GetAlbums({albumList, setAlbumList})

    if(albumList){
      isRendering && CreatingElementsForTable({albumList, setTableElements, searchTerm, setIsModalOpen, setType, setAlbum_id, setIsModalQuestionOpen, setYesOptionInModal, setTrack_id})
    }

    return () => isRendering= false
  }, [albumList, pressSearchButton])

  return (
    <div className="AlbumList">
      <ul>
          {tableElements? tableElements: null}
      </ul>
    </div>
  );
}
