import React, {Component} from 'react';
import { connect } from 'react-redux'
import SearchBox from '../components/SearchBox'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

import  { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {  // Connecting State from Reducers to Props - Props is searchField
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => { // Connecting Action From Actions to Props - Props is onSearchChange
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots()
	}

	render() {
		const { searchField, onSearchChange , robots , isPending } = this.props // We declared them in mapStateToProps, mapDispatchToProps
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return isPending ? <h1>Loading</h1> :
		(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
				 		<CardList robotsInCard={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div> 
		);
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(App);

