import React, { Component } from 'react';
import './App.css';
import Component_1 from './Component_1';
import Component_2 from './Component_2';
import Component_3 from './Component_3';
import Component_4 from './Component_4';

import { connect } from 'react-redux';

class App extends Component {

	render() {
		return (
			<>
				<div className="container pt-5">
					<h1 className="heading">
						<span>Redux</span>
						<button className="btn btn-info" id="theme">Вылечить всех</button>
					</h1>

					<hr/>

					<div className="card">
						<div className="card-body">
							<Component_1 />
							<Component_2 />
							{this.props.propsShowComponent && <Component_3 />}
							<Component_4 />
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state)=>{
	return {
		//propsShowComponent: state.showComponent_3    //приходит только то что надо
		propsShowComponent: state.reducer2.showComponent_3    //приходит только то что надо
	}
}

export default connect(mapStateToProps /*, mapDispatchToProps*/)(App)
//export default App;

