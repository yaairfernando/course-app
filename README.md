[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield2]][linkedin-url2]
[![Hireable][hireable]][hireable-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
 <h2 align="center"> Mini Course webside using react with ruby and rails </h2>

  <p align="center">
      In this project we developed a webside that shows a mini course with
different videos and plays every video when it is selected.
    <br />
    <a href="https://github.com/YairFernando67/course-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/YairFernando67/course-app">View Demo</a>
    ·
    <a href="https://github.com/YairFernando67/course-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/YairFernando67/course-app/issues">Request Feature</a>
  </p>

</p>

## Table of Contents
* [About the Project](#about-the-project)
  * [Styled Components](#Styled-Components)
  * [Built With](#built-with)
* [Contact](#contact)

## About The Project

![Screenshot Image](app/assets/images/logoRepo.jpeg) 

### Styled Components
* Styled Components allow you to write plain CSS in your components without worrying about class name collisions. 
* It helps to write CSS that's scoped to a single component and does not leak to any other element in the page

### Built With
The project was developed using the following technologies:
- [React](https://es.reactjs.org/)
- [JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Axios](https://github.com/axios/axios)
- [Rubyt](https://www.ruby-lang.org/es/)
- [Ruby on Rails](https://rubyonrails.org/)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
- [Styled-Components](https://www.styled-components.com/)
- [Wwebpacker](https://github.com/rails/webpacker)


## Required Installations

### Prerequisites

This project runs on [Ruby](https://www.ruby-lang.org/en/documentation/installation/), and [Rails](http://installrails.com/)

* Node
* NPM
* Ruby
* Rails

After installation, run `ruby -v` to make sure Ruby installed correctly. Example
```
$ ruby -v
ruby 2.6.4p104 (2019-08-28 revision 67798) [x86_64-linux]
```

Also make sure that Rails is installed, but running `rails -v`. 
Example
```
$ rails -v
Rails 6.0.2.1
```

### Installing

<p>Install the following to get this project running in your machine:</p>

### Instructions

<p>Follow these steps:</p>

Clone the Repository

```Shell
user@pc:~$ git clone https://github.com/YairFernando67/course-app
```

Click on the console and to go to the folder that was created

```Shell
user@pc:~$ cd course-app
```

This project uses [Postgresql](https://tecadmin.net/install-postgresql-server-on-ubuntu/)

Installing dependencies

```Shell
user@pc:~/course-app$ bundle install --without production
```

```Shell
user@pc:~/course-app$ rails db:create
```

```Shell
user@pc:~/course-app$ rails db:migrate
```

Run this command if you encountered a problem runing rails db:migrate

```Shell
user@pc:~/course-app$ bundle exec rails db:migrate
```

### Serve Project

Open two tabs on the console on the same folder course-app

Start the local server with rails:

```Shell
user@pc:~/course-app$ rails s
```

Start the local server with react:

```Shell
user@pc:~/course-app$ ./bin/webpack-dev-server
```

Open your browser on [http://localhost:3000](http://localhost:3000)


## Contact

👤 **Yair Fernando Facio**

<a href="https://yairfernando67.github.io/Portfolio/" target="_blank">
    
  ![Screenshot Image](app/assets/images/logo.jpg) 

</a>

- Github: [@YairFernando67](https://github.com/YairFernando67)
- Twitter: [@YairFernando18](https://twitter.com/YairFernando18)
- Linkedin: [softwaredeveloperyairfacio](https://www.linkedin.com/in/softwaredeveloperyairfacio/)
- Email: [yair.facio11@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=yair.facio11@gmail.com)
- Portfolio: [softwaredeveloper](https://yairfernando67.github.io/Portfolio/)

<p align="center">

  Project Link: [https://github.com/YairFernando67/course-app](https://github.com/YairFernando67/course-app)

</p>

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/YairFernando67/course-app/issues).

## Show your support

Give a ⭐️ if you like this project!

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/YairFernando67/course-app.svg?style=flat-square
[contributors-url]: https://github.com/YairFernando67/course-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/YairFernando67/course-app.svg?style=flat-square
[forks-url]: https://github.com/YairFernando67/course-app/network/members
[stars-shield]: https://img.shields.io/github/stars/YairFernando67/course-app.svg?style=flat-square
[stars-url]: https://github.com/YairFernando67/course-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/YairFernando67/course-app.svg?style=flat-square
[issues-url]: https://github.com/YairFernando67/course-app/issues
[license-shield]: https://img.shields.io/github/license/YairFernando67/course-app.svg?style=flat-square
[license-url]: https://github.com/YairFernando67/course-app/blob/master/LICENSE.txt
[linkedin-shield2]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url2]: https://www.linkedin.com/in/softwaredeveloperyairfacio/
[hireable]: https://cdn.rawgit.com/hiendv/hireable/master/styles/flat/yes.svg
[hireable-url]: https://www.linkedin.com/in/softwaredeveloperyairfacio/

