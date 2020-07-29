import React from 'react';
import Parcel from 'single-spa-react/parcel';
import {mountRootParcel} from 'single-spa';
import ErrorBoundary from "../common/ErrorBoundary";

const fetchMicroApp = (moduleName: string) => {
  const remoteImport: Record<string, any> = async () => {
    let module = {default: {}};
    await (window as any).SystemJS.import(moduleName).then((mod: any): void => {
      module = mod.default;
    });
    return module.default;
  }

  return (
    <ErrorBoundary>
      <Parcel config={remoteImport} mountParcel={mountRootParcel}/>
    </ErrorBoundary>
  )
}

export default fetchMicroApp;
