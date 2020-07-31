import React from 'react';
import PropTypes from 'prop-types';
import Parcel from 'single-spa-react/parcel';
import {mountRootParcel} from 'single-spa';
import ErrorBoundary from '../common/ErrorBoundary';
import { remoteImport } from './util';

/**
 * @property domElement : the single-spa-react
 * */
class FetchMicroApp extends React.Component {
  static propTypes = {
    moduleName: PropTypes.string.isRequired,
    basePath: PropTypes.string,
    appName: PropTypes.string.isRequired
  };

  static defaultProps = {
    basePath: '/'
  };

  constructor(props) {
    super(props);
    this.baseId = `${this.props.appName}-baseUrl`;
    this.mountFnc = this.mountFnc.bind(this);
    this.unMountFnc = this.unMountFnc.bind(this);
  }

  mountFnc() {
    //addBaseRef(this.baseId, this.props.basePath);
    //window.basenameValue= this.props.basePath;
  }

  unMountFnc() {
    //removeDomElement(this.baseId);
    //window.basenameValue= '';
  }

  render() {
    return (
      <ErrorBoundary>
        <Parcel config={remoteImport(this.props.moduleName)}
                mountParcel={mountRootParcel}
                basename={this.props.basePath}
                mountFnc={() => this.mountFnc()}
                unMountFnc={() => this.unMountFnc()}
        />
      </ErrorBoundary>
    );
  }
}

export default FetchMicroApp;
