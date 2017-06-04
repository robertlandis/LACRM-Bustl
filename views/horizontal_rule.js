import React from 'react';

import {
	View,
} from 'react-native';


const HorizontalRule = React.createClass({

	render: function(){

		return(
			<View style={{borderBottomWidth: 1, borderBottomColor: '#DBDFE0'}} />
		);
	}
});

module.exports = HorizontalRule;