import stopword from 'stopword'

const emptyCommentReg = /^\s*\*\s*$/g
const emptyReg = /^\s*$/
const paramReg = /\s*@\w+\s/

const parsePHPDocComment = (name, comment) => {

	if (!comment) return comment
	const arr = comment.split('\n')
	const formatted = arr
	// drop the first and last line
		.slice(1, arr.length - 1)
		// remove empty lines
		.filter(x => (
			!new RegExp(name).test(x) && !/^\s*$/.test(x)
		))
		// clean * from each item
		.map(x => x.replace(/^\s*\*\s*/g, ''))
		.reduce((acc, x) => {
			const match = x.match(/@\w+/)
			const key = match && match[0]
			if (!acc.desc && !match) {
				acc.desc = x
			}
			else if (acc.desc && !acc['@param'].length && !match) {
				acc.desc = acc.desc.concat(' ' + x)
			}
			else if (acc.desc && !match && acc['@param'].length) {
				acc['@param'][acc['@param'].length - 1].concat(' ' + x)
			}
			else if (match && key) {
				if (typeof acc[key] === 'undefined') {
					acc[key] = []
				}
				acc[key].push(x.replace(/\s*@\w+\s/, '').trim())
			}
			else {
				acc.params.push(x.replace(/@param\s+/, '').trim())
			}
			return acc
		}, { desc: false, '@param': [] })
	return formatted
}

/*
const parsePHPDocComment = (comment) => {
	if (!comment) return comment
	const arr = comment.split('\n')
	return arr
	// drop the first and last line
		.slice(1, arr.length - 1)
		// remove empty lines
		.map(x => x.replace(emptyCommentReg, ''))
		.filter(x => (
			!new RegExp(name).test(x) && !emptyReg.test(x)
		))
		// clean * from each item
		.reduce((acc, x) => {
			const match = x.match(/@\w+/)
			const key = match && match[0]
			if (!acc.desc && !match) {
				acc.desc = x
			}
			else if (acc.desc && !acc['@param'].length && !match) {
				acc.desc = acc.desc.concat(' ' + x)
			}
			else if (acc.desc && !match && acc['@param'].length) {
				acc['@param'][acc['@param'].length - 1].concat(' ' + x)
			}
			else if (match && key) {
				if (typeof acc[key] === 'undefined') {
					acc[key] = []
				}
				acc[key].push(x.replace(paramReg, '').trim())
			}
			else {
				acc['@param'].push(x.replace(paramReg, '').trim())
			}
			return acc
		}, {desc: false, '@param': []})
}
 */

const unCamel = str =>
	str.match(/([A-Z][a-z]+|[a-z]+)/g)
		.map(x => x.toLowerCase())

const compileSynonyms = (name, comment) => {
	return Array.from(new Set(
		stopword.removeStopwords(unCamel(name))
			.concat(comment.desc ? comment.desc.toLowerCase().split(' ') : [])
	))
}

const formatItem = className => ({ name, doc, params }) => {
	const comment = parsePHPDocComment(name, doc)
	return ({
		className,
		name,
		doc: comment,
		synonyms: compileSynonyms(name, comment),
		params
	})
}

export default formatItem


