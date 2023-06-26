import { Component } from "react";
import { StyledBtn } from "./Button.styled";
import { textColors } from "../../styles";

interface IProps {
  onClick: any;
  text: string;
  theme?: any;
  children?: any;
  search?: boolean;
}

class Button extends Component<IProps> {
  render() {
    return (
      <StyledBtn theme={textColors} onClick={this.props.onClick}>
        {this.props.children}
        {this.props.text}
      </StyledBtn>
    );
  }
}

export default Button;
