import React, { Component } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';
import { colors } from 'config';
import { infiniteAnimation } from 'utils';

const Container = styled.View`
  padding: 10px;
  border-bottom-width: 1;
  border-bottom-color: #ededed;
  background-color: transparent;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 34;
`;

const TextBar = styled(Animated.View)`
  height: 7;
  width: 150;
  background-color: ${colors.greyDark};
`;

export class LoadingListItem extends Component {
  constructor() {
    super();
    this.fadeFrom = 0.3;
    this.fadeTo = 0.6;
    this.state = {
      fadeAnimValue: new Animated.Value(this.fadeTo),
    };
  }

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation() {
    infiniteAnimation(
      this.state.fadeAnimValue,
      this.fadeFrom,
      this.fadeTo,
      () => {
        this.runAnimation();
      }
    );
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <TextBar style={{ opacity: this.state.fadeAnimValue }} />
        </Wrapper>
      </Container>
    );
  }
}
