import React from 'react'
import './styles.css'

export function AlbumList() {
  return (
    <div className='AlbumList'>
      <ul>
        <li>
          <table>
            <caption>Álbum: Rei do Gado, 1961</caption>
            <thead>
              <tr>
                <th>N°</th>
                <th>Faixa</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>11</td>
              <td>Minas Gerais</td>
              <td>3:47</td>
            </tr>
            </tbody>
          </table>

          <table>
            <caption>Álbum: Rei do Gado, 1961</caption>
            <thead>
              <tr>
                <th>N°</th>
                <th>Faixa</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>11</td>
              <td>Minas Gerais</td>
              <td>3:47</td>
            </tr>
            </tbody>
          </table>
          
        </li>
      </ul>
    </div>
  )
}
