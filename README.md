<h1 align="center">
  <a href="#"> Bingo Generator </a>
</h1>

<h3 align="center">Make boring events more fun!</h3>

<p align="center">

  <img alt="Stars" src="https://img.shields.io/github/stars/tuszmak/bingo-generator?style=social">
  
  <a href="https://github.com/tuszmak/bingo-generatortuszmak/bingo-generator">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/tuszmak/bingo-generatortuszmak/bingo-generator">
  </a>

  <a href="https://github.com/evelinsteiger/">
    <img alt="made by Dániel Pintér" src="https://img.shields.io/badge/made%20by-Dániel%20Pintér-blue">
  </a>
</p>

<h4 align="center"> 
	 Status: In progress
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> •  
 <a href="#What-I-learned-with-this-project">Author</a> • 
 <a href="#user-content-license">Takeaway</a>
</p>

## About

Are you aware of the "This event wasn't in my \<current year> bingo card" meme? Were you watching a showcase event, where you expected certain announcements? Me too! That's why I made this site to play with these expectations.

---

## Features

- [x] Users are able to create and share their own packs.
- [x] These packs are:
  - [x] Likeable
  - [x] All random
  - [x] Variable sized

---

## How it works

The project is divided into two parts:

1. [Backend](https://github.com/tuszmak/bingo-generator-backend)
2. Frontend (this repo)

This repository is referring only to the Frontend part. For the backend, please visit the backend repo.

### Pre-requisites

If you are planning on local hosting, you will need to have the following tools installed on your machine:

- Git
- pnpm v10 (or other package manager)
- Node v22

#### Running the web application (Frontend)

```bash

# Clone this repository
$ git clone git@github.com:tuszmak/bingo-generator.git

# Access the project folder in your terminal
$ cd bingo-generator

# Install the dependencies
$ pnpm i

# Run the application in development mode
$ pnpm dev

# The application will open on the port: 3000 - go to http://localhost:3000

```

---

## Tech Stack

The following tools were used in the construction of the project:

#### **Platform** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router](https://reactrouter.com/)**
- **[Tailwind CSS](https://v3.tailwindcss.com/)**
- **[Shadcn UI](https://ui.shadcn.com/)**
- **[Zod](https://zod.dev/)**
- **[Clerk](https://clerk.com/)**
- **[Vite](https://vite.dev/)**

> See the file [package.json](https://github.com/tuszmak/bingo-generatortuszmak/bingo-generator/blob/master/package.json)

## Author

<a href="https://www.linkedin.com/in/pinter-daniel/">
 <p><b>Dániel Pintér</b></p></a>

## What I learned with this project

This is my first time using Clerk and Shadcn UI in a project that went this far. I have a ton of ambitious ideas, but I needed to limit the scope on it to not get burnt out.

## Future improvements

Note, that these ideas are out of scope for me, since I want to work on other projects too. They are reminders for me, and other people on what ideas I want to implement, when I get better.

- Multiplayer with Socket.io
- Customizable table color
- Player details for gameplay (win rate, playcount)
- Mobile release with Expo/React Native
