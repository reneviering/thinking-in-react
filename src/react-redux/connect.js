import React from 'react';

import { StoreConsumer } from './index';

const withStoreConsuming = WrappedComponent => () => (
  <StoreConsumer>
    { store => <WrappedComponent store={ store } />}
  </StoreConsumer>
)

const connect = (mapStateToProps, actions) => WrappedComponent =>
  withStoreConsuming(
    class extends React.Component {
      state = mapStateToProps(this.props.store.getState());

      componentDidMount () {
        this.unsubscribeFromStore = this.props.store.subscribe(() => {
          this.setState(mapStateToProps(this.props.store.getState()));
        })
      }

      componentWillUnmount () {
        this.unsubscribeFromStore();
      }

      render () {
        const actionsWithDispatch = Object.keys(actions)
          .reduce((acc, actionName) => {
            acc[actionName] = (...args) => this.props.store.dispatch(actions[actionName](...args));
            return acc;
          }, {})

        return <WrappedComponent  { ...this.state } { ...actionsWithDispatch }/>
      }
    }
  )

export default connect;
