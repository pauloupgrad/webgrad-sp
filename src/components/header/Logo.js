import React from 'react';


export default class Logo extends React.Component{
    render(){
        return(
        <div className="logo">
           <picture>
               <source media="(max-width: 768px)" srcSet="/images/logomarca-wd-S.png" />
               <source media="(max-width: 768px)" srcSet="/images/logomarca-wd-L.png" />
               <img src="/images/logomarca-wd-L.png" alt="Logo Webgrad designer"/>
           </picture>
         </div>
        );
    }
}