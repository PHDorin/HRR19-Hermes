import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import TextField from 'material-ui/TextField';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// injectTapEventPlugin();

class CustomTask extends React.Component {
  constructor(props){
    super(props)
    this.tasks = [];
    this.currentId=0;
    this.state ={
      title:'',
      description:'',
      startTime:'',
      endTime:''
    }
    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleChange3 = this.handleChange3.bind(this)
    this.handleChange4 = this.handleChange4.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  handleChange1(event){
    this.setState({title: event.target.value})
  }

  handleChange2(event){
    this.setState({description: event.target.value})
  }

  handleChange3(event){
    this.setState({startTime: event.target.value})
  }

  handleChange4(event){
    this.setState({endTime: event.target.value})
  }

  addTask(event){
    event.preventDefault();
    var task = {
      id: this.currentId,
      title: this.state.title,
      description: this.state.description,
      startTime: this.state.startTime,
      endTime: this.state.endTime
    }
    this.currentId++
    this.tasks.push(task)
    console.log('the array of tasks is: ',this.tasks)
    this.setState({
      title:'',
      description:'',
      startTime:'',
      endTime:''
    })
  }

  render () {
    return (
      <div className='inputForm'>
        <form>
          <h2> Add a Task </h2>
          Title:
          <input
            type='text'
            required={true}
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleChange1}
          /><br/> 
          Description:
          <input
            type='text'
            required={false}
            value={this.state.description}
            onChange={this.handleChange2}
          /><br />
          Start Time:   
          <input
            type='text'
            required={true}
            value={this.state.startTime}
            onChange={this.handleChange3}
          /><br /> 
          End Time:  
          <input
            type='text'
            required={true}
            value={this.state.endTime}
            onChange={this.handleChange4}
          /><br /> 
          <button onClick={this.addTask}>
            SUBMIT!
          </button>
          <br /> 
        </form> 
      </div>  
    )
  }
}

export default CustomTask