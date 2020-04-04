import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <canvas id="canvas" width="1024" height="512">
        <p>Désolé, votre navigateur ne supporte pas Canvas. Mettez-vous à jour</p>
        </canvas>
      </div>
    );
    var canvas  = document.querySelector('#canvas');
    var context = canvas.getContext('2d');
    var zozor = new Image();
    zozor.src = 'zozor.png';
    zozor.addEventListener('load', function() {
        var pattern = context.createPattern(zozor, 'repeat');
        context.fillStyle = pattern;
        context.fillRect(0, 0, 1024, 512);
    });
  }
}

render(<App />, document.getElementById('root'));
