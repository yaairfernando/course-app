import React, { Component } from 'react';
import Item from './Item';

class Table extends Component {
  constructor(props){
    super(props)

  }

  render() {
    const item = this.props.course_modules.map(course =>{
      return <Item key={course.id} title={course.title} description={course.description}/>
    })

    return(
      <div className="pt-5 mt-5">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-4 pb-4">Rails with react -- Videos</h2>
          </div>
          {item}
        </div>
      </div>
    )
  }
}

export default Table;