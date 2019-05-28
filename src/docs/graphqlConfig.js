export const ConfigQuery = {
  name: '',
  alias: '',
  props: (props) => ({}),
  options: (props) => ({
    variables: {},
    fetchPolicy: '',
    pollInterval: 0,
    notifyOnNetworkStatusChange: false,
    context: {},
    partialRefetch: false,
  }),
  skip: (props) => false,
  withRef: false,
}

export const ConfigMutation = {
  name: '',
  alias: '',
  props: (props) => ({}),
  options: (props) => ({
    variables: {},
    optimisticResponse: {},
    update: (proxy, response) => {},
    refetchQueries: [],
    awaitRefetchQueries: false,
    updateQueries: {}
  }),
  skip: (props) => false,
  withRef: false,
}