import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Sobre = () => {
  return(
    <div className="pt-3 div-form">
      <h1>Sobre nós</h1>
      <p>Sabemos o quanto é difícil encontrar os melhores bonecos de minios por aí por isso temos eles aqui para você reservar e se divertir.</p>
    </div>
    )
}

const Reservar = ({match}) => {
  return(
      <div className="media pt-3 div-form">
        <img src={"https://s3.us-east-2.amazonaws.com/minios-imagens/minio-"+match.params.id+".png"} alt="" className="mr-3 img-pag-pricipal"/>
        <div className="media-body">
          <h5 className="mt-0 mb-1">Boneco Minios {match.params.minion}</h5>
          <p>Boneco {match.params.minion} do filme minios. Se você deseja reservar esse boneco preencha o formulário abaixo.</p>
          <form>
            <div class="form-group">
              <label for="nome">Nome Completo</label>
              <input type="text" className="form-control col-md-6 col-sm-10"  id="nome"  />
              <label for="email">Email</label>
              <input type="email" className="form-control col-md-6 col-sm-10" id="email" placeholder="nome@exemplo.com" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
}


class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            
            <a className="navbar-brand" href="#"><i className="fas fa-shopping-bag"></i> Loja dos Minions</a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu"
              aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navagation">
              <span className="navbar-toggler-icon"> </span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbar-menu">
              <div className="navbar-nav">
                <Link  to="/" className="nav-item nav-link">Home</Link>
                <Link  to="/sobre" className="nav-item nav-link">Sobre nós</Link>
              </div>
            </div>
            
          </nav>
          
          
          <Route path="/" exact strict render={
            () => {
              return(
                <div className="container p-3 mb-3">
                  <ul className="list-unstyled">
                    <li className="media pt-3">
                      <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-1.png" alt="" className="mr-3 img-pag-pricipal"/>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Boneco Minios Bob</h5>
                        <p>Boneco Bob do filme minios.</p>
                        <Link  to="/reservar/Bob/1" className="btn btn-outline-dark">Reservar</Link>
                      </div>
                    </li>
                     <li className="media pt-3">
                      <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-2.png" alt="" className="mr-3 img-pag-pricipal"/>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Boneco Minios Dave</h5>
                        <p>Boneco Dave do filme minios.</p>
                        <Link  to="/reservar/Dave/2" className="btn btn-outline-dark">Reservar</Link>
                      </div>
                    </li>
                    <li className="media pt-3">
                      <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-3.png" alt="" className="mr-3 img-pag-pricipal"/>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Boneco Minios Stuart</h5>
                        <p>Boneco Stuart do filme minios.</p>
                        <Link  to="/reservar/Stuart/3" className="btn btn-outline-dark">Reservar</Link>
                      </div>
                    </li>
                     <li className="media pt-3">
                      <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-4.png" alt="" className="mr-3 img-pag-pricipal"/>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Boneco Minios Jerry</h5>
                        <p>Boneco Jerry do filme minios.</p>
                       <Link  to="/reservar/Jerry/4" className="btn btn-outline-dark">Reservar</Link>
                      </div>
                    </li>
                    <li className="media pt-3">
                      <img src="https://s3.us-east-2.amazonaws.com/minios-imagens/minio-5.png" alt="" className="mr-3 img-pag-pricipal"/>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Boneco Minios Bombeiro</h5>
                        <p>Boneco Bombeiro do filme minios.</p>
                        <Link  to="/reservar/Bombeiro/5" className="btn btn-outline-dark">Reservar</Link>
                      </div>
                    </li>
                  </ul>
                </div>              
              )
            }
          }>
          </Route>
          
          
          
          <Route path="/sobre" exact strict component={Sobre}></Route>
          <Route path="/reservar/:minion/:id" exact strict component={Reservar}></Route>
          
          <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
           
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
