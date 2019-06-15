import React, { PureComponent } from 'react';
import styled from 'styled-components'
import { Button } from 'antd';

const PlaygroundView = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 3px;
  width: ${props => props.visible ? `calc(100% - ${props.isMobile ? 0 : 200}px)` : '0'};
  transition: width 0.5s;
  background: #172a3a;
  color: white;
  z-index: 10000;
`;

const CloseView = styled.div`
  position: absolute;
  text-align: right;
  width: 200px;
  right: 50px;
  top: 13px;
`;

class Playground extends PureComponent {
  state = {
    random: 0,
  }

  resetIframe = () => {
    this.setState({ random: this.state.random + 1 });
  }

  render() {
    const { visible, onClose, isMobile, url, noButton } = this.props;
    const { random } = this.state;
    return (
      <PlaygroundView isMobile={isMobile} visible={visible}>
        {!noButton ? (
          <CloseView>
            {visible ? (
              <Button type="primary" shape="circle" icon='redo' disabled={!visible} onClick={this.resetIframe} />
            ) : null}
            &nbsp;
            <Button type="primary" shape="circle" icon={visible ? 'close' : 'radar-chart'} onClick={() => onClose(!visible)} />
          </CloseView>
        ) : null}
       
        <iframe
          key={random}
          title="GraphQL Playground"
          src={url}
          width="100%"
          height="100%"
          frameBorder={0}
        />
      </PlaygroundView>
    )
  }
}

export default Playground;
