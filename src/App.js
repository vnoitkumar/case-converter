import React, { Component } from 'react';
import appUtility from './utility/app-utility';
import copy from './assets/images/copy.svg';
import ReactDOM from 'react-dom';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.copiedMsgTimeOutId = null;

    this.state = {
      content: '',
      copiedToClipboard: false,
      placeholder: 'Type or paste your content here'
    };

    this.clearText = this.clearText.bind(this);
    this.toUpperCase = this.toUpperCase.bind(this);
    this.toLowerCase = this.toLowerCase.bind(this);
    this.toKebabCase = this.toKebabCase.bind(this);
    this.toSnakeCase = this.toSnakeCase.bind(this);
    this.toCamalCase = this.toCamalCase.bind(this);
    this.toTitleCase = this.toTitleCase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentDidUpdate() {
    window.onpopstate = () => {
      clearTimeout(this.copiedMsgTimeOutId);
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearTimeout(this.copiedMsgTimeOutId);
  }

  clearText() {
    this._isMounted &&
      this.setState(
        {
          content: '',
          copiedToClipboard: false,
          placeholder: 'Type or paste your content here'
        },
        () => {
          ReactDOM.findDOMNode(this.refs.content).focus();
        }
      );
  }

  copyToClipboard() {
    this.refs.content.select();
    document.execCommand('copy');
    this._isMounted &&
      this.setState({
        copiedToClipboard: true
      });

    this.copiedMsgTimeOutId = setTimeout(() => {
      this._isMounted &&
        this.state.copiedToClipboard &&
        this.setState({
          copiedToClipboard: false
        });
    }, 5000);
  }

  handleChange(event) {
    const content = event.target.value;

    this._isMounted &&
      this.setState({
        content,
        placeholder: 'Type or paste your content here'
      });
  }

  toUpperCase() {
    const content = this.state.content.toUpperCase();

    if (content.length === 0) {
      const placeholder = this.state.placeholder.toUpperCase();
      this._isMounted &&
        this.setState({
          placeholder
        });
      return;
    }

    this._isMounted &&
      this.setState(
        {
          content
        },
        () => {
          this.copyToClipboard();
        }
      );
  }

  toLowerCase() {
    const content = this.state.content.toLowerCase();

    if (content.length === 0) {
      const placeholder = this.state.placeholder.toLowerCase();
      this._isMounted &&
        this.setState({
          placeholder
        });
      return;
    }

    this._isMounted &&
      this.setState(
        {
          content
        },
        () => {
          this.copyToClipboard();
        }
      );
  }

  toKebabCase() {
    let content = this.state.content;

    if (content.length === 0) {
      const placeholder = appUtility.toKebabCase(this.state.placeholder);
      this._isMounted &&
        this.setState({
          placeholder
        });
      return;
    }

    content = appUtility.toKebabCase(content);

    this._isMounted &&
      this.setState(
        {
          content
        },
        () => {
          this.copyToClipboard();
        }
      );
  }

  toSnakeCase() {
    let content = this.state.content;

    if (content.length === 0) {
      const placeholder = appUtility.toSnakeCase(this.state.placeholder);
      this._isMounted &&
        this.setState({
          placeholder
        });
      return;
    }

    content = appUtility.toSnakeCase(content);

    this._isMounted &&
      this.setState(
        {
          content
        },
        () => {
          this.copyToClipboard();
        }
      );
  }

  toCamalCase() {
    let content = this.state.content;

    if (content.length === 0) {
      const placeholder = appUtility.toCamalCase(this.state.placeholder);
      this._isMounted &&
        this.setState({
          placeholder
        });
      return;
    }

    content = appUtility.toCamalCase(content);

    this._isMounted &&
      this.setState(
        {
          content
        },
        () => {
          this.copyToClipboard();
        }
      );
  }

  toTitleCase() {
    let content = this.state.content;

    if (content.length === 0) {
      const placeholder = appUtility.toTitleCase(this.state.placeholder);
      this._isMounted &&
        this.setState({
          placeholder
        });
      return;
    }

    content = appUtility.toTitleCase(content);

    this._isMounted &&
      this.setState(
        {
          content
        },
        () => {
          this.copyToClipboard();
        }
      );
  }

  render() {
    return (
      <div className='container'>
        <textarea
          autoFocus
          id='content'
          ref='content'
          value={this.state.content}
          onChange={this.handleChange}
          spellCheck='false'
          placeholder={this.state.placeholder}
        />

        <div className='char-props'>
          Character Count: {this.state.content.length}
          {this.state.copiedToClipboard && (
            <span className='copied-success-msg'>
              <img src={copy} alt='copy' />
              {` `}Copied to Clipboard!
            </span>
          )}
        </div>

        <div className='btn-continer'>
          <button
            onClick={this.toUpperCase}
            type='button'
            className='btn btn-primary'
          >
            UPPER CASE
          </button>
          <button
            onClick={this.toLowerCase}
            type='button'
            className='btn btn-secondary'
          >
            lower case
          </button>
          <button
            onClick={this.toKebabCase}
            type='button'
            className='btn btn-success'
          >
            kebab-case
          </button>
          <button
            onClick={this.toSnakeCase}
            type='button'
            className='btn btn-danger'
          >
            snake_case
          </button>
          <button
            onClick={this.toCamalCase}
            type='button'
            className='btn btn-warning'
          >
            camalCase
          </button>
          <button
            onClick={this.toTitleCase}
            type='button'
            className='btn btn-dark'
          >
            TitleCase
          </button>
          <span className='vertical-divider' />
          <button
            onClick={this.clearText}
            type='button'
            className='btn btn-outline-danger'
          >
            Clear
          </button>

          <hr />
        </div>

        <div className='desc'>
          <h1>Case Converter Created by VnoitKumar</h1>
          &nbsp;
          <a
            target='_blank'
            aria-label='hashtag'
            rel='noopener noreferrer'
            href='http://www.google.com/search?q=%23vnoitkumar'
          >
            #VnoitKumar
          </a>
        </div>
      </div>
    );
  }
}

export default App;
