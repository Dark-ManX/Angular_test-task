import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import video from "../../additional/video/bmw7.mp4";
import { Header, Video } from "./HeroSection.styled";

class HeroSection extends Component<any, string> {
  constructor(props: any, public key: string) {
    super(props);
    this.key = uuidv4();
  }

  render() {
    return (
      <section key={this.key}>
        <div>
          <Header>
            The future is
            <br />
            here
          </Header>
          <Video autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </Video>
        </div>
      </section>
    );
  }
}

export default HeroSection;
