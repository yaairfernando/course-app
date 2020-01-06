import React, { Component } from 'react';
import Item from './Item';
import ActiveoItem from './ActiveItem';

class Table extends Component {
  constructor(props){
    super(props)

  }

  render() {
    const item = this.props.course_modules.map(course =>{
      let handleVideoChange = this.props.handleVideoChange.bind(this, course)
      return (
        course.active ?
        <ActiveoItem handleVideoChange={handleVideoChange} key={course.id} title={course.title} description={course.description} /> :
        <Item handleVideoChange={handleVideoChange} key={course.id} title={course.title} description={course.description}/>
      )
    })

    return(
      <div className="pt-5 mt-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">Learn React and Rails</h2>
          </div>
          {item}
        </div>
      </div>
    )
  }
}

export default Table;