# E-Commerce-Back-End-ORM    ![license badge](https://img.shields.io/github/license/sareacct91/E-Commerce-Back-End-ORM)

## Description

An express server that is keeping track of e-commerce-back-end using an Sequelize ORM for MySQL database.

[Video Submission](https://www.youtube.com/watch?v=JxNhD8kU0ZU)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)


## Installation

require a local mySQL server - [Download here](https://dev.mysql.com/downloads/)

require NodeJS - [Download here](https://nodejs.org/en)

clone the repo and ```npm install``` to get all the dependencies

Create a mySQL database by connecting to your sql server in  the terminal

```mysql -u <username> -p```

run the commands ```source ./db/schema.sql``` to create the database

Exit out of MySQL terminal and run ```npm run seed``` to seed the database


## Usage

Run ```npm start``` to start the server

Using Postman/Insomnia, make a GET, POST, PUT, DELETE request to

> localhost:3001/api/categories
  >- localhost:3001/api/categories/:id

> localhost:3001/api/products
  >- localhost:3001/api/products/:id

> localhost:3001/api/tags
  >- localhost:3001/api/tags/:id


## License

**E-Commerce-Back-End-ORM** is licensed under the [MIT License](https://github.com/sareacct91/{data.githubRepoName}/blob/master/LICENSE)

## Contributing

[Contributor Covenant](https://www.contributor-covenant.org/)


## Questions

https://github.com/sareacct91

If you have any questions email me at sareacct91@gmail.com