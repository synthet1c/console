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

const Description = ({ clazz, name, params }) =>
	<div>
		<div>{params.desc || ''}</div>
		<Params params={params} name="@param" />
		<Params params={params} name="@return" />
	</div>

const normalizeComment = (clazz, name, description) => {

	console.log(description)

	return (
		<Description
			clazz={clazz}
			name={name}
			params={description}
		/>
	)
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