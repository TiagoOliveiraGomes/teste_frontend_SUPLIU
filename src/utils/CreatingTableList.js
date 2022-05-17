
import trashIcon from '../assets/images/trash.svg'
import { DeleteAlbums } from './DeleteAlbum';
import { DeleteTrack } from './DeleteTrack';

export function CreatingElementsForTable({
  albumList,
  setTableElements,
  searchTerm,
  setIsModalOpen,
  setType,
  setAlbum_id,
  setIsModalQuestionOpen,
  setYesOptionInModal,
}) {
  const list = albumList
    .filter((item) => {
      if (searchTerm === "") {
        return item;
      } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    })
    .map((item) => {
      return (
        <li key={item.id}>
          <table>
            
              <caption>
                Álbum: {item.name}, {item.year}
              <button onClick={()=>DeleteAlbums(item.id)} className="btn-delete"><img className='trashIcon' src={trashIcon} /></button>
              <button onClick={()=>{
                setType('track')
                setIsModalOpen(true)
                setAlbum_id(item.id)
              }} className="btn-addTrack">+</button>
              </caption>
            
            <thead>
              <tr>
                <th>N°</th>
                <th>Faixa</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
              {item.tracks.map((element) => {
                const time = element.duration;
                var minutes = Math.floor(time / 60);
                var seconds = time - minutes * 60;

                return (
                  <tr onClick={()=> {
                    setIsModalQuestionOpen(`Deletar a faixa: '${element.title}'?`)
                    setYesOptionInModal(DeleteTrack(element.id))
                  }} key={element.id}>
                    <td>{element.number}</td>
                    <td>{element.title}</td>
                    <td>
                      {minutes}:{seconds ? seconds : "00"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </li>
      );
    });
  setTableElements(list);
}
