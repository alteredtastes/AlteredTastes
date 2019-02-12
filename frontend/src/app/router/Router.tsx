import * as React from "react";
import { connect } from "react-redux";
import { styled } from "../../style/styled-components";

export class Router extends React.Component {
  render() {
    return (
      <RouterWrap>
        Hi there
      </RouterWrap>
    );
  }
}

export default connect(
  () => ({}),
  () => ({}))
(Router);

const RouterWrap = styled("div")``;