function makeTemplate(templateString, templateVariables) {
	const keys = Object.keys(templateVariables);
	const values = Object.values(templateVariables);
	let templateFunction = new Function(...keys, `return \`${templateString}\`;`);
	return templateFunction(...values);
}

module.exports = makeTemplate
