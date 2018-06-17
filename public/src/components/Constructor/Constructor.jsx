import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Constructor.scss'

import Method from '../Method'

const Constructor = ({ name, methods }) =>
	<section className={styles.root}>
		<header className={styles.header}>
			<h3 className={styles.heading}>{name}</h3>
		</header>
		<div className={styles.content}>
			{methods.map((props, i) => <Method clazz={name} key={i} {...props} />)}
		</div>
	</section>

Constructor.proptypes = {

}

export default Constructor