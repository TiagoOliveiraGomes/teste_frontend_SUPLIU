import React, { useEffect, useState } from "react";
import { CreatingElementsForTable } from "../../utils/CreatingTableList";
import { GetAlbums } from "../../utils/GetAlbums";

import "./styles.css";

export function AlbumList() {
  const [albumList, setAlbumList] = useState(null)
  const [tableElements, setTableElements] = useState(null)
  
  useEffect(()=> {
    GetAlbums({albumList, setAlbumList})

    if(!albumList) return

    CreatingElementsForTable({albumList, setTableElements})
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
