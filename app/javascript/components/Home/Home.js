import React, { Component} from 'react';
import Jumbotron from './Jumbotron'
import Table from './Table/Table';
import styled from 'styled-components';
import axios from 'axios';

const Body = styled.div`
  background: #f6f9fc;
` 

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      course_modules: []
    };

    this.handleVideoChange = this.handleVideoChange.bind(this)
  }

  componentDidMount() {
    axios.get('/episodes.json')
    .then((data) => {
      let res = []
      res = data.data.data.map((data) => {
        res.push({id: data.id, title: data.description, active: false})

        this.setState({
          course_modules: res
        })
      })
    })
    .catch((data) => {
      debugger
    })
  }

  handleVideoChange(item, e){
    e.preventDefault();
    let course_modules = [...this.state.course_modules]
    course_modules.map((data) => {
      if(item.id != data.id){
        data.active = false
      }
    });
    console.log(course_modules)
    console.log(item.active)
    item.active = !item.active
    console.log(item.active)
    course_modules[item.id -1] = item
    this.setState({
      course_modules: [...course_modules]
    })
    debugger
  }

  render() {
    return(
      <Body>
        <Jumbotron />
        <Table handleVideoChange={this.handleVideoChange} course_modules={this.state.course_modules}/>
      </Body>
    )
  };
};

export default Home;