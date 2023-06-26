import { Component, ReactElement } from "react";
import { ImSearch, ImMenu, ImCart } from "react-icons/im";
import Button from "../Button";
import Navigation from "../Navigation";
import add from "../../additional/functions";
import {
  StyledHeader,
  StyledMainLink,
  SearchButton,
  LanguageButton,
} from "./Header.styled";
import { textColors } from "../../styles";

interface IType {
  visible: boolean;
  language: "en" | "uk";
}

interface IProps {
  language: "en" | "uk";
}

class Header extends Component<IProps, IType> {
  clickedEvent: any;
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      language: this.props.language,
    };
  }

  onMenuClick = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  onLanguageClick = () => {
    this.setState((prevState): any => add.languageChanger(prevState));
  };

  render(): ReactElement {
    return (
      <StyledHeader>
        <Button theme={textColors} onClick={this.onMenuClick} text="">
          <ImMenu size={20} />
        </Button>
        <SearchButton
          search
          theme={textColors}
          onClick={this.onLanguageClick}
          text="search"
        >
          <ImSearch size={20} />
        </SearchButton>
        {this.state.visible && <Navigation />}
        <StyledMainLink to="/" theme={textColors}>
          {this.state.language === "en" ? "Shop title" : "Назва магазину"}
        </StyledMainLink>
        <LanguageButton
          theme={textColors}
          onClick={this.onLanguageClick}
          text={this.state.language}
        />
        <a href="/cart">
          <ImCart color="black" />
        </a>
        <a href="/">link</a>
      </StyledHeader>
    );
  }
}

export default Header;
