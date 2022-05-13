import React, { useEffect, useState } from "react";
import { CreatingElementsForTable } from "../../utils/CreatingTableList";
import { GetAlbums } from "../../utils/GetAlbums";

import "./styles.css";

export function AlbumList(props) {
  const [albumList, setAlbumList] = useState(null)
  const [tableElements, setTableElements] = useState(null)
  const {searchTerm, pressSearchButton} = props
  
  useEffect(()=> {
    let isRendering = true
    isRendering && GetAlbums({albumList, setAlbumList})

    if(albumList){
      isRendering && CreatingElementsForTable({albumList, setTableElements, searchTerm})
    }

    return () => isRendering= false
  }, [albumList, pressSearchButton])

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
