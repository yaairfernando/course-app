# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: "Hello World", description: "Create a react app with ruby and rails")

section = Section.create(title: "Chapter 1", course:course)

episode = Episode.create([
  { 
    title: 'Setting up your rails application', 
    description: 'Create your rails application with easy steps', 
    url: 'https://www.youtube.com/embed/DLX62G4lc44', 
    section: section
  },{ 
    title: 'Implementing react inside your rails application', 
    description: 'Inject react to your application', 
    url: 'https://www.youtube.com/embed/DLX62G4lc44', 
    section: section
  },{ 
    title: 'Building a Hello World', 
    description: 'Build greate application', 
    url: 'https://www.youtube.com/embed/DLX62G4lc44', 
    section: section
  },{ 
    title: 'Adding React Router DOM to your application', 
    description: 'Adding new libraries to your rails application from react', 
    url: 'https://www.youtube.com/embed/DLX62G4lc44', 
    section: section
  }
])