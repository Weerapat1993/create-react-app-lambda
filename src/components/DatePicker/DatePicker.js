import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import { ActionSheet } from '../ActionSheet'

const DateInput = styled.div`
  width: 100px;
  padding: 10px;
  border: 1px solid #777;
`

class DatePicker extends PureComponent {
  state = {
    visible: false
  }

  handleActionSheet = (visible) => {
    this.setState({ visible })
  }
  
  render() {
    const { visible } = this.state
    return (
      <Fragment>
        <ActionSheet
          title={"Title"}
          textColor={"#0A0"}
          delay={0.5}
          visible={visible}
          onClose={() => this.handleActionSheet(false)}
        >
          Content
        </ActionSheet>
        <DateInput onClick={() => this.handleActionSheet(true)} />
      </Fragment>
    )
  }
}

export default DatePicker;