//格式示例
module.exports = {
	"overrides": [
		{
			"files": "*.wxml",
			"options": { "parser": "html" }
		},
		{
			"files": "*.wxss",
			"options": { "parser": "css" }
		},
		{
			"files": "*.wxs",
			"options": { "parser": "babel" }
		}
	]
};
