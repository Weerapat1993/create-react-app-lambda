import React from 'react'
import { shape, func } from 'prop-types'
import { Icon, Button } from 'antd'
import styles from './styles'

const ErrorPage = ({ history }) => (
  <div style={styles.errorContent}>
    <Icon type="close-circle" style={styles.errorIcon} />
    <div style={styles.errorHeader}>
      Oh Snap!
    </div>
    <div style={styles.errorText}>
      <div>Something went wrong!</div>
      <div>Please back to another page.</div>
    </div>
    <Button type='primary' size='large' onClick={() => history.push('/')}>Back to HomePage</Button>
  </div>
)

ErrorPage.propTypes = {
  history: shape({
    push: func,
  }).isRequired
}

export default ErrorPage
