/*https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html*/
/*install with: npm install react-pdf*/


var PDF = require('react-pdf');
var MyApp = React.createClass({
	render: function(){
		return <PDF file="resume.pdf" page="1"/>
	},
	_onPdfCompleted: function(page,pages){
		this.setState({page: page, pages: pages});
	}
});

