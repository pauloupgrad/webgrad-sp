import React from 'react';
import Slide from './main/Slide';
import Informacoe from './main/Informacoes';
import Contato from './main/Contato';




export default class Main extends React.Component{
    render(){
        return(
            <div className="main">
                <Slide/>
                <Informacoe/>
                <Contato/>
            </div>
        );
    }
}