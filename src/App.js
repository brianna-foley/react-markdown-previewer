import React from 'react';
import Badge from "react-bootstrap/Badge";
import Markdown from 'marked-react';

const initialState = `
  This is a paragraph

  **This is bold text**

  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3

  > Block quote

  [Look at my cute dog](https://www.instagram.com/gureum_the_pom/)

  This is an inline block \`<div></div>\`

  This is a block of code:

  \`\`\`
  const x = 1;
  const y = 2;
  const z = x + y;
  \`\`\`

  ![Daisy](https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80)
`

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      markdown: initialState
    };
  }
  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" bg="dark">
                  Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col -md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" bg="secondary">
                    Markdown Input
                  </Badge>
                </h4>
              </div>
              <div className="mark-input">
                <textarea
                id="editor"
                className="input"
                style={inputStyle}
                value={this.state.markdown}
                onChange={(e) => {
                  this.updateMarkdown(e.target.value);
                }}
                >
                </textarea>
              </div>
            </div>

            <div className="col -md-6">
              <div className="col text-center">
                <h4>
                  <Badge className="text-align-center" bg="secondary">
                    Preview
                  </Badge>
                </h4>
              </div>
              <div
              id="preview"
              style={outputStyle}
              >
                <Markdown gfm="true" breaks="true" value={this.state.markdown}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
