import React from 'react';
import PropTypes from 'prop-types';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';
import ErrorBoundary from '../common/ErrorBoundary';
import {addBaseRef, remoteImport, removeBaseRef} from './util';

class FetchMicroApp extends React.Component {
  static propTypes = {
    moduleName: PropTypes.string.isRequired,
    basePath: PropTypes.string,
  };

  static defaultProps = {
    basePath: '/',
  };

  constructor(props) {
    super(props);
    this.baseUrlId = `${props.moduleName}-baseurl`;
  }

  componentDidMount() {
    addBaseRef(this.baseUrlId, this.props.basePath);
  }

  componentWillUnmount() {
    removeBaseRef(this.baseUrlId);
  }

  render() {
    return (
      <ErrorBoundary>
        <Parcel config={remoteImport(this.props.moduleName)} mountParcel={mountRootParcel} />
      </ErrorBoundary>
    );
  }
}

export default FetchMicroApp;
