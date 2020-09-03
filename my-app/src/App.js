import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div id="border">
    <h1>Form Pembelian Buah</h1>
    <table>
    <tr>
    <td id="kolom1"><b>Nama Pelanggan</b></td>
    <td id="kolom2"><input type= "text" id="input"/></td>
    </tr>
    <tr>
    <td> <b>Daftar Item</b></td>
    <td>
    <input type="checkbox" name=""/> Semangka <br/>
    <input type="checkbox" name=""/> Jeruk <br/>
    <input type="checkbox" name=""/> Salak <br/>
    <input type="checkbox" name=""/> Nanas <br/>
    <input type="checkbox" name=""/> Anggur <br/>
    </td>
    </tr>
    <tr>
        <td>
          <input type="submit" value="Kirim" id="button"/>
        </td>
      </tr>
    </table>
    </div>

    </div>
    );
  }

  export default App;
