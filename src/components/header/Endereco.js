import React from 'react';


export default class Endereco extends React.Component{
    render(){
        return(
           <div className="endereco">
           <a href="https://www.facebook.com/webgrad.com.br/" target="_blang" title=""><img src="/images/facebook.png" alt="Facebook" /></a>
           <a href="https://plus.google.com/+WebgradBr" title=""><img src="/images/google.png" alt="Google Plus" /></a>
           <a href="https://github.com/pauloupgrad" title=""><img src="/images/github.png" alt="GitHub" /></a>
           <a href="https://twitter.com/webgraddesigner" title=""><img src="/images/twitter.png" alt="Twitter" /></a>        
           </div>
        );
    }
}