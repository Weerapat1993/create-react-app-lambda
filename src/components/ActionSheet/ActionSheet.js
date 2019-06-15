import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { bool, number, string, func, node, oneOfType, object, element } from 'prop-types';

const Sheet = styled.div`
  position: fixed;
  top: ${props => (props.visible ? '0%' : '100%')};
  opacity: ${props => (props.visible ? '1' : '0')};
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  transition: top ${props => props.delay}s, opacity 0.3s;
  overflow: hidden;
  border-top: 1px solid #e8e8e8;
  z-index: ${props => props.zIndex};
  height: ${props => props.height};
`;
const SheetTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-size: ${props => (props.titleSize ? `${props.titleSize}px` : '32px')};
  font-weight: bold;
  ${props => (props.isBorder ? 'border-bottom: 3px solid #e8e8e8;' : '')}
  color: ${props => props.textColor};
  ${props =>
    typeof props.sheetTitleStyle === 'function'
      ? props.sheetTitleStyle(props)
      : props.sheetTitleStyle}
`;
const SheetContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.padding};
  position: absolute;
  word-wrap: break-word;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  ${props =>
    props.isScrolling &&
    `
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  `}
`;
const Flex = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const BTNClose = styled.button`
  cursor: pointer;
  border: 0px;
  background: transparent;
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  padding: 0;
`;

const WrapContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
class ActionSheet extends PureComponent {
  static propTypes = {
    title: oneOfType([string, object, func, element]),
    textColor: string,
    visible: bool,
    delay: number,
    onClose: func,
    zIndex: number,
    padding: string,
    closeIcon: node,
    height: string,
    customContentCss: string,
  };

  static defaultProps = {
    title: '',
    textColor: '#333',
    visible: false,
    delay: 0.5,
    onClose: () => null,
    padding: '20px',
    zIndex: 1000,
    height: 'auto',
    isScrolling: false,
  };

  componentDidMount() {
    if (this.props.visible) {
      this.preventBodyScroll();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible && this.props.visible) {
      this.preventBodyScroll();
    }

    if (prevProps.visible !== this.props.visible && !this.props.visible) {
      this.resetBodyScroll();
    }
  }

  preventBodyScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    document.documentElement.style.overflow = 'hidden';
  };

  resetBodyScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.position = 'static';
    document.documentElement.style.overflow = 'auto';
  };

  render() {
    const {
      closeIcon,
      visible,
      delay,
      children,
      title,
      textColor,
      onClose,
      zIndex,
      height,
      padding,
      titleSize,
      isScrolling,
      sheetTitleStyle,
      ...rest
    } = this.props;

    return (
      <Sheet
        visible={visible}
        delay={delay}
        zIndex={zIndex}
        height={height}
        {...rest}
      >
        <SheetTitle
          titleSize={titleSize}
          textColor={textColor}
          isBorder={title}
          sheetTitleStyle={sheetTitleStyle}
        >
          {title}
          <Flex>
            <BTNClose onClick={() => onClose(!visible)}>
              {closeIcon || 'X'}
            </BTNClose>
          </Flex>
        </SheetTitle>
        <WrapContent>
          {visible && (
            <SheetContent padding={padding} isScrolling={isScrolling}>
              {children}
            </SheetContent>
          )}
        </WrapContent>
      </Sheet>
    );
  }
}

export default ActionSheet;
