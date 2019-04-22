import React, { Component } from 'react';

import Login from '../auth/Login';
import Register from '../auth/Register';

const SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;
const recognition = new SpeechRecognition();

recognition.continous = true;
//recognition.interimResults = true;
recognition.lang = 'en-US';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      listening: false
    };
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
    //this.speak = this.speak.bind(this);
  }

  toggleListen() {
    this.setState(
      {
        listening: !this.state.listening
      },
      this.handleListen
    );
  }

  componentWillMount() {
    let utterThis = new SpeechSynthesisUtterance('Welcome to voice based email system');
    synth.speak(utterThis);
    this.setState(
      {
        listening: !this.state.listening
      },
      this.handleListen
    );
  }

  handleListen() {
    console.log('listening?', this.state.listening);

    if (this.state.listening) {
      let utterThis = new SpeechSynthesisUtterance('Speak 1 for login and 2 for register');
      synth.speak(utterThis);
      recognition.start();
      recognition.onend = () => {
        console.log('...continue listening...');
        recognition.start();
      };
    } else {
      recognition.stop();
      recognition.onend = () => {
        console.log('Stopped listening per click');
      };
    }

    recognition.onstart = () => {
      console.log('Listening!');
    };

    let finalTranscript = '';
    recognition.onresult = event => {
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript = transcript;
        else interimTranscript = transcript;
      }
      //document.getElementById('interim').innerHTML = interimTranscript;
      //document.getElementById('final').innerHTML = finalTranscript;
      console.log(finalTranscript);
      if (finalTranscript === '1') {
        recognition.stop();
        recognition.onend = () => {
          // console.log('Stopped listening per command');
          // const finalText = transcriptArr.slice(0, -3).join(' ');
          // document.getElementById('final').innerHTML = finalText;
          this.props.history.push('/login');
        };
      }

      if (finalTranscript === '2') {
        recognition.stop();
        recognition.onend = () => {
          // console.log('Stopped listening per command');
          // const finalText = transcriptArr.slice(0, -3).join(' ');
          // document.getElementById('final').innerHTML = finalText;
          this.props.history.push('/register');
        };
      }

      //-------------------------COMMANDS------------------------------------

      const transcriptArr = finalTranscript.split(' ');
      const stopCmd = transcriptArr.slice(-3, -1);
      console.log('stopCmd', stopCmd);

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop();
        recognition.onend = () => {
          console.log('Stopped listening per command');
          const finalText = transcriptArr.slice(0, -3).join(' ');
          document.getElementById('final').innerHTML = finalText;
        };
      }
    };

    //-----------------------------------------------------------------------

    recognition.onerror = event => {
      console.log('Error occurred in recognition: ' + event.error);
    };
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
