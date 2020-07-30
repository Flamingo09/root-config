/**
 * @description retrieves module
 * @return module default, where module default is single spa lifecycle
 * */
export const remoteImport = async (moduleName) => {
  let module = { default: {} };
  await SystemJS.import(moduleName).then((mod) => {
    module = mod.default;
  });
  return module;
};

/**
 * @description adding <base href='basePath' /> in index.ejs, where microapps routes will work on top of this
 * */
export const addBaseRef = (id, basePath) => {
  if (!document.getElementById(id)) {
    const headElement = document.getElementsByTagName("head")[0];
    const domElement = document.createElement("base");
    domElement.id = id;
    domElement.href = basePath;
    headElement.appendChild(domElement);
  }
};

/**
 * @description removes the <base> tag from the main dom.
 * */
export const removeBaseRef = (id) => {
  const domElement = document.getElementById(id);
  if(domElement)
    domElement.remove();
};

