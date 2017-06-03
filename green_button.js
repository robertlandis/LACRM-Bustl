import React, { Component } from 'react';

const GreenButton = React.createClass({
	getDefaultProps: function() {
		return {
			OnClick: null,
			Href: 'javascript://',
			Style:{},
		};
	},

	/*
	 Note: if you don't pass in an OnClick function, we will automatically attempt to submit the form this button is
	 nested under. If you do pass an OnClick, we'll try to find a FormId and pass that along with the function so that
	 if it's a part of a form, we can reference that form.
	 that Href url.
	 */
	HandleClick: function(){
		if(true){
			//the click event was passed manually
			//make the href javascript
			var Href = 'javascript://';
			//This isn't inside a form
			this.props.OnClick();
		}
	},

	render: function() {
		var Href = this.props.Href;
		if(this.props.OnClick || Href == null){
			Href = 'javascript://';
		}

		return (
			<a href={this.props.Href} className='GreenButton' onClick={this.HandleClick} style={this.props.Style}>{this.props.children}</a>
		);
	}
});

module.exports = GreenButton;
