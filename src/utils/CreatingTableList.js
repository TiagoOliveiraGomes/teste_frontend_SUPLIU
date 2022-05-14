
export function CreatingElementsForTable ({albumList, setTableElements, searchTerm}) {
    const list = albumList.filter( item => {
        if(searchTerm === ""){
            return item
        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return item
        }
    }).map(item => {
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