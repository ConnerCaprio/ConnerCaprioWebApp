# Conner Caprio Web App

To be hosted at: [Conner Caprio Web App](https://connercaprio.azurewebsites.net/)

This is a small web app to accomplish 3 main goals
- Showcase technical knowledge of .NET 6 and React
- Cement Existing Knowledge and increase knowledge base
- Have a personal site for my friends and I to use

## Showcase technical knowledge of .NET 6 and React

This site proves to current and possible new employers that I possess the technical knowledge to build a web application using the latest and most popular tools and frameworks

## Cement Existing Knowledge and increase knowledge base

My professional experience with .NET has been using the older (but still supported) .NET Framework and a .NET 6 project. Both of which I was not a part of when starting the project at
 the very beginning. Because of this people can fall into the trap of just adding on more code and following the precedents already set by the previous developers. By making this project
 from scratch I can confirm my knowledge and learn how to build enterprise apps from the inception phase.

## Have a personal site for my friends and I to use
A side aspect of this project is to track wines that my friends and I have tried. Trying new varietals and logging them can be a fun activity that doesn't feel repetitive

# Things Being Worked towards to improve the app
- Add [JsonConverter(typeof(JsonStringEnumConverter))] to wine type enum to improve front end forms and remove "magic numbers"
- Add WineDtos to front end so the front end doesn't worry about DB related things like Guid Ids
- Make changes toward classic MVC including having a service along with the controllers to process the data
- Implement dependency injection with the services and analyze which type to insert with ie: transient, scoped, singleton etc
- Add async support to whole application
- Wrap responses in Service Response with generics objects for additional information to the front end on responses
