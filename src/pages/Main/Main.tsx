import { Component, ReactElement, Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { textColors } from "../../styles";

interface IState {
  language: "en" | "uk";
}

class Main extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: "en",
    };
  }

  render(): ReactElement {
    return (
      <>
        <Header language={this.state.language} />
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default Main;
