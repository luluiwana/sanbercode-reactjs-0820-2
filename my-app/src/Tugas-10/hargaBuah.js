import React from 'react';

class HargaBuah extends React.Component {
  render() {
    return (
     <>
     <h1>Tabel harga Buah</h1>
     <table id="hargaBuah">
     <thead>
     <tr>
     <th>Nama</th>
     <th>Harga</th>
     <th>Berat</th>
     </tr>
     </thead>
     <tbody id="harga-tbody">
     
     {dataHargaBuah.map(el=> {
      return (
       <tr>
       <Nama nama={el.nama}/> 
       <Harga harga={el.harga}/> 
       <Berat berat={el.berat}/> 
       </tr>
       )
    })}
     </tbody>
     </table>
     </>
     )
  }

}
class Nama extends React.Component {
  render() {
    return <td>{this.props.nama}</td> ;
  }
}

class Harga extends React.Component {
  render() {
    return <td>{this.props.harga}</td> ;
  }
}
class Berat extends React.Component {
  render() {
    return <td>{this.props.berat/1000} kg</td> ;
  }
}
let dataHargaBuah = [
{nama: "Semangka", harga: 10000, berat: 1000},
{nama: "Anggur", harga: 40000, berat: 500},
{nama: "Strawberry", harga: 30000, berat: 400},
{nama: "Jeruk", harga: 30000, berat: 1000},
{nama: "Mangga", harga: 30000, berat: 500}
]

export default HargaBuah;