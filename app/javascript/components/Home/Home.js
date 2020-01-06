import React, { Component} from 'react';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: [
        { id: 1, title: 'Setting up your rails application', description: 'Create your rails application with easy steps', active: false},
        { id: 2, title: 'Implementing react inside your rails application', description: 'Inject react to your application', active: false},
        { id: 3, title: 'Building a Hello World', description: 'Build greate application', active: false},
        { id: 4, title: 'Adding React Router DOM to your application', description: 'Adding new libraries to your rails application from react', active: false}
      ],

    };
  }

  render() {
    return(
      <div>Home</div>
    )
  };
};

export default Home;