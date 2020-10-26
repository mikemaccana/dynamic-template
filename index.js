module.exports.saveTemplate = (templateString, templateVariables) => {
  return templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g]);
};

module.exports.evalTemplate = (templateString, templateVariables) => {
  const keys = Object.keys(templateVariables);
  const values = Object.values(templateVariables);
  let templateFunction = new Function(...keys, `return \`${templateString}\`;`);
  return templateFunction(...values);
};
