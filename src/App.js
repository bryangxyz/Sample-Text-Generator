import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output from './Components/Output';
import HtmlSelect from './Components/Controls/HtmlSelect';
import Paras from './Components/Controls/Paras';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: true,
      paras: 4,
      text: '',
    };
    this.getSampleText = this.getSampleText.bind(this);
    this.showHtml = this.showHtml.bind(this);
    this.changeParas = this.changeParas.bind(this);
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get(`http://hipsterjesus.com/api?paras=${this.state.paras}&html=${this.state.html}`)
      .then((response) => {
        this.setState({
          text: response.data.text,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  showHtml(x) {
    this.setState({
      html: x,
    }, () => {
      this.getSampleText();
    });
  }

  changeParas(number) {
    this.setState({
      paras: number,
    }, () => {
      this.getSampleText();
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center">Sample Text Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Paras value={this.state.paras} onChange={this.changeParas} />
          </div>
          <div className="form-group">
            <label>Include HTML:</label>
            <HtmlSelect value={this.state.html} onChange={this.showHtml}/>
          </div>
        </form>
        <br />
        <Output text={this.state.text}/>
      </div>
    );
  }
}

export default App;
