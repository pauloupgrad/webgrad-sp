import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Nav extends React.Component{
    render(){
        return(
           <div className="nav">
                <AnchorLink href='#home'>Home</AnchorLink>
                <AnchorLink href='#sobre'>Quem sou</AnchorLink>
                <AnchorLink href='#fotos'>Fotos</AnchorLink>
                <AnchorLink href='#blog'>Blog</AnchorLink>
                <AnchorLink href='#contato'>Contato</AnchorLink>
           </div>
        );
    }
}