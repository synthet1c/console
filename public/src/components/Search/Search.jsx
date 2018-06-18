import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Search.scss'

const Search = () =>
	<section className={styles.root}>
		<input className={styles.input} />
	</section>

const mapStateToProps = (state, props) => ({

})

const mapDispatchToProps = (dispatch, props) => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)