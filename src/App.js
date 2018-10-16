import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/*const Button1 = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
}
*/
const paperStyle = {
  height: 50,
  width: 500,
  margin: 20,
  textAlign: 'right',
  position: 'relative',
  };
  
  const appStyle = {
  height: 150,
  width: 500,
  margin: 20,
  textAlign: 'center',
  position: 'relative',
  };

function Key(props){
  return(
  <Grid item xs={3}>  
    <Button variant="outlined" size="large" className="Button" color="secondary" onClick={props.clicked} value={props.value}>{props.value}</Button>
  </Grid>  
  );
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = { operations : []
    };
  }

  buttonClicked = (ev) => {
    let operations_list = this.state.operations;
    
    const elem = ev.target.closest('.Button');
    
    switch(elem.value){
      case '=':
        const result = eval(this.state.operations.join(""))
        console.log(result)
        this.setState({operations: [result]});
        break;
      default:
          operations_list.push(elem.value)
          this.setState({operations: operations_list});
          console.log('Operations so far: '+ this.state.operations)
      }
        
    
    
  };



  render() {
    return (
      <Grid container className="App" style={appStyle}>
        <Grid container width="100%">
        <Paper className='test' style={paperStyle} elevation={1}>
            <Typography variant="h5" component="h3">
              {this.state.operations}
            </Typography>
        </Paper>
        </Grid>
        <Grid container >
          <Key className="buttonKey" value={1} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={2} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={3} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value="+" clicked={this.buttonClicked}/>
        </Grid>
        <Grid container >
          <Key className="buttonKey" value={4} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={5} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={6} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value="-" clicked={this.buttonClicked}/>
        </Grid>
        <Grid container >
          <Key className="buttonKey" value={7} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={8} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={9} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value="/" clicked={this.buttonClicked}/>
        </Grid>
        <Grid container >
          <Key className="buttonKey" value="CE" clicked={this.buttonClicked}/>
          <Key className="buttonKey" value={0} clicked={this.buttonClicked}/>
          <Key className="buttonKey" value="=" clicked={this.buttonClicked}/>
          <Key className="buttonKey" value="*" clicked={this.buttonClicked}/>
        </Grid>
      </Grid>
    );
  }
}

export default App;
