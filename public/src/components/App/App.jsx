import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './App.scss'

import Constructor from '../Constructor'

const App = ({ classes }) =>
	<main className={styles.root}>
		<h3 className={styles.heading}>App</h3>
		<section>
			{Object.keys(classes).map((key, ii) =>
				<Constructor name={key} methods={classes[key]} key={ii} />
			)}
		</section>
	</main>

App.proptypes = {

}

const mapStateToProps = ({ objects }, props) => ({
	classes: objects.classes
})


export default connect(
	mapStateToProps
)(App)