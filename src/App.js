import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          
          <a className="navbar-brand" href="#"><i className="fas fa-shopping-bag"></i> Loja dos Minions</a>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu"
            aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navagation">
            <span className="navbar-toggler-icon"> </span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Fale conosco</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>
          </div>
          
        </nav>
        
        
        <div className="container p-3">
          <ul className="list-unstyled">
            <li className="media pt-3">
              <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-1.png" alt="" className="mr-3 img-pag-pricipal"/>
              <div className="media-body">
                <h5 className="mt-0 mb-1">Boneco Minios Bob</h5>
                <p>Boneco Bob do filme minios.</p>
                <button type="button" className="btn btn-outline-dark">Reservar</button>
              </div>
            </li>
             <li className="media pt-3">
              <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-2.png" alt="" className="mr-3 img-pag-pricipal"/>
              <div className="media-body">
                <h5 className="mt-0 mb-1">Boneco Minios Dave</h5>
                <p>Boneco Dave do filme minios.</p>
                <button type="button" className="btn btn-outline-dark">Reservar</button>
              </div>
            </li>
            <li className="media pt-3">
              <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-3.png" alt="" className="mr-3 img-pag-pricipal"/>
              <div className="media-body">
                <h5 className="mt-0 mb-1">Boneco Minios Stuart</h5>
                <p>Boneco Stuart do filme minios.</p>
                <button type="button" className="btn btn-outline-dark">Reservar</button>
              </div>
            </li>
             <li className="media pt-3">
              <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-4.png" alt="" className="mr-3 img-pag-pricipal"/>
              <div className="media-body">
                <h5 className="mt-0 mb-1">Boneco Minios Jerry</h5>
                <p>Boneco Jerry do filme minios.</p>
                <button type="button" className="btn btn-outline-dark">Reservar</button>
              </div>
            </li>
            <li className="media pt-3">
              <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-5.png" alt="" className="mr-3 img-pag-pricipal"/>
              <div className="media-body">
                <h5 className="mt-0 mb-1">Boneco Minios Bombeiro</h5>
                <p>Boneco Bombeiro do filme minios.</p>
                <button type="button" className="btn btn-outline-dark">Reservar</button>
              </div>
            </li>
          </ul>
        </div>
        
        
        
        <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
         
        </footer>
      </div>
    );
  }
}

export default App;
