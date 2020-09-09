import React, {Component} from 'react';

class HargaBuah extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataBuah : [
      {nama: "Semangka", harga: 10000, berat: 1000},
      {nama: "Anggur", harga: 40000, berat: 500},
      {nama: "Strawberry", harga: 30000, berat: 400},
      {nama: "Jeruk", harga: 30000, berat: 1000},
      {nama: "Mangga", harga: 30000, berat: 500}
      ],
      namaBuah: "",beratBuah: "",hargaBuah: "",indeks: -1
    }
  }

  hapusdata = (event) => {
    let indeks = event.target.value
    let newData = this.state.dataBuah.slice()
    newData.splice(indeks,1)
    this.setState({
      dataBuah: newData,
      indeks: -1
    })
  }

  ubahData = (event) => {
    const indeks = event.target.value
    const {nama, harga, berat} = this.state.dataBuah[indeks]
    this.setState({
      namaBuah: nama,
      hargaBuah: harga,
      beratBuah: berat,
      indeks
    })
  }
    Edit_input = (event) => {
    const value = event.target.value
    this.setState({
      [event.target.name]: value
    });
  }

  tambahData = (event) => {
    event.preventDefault()
    let indeks = this.state.indeks
    if(indeks === -1) {
      this.setState({
        dataBuah: [...this.state.dataBuah, {nama: this.state.namaBuah, harga: this.state.hargaBuah, berat: this.state.beratBuah}],
        namaBuah: "",
        beratBuah: "",
        hargaBuah: ""
      })
    } else {
      const newData = this.state.dataBuah.slice()
      newData[indeks] = {nama: this.state.namaBuah, harga: this.state.hargaBuah, berat: this.state.beratBuah}
      this.setState({
        dataBuah: newData,
        namaBuah: "",
        beratBuah: "",
        hargaBuah: "",
        indeks: -1
      })
    }            
  }


  render() {
    return (
      <div className="price-section">
      <h1>Tabel harga Buah</h1>
      <table id="hargaBuah">
      <thead>
      <tr>
      <th>Nama</th>
      <th>Harga</th>
      <th>Berat</th>
      <th>Aksi</th>
      </tr>
      </thead>
      <tbody id="harga-tbody">
      {this.state.dataBuah.map((el, indeks) => {
        return (
        <tr key={indeks}>
        <td >{el.nama}</td>
        <td >{el.harga}</td>
        <td >{el.berat/1000} kg</td>
        <td >
        <button className="btn_buah" value={indeks}  onClick={this.ubahData}>Ubah</button>&nbsp;
        <button className="btn_buah" value={indeks} onClick={this.hapusdata}>Hapus</button>
        </td>
        </tr>
        )
      })}
      </tbody>
      </table>

      <div id="Formcenter">
      <h1>Tambah dan Edit Buah</h1>
      <form onSubmit={this.tambahData}>
      <label  htmlFor="nama">Nama</label>&nbsp;&nbsp;&nbsp;
      <input required type="text" value={this.state.namaBuah} name="namaBuah" id="nama" onChange={this.Edit_input} /><br/><br/>
      <label  htmlFor="harga">Harga</label>&nbsp;&nbsp;&nbsp;
      <input required type="number" min="1" value={this.state.hargaBuah} name="hargaBuah"  id="harga" onChange={this.Edit_input} /> <br/><br/>
      <label  htmlFor="berat">Berat </label>&nbsp;&nbsp;&nbsp;
      <input required type="number" min="1" value={this.state.beratBuah} name="beratBuah" id="berat" onChange={this.Edit_input} /><br/><br/>
      <button className="btn_buah">Aksi</button>
      </form>
      </div>
      </div>
      )
    }
  }

  export default HargaBuah 