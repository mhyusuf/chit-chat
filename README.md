# Welcome to ChitChat

ChitChat is a web platform where foreign classrooms connect in real-time for language and cultural exchange with peers, all with the safety of supervision by their teachers. Traditional, classroom-based methods of language education fail to leverage the potential for growth through peer interaction across cultural and geographic divides.

*Tech stack: React, TypeScript, Sass, Socket.io, JWT, Express, PostgresSQL with Sequelize hosted on AWS RDS*

Check out a demo here: https://youtu.be/ynfuqu1ECkk

<span>
  <img width="700" alt="Screen Shot 2020-12-12 at 11 03 45 AM" src="https://user-images.githubusercontent.com/25126281/102017230-7a6abb00-3d5d-11eb-9fed-d40bfbf1d192.png">
</span>

# Getting Started

If you're interested in getting ChitChat up and running on your own machine, follow the steps below:
1. Git clone this repo with `git clone https://github.com/mhyusuf/chit-chat`
2. Open the directory with `cd chit-chat`
3. Install dependencies with `npm install`
4. Run the server and client bootstrap with `npm run dev`, which leverages the concurrently library to simultaneously launch processes on both ports 3000 and 5000

**NB: As we are not yet deployed or using Docker, if you wish to interact with app users/messages/etc, you'll have to follow the example in .env.example within the server directory to create your own .env file with information on the database you wish to use with the app.**

# Contributors
- Co-Founder, Full-Stack Engineer: Mohamed Yusuf - [GitHub profile](https://www.github.com/mhyusuf)
- Co-Founder, Full-Stack Engineer: Brett Glauser - [GitHub profile](https://www.github.com/bmcglauser)
- Co-Founder, Full-Stack Engineer: Matthew Hurst - [GitHub profile](https://www.github.com/Matt-Hurst)
