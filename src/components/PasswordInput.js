import React, { Component } from 'react';
  
class PasswordInput extends Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    }
    this.autoMoveCursor = this.autoMoveCursor.bind(this);
  }

  autoMoveCursor() {
    if (this.input3.value !== "")
      this.input4.focus();
    else if (this.input2.value !== "")
      this.input3.focus();
    else if (this.input1.value !== "")
      this.input2.focus();
    else
      this.input1.focus();
  }

  render() {
    const { disabled } = this.state;

    return (
      <div className="input-group password-input-div">
        <input type="text" className="form-control password-input"
          style={{ "fontSize": "500%" }} 
          ref={(input) => { this.input1 = input; }}
          onKeyPress={(e) => {
            this.input1.value = e.target.value;
            this.input2.focus();
          }}
          onClick={this.autoMoveCursor}
          disabled={disabled ? 'disabled' : ''}
        />
        <input type="text" className="form-control password-input" 
          style={{ "fontSize": "500%" }}
          ref={(input) => { this.input2 = input; }}
          onKeyPress={(e) => {
            this.input2.value = e.target.value;
            this.input3.focus();
          }}
          onClick={this.autoMoveCursor}
          disabled={disabled ? 'disabled' : ''}
        />
        <input type="text" className="form-control password-input" 
          style={{ "fontSize": "500%" }}
          ref={(input) => { this.input3 = input; }}
          onKeyPress={(e) => {
            this.input3.value = e.target.value;
            this.input4.focus();
          }}
          onClick={this.autoMoveCursor}
          disabled={disabled ? 'disabled' : ''}
        />
        <input type="text" className="form-control password-input" 
          style={{ "fontSize": "500%" }}
          ref={(input) => { this.input4 = input; }}
          onChange={() => {
            this.input4.blur();
            const passwd = this.input1.value + this.input2.value + this.input3.value + this.input4.value;
            if (this.props.checkPassword(passwd))
              this.setState({ disabled: true });
            else {
              this.input1.value = '';
              this.input2.value = '';
              this.input3.value = '';
              this.input4.value = '';
              this.input1.focus();
            }
          }}
          onClick={this.autoMoveCursor}
          disabled={disabled ? 'disabled' : ''}
        />  
      </div>
    );
  }
}

export default PasswordInput;
