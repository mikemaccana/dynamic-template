module.exports = (templateString, templateVariables) => templateString.replace(/\${(.*?)}/g, (_, g) => templateVariables[g]);
