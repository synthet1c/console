import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Method.scss'

const Params = ({ name, params }) =>
	<div>
		<h5 className={styles.heading}>{name}</h5>
		<ul>
			{params[name] && params[name].length
				? params[name].map(x => <li>{x}</li>)
				: <li>void</li>
			}
		</ul>
	</div>

const Description = ({ clazz, params }) =>
	<div>
		<div>{params.desc || ''}</div>
		<Params params={params} name="@param" />
		<Params params={params} name="@return" />
	</div>

const normalizeComment = (clazz, name, comment = '') => {
	if (!comment) return comment
	const arr = comment.split('\n')
	const formatted = arr
		.slice(1, arr.length - 1)
		.map(x => x.replace(/^\s*\*\s/g, ''))
		.filter(x => !new RegExp(name).test(x) && !/^\s*$/.test(x))
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
		/*
		.map(x =>
			<Param params={x}/>
		)
		*/

	console.log(formatted)

	return <Description clazz={clazz} params={formatted} />
}

const Method = ({ clazz, doc, fn, name, params }) =>
	<section className={styles.root}>
		<div className={styles.header}>
			<h4 className={styles.heading}>{clazz}::{name}({params})</h4>
		</div>
		<div className={styles.content}>
			<div className={styles.comment}>
				{normalizeComment(clazz, name, doc)}
			</div>
		</div>
	</section>

export default Method