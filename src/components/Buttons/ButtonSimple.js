var React = require('react');
var ReactSimpleAlert = require('react-simple-alert');
 
var App = React.createClass({
    getInitialState: function() {
        return {
            alert: false 
        };
    },
    render: function() {
        var rsaOptions = {
            title: "Alert title",
            message: "This is an alert!",
            alert: this.state.alert,
            confirmButton: {
                text: "Save", 
                action: function(){
                    //Click action for the "Save" button
                }
            }
        };
        return (
            <div>
                <button onClick={this._alert}>alert</button>
                <ReactSimpleAlert options={rsaOptions} />
            </div>
        );
    },
 
    _alert: function(){
        this.setState({alert: true});
    }
});