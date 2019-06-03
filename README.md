# Cricket-Game-Simulation

## Problem Statement

It's the finals of the T20 Cup! Bengaluru and Chennai, neighbours and fierce rivals, are fighting it out for the title. Bengaluru's star batsman Kirat is at the crease. Can he win it for Bengaluru? Write code to simulate the last 4 overs of the match. It's the last 4 overs of the match. Bengaluru needs 40 runs to win and with 3 wickets left. Each player has a different probability for scoring runs. Your coding problem is to simulate the match, ball by ball. The match simulation will require you to use a weighted random number generation based on probability to determine the runs scored per ball.

<br />

**Rules of the game:**
* Batsmen change strike end of every over. They also change strike when they score a 1,3 or 5
* When a player gets out, the new player comes in at the same position.
* Assume only legal balls are bowled (no wides, no no-balls etc..). Therefore an over is always 6 balls.


**Sample output**

Bengaluru won by 1 wicket and 2 balls remaining<br />
Kirat Boli - 12 (6 balls)<br />
NS Nodhi - 25 (11 balls)<br />
R Rumrah - 2* (3 balls)<br />
Shashi Henra - 2* (2 balls)<br />
<br />
<br />
**Sample commentary**

4 overs left. 40 runs to win<br />
0.1 Kirat Boli scores 1 run<br />
0.2 NS Nodhi scores 4 runs<br />
0.3 NS Nodhi scores 1 run<br />
0.4 Kirat Boli scores 2 runs<br />
0.5 Kirat Boli scores 3 runs<br />
0.6 NS Nodhi scores 1 run<br />
3 overs left. 28 runs to win<br />
1.1 NS Nodhi scores 2 runs<br />
…<br />
....1<br />


## Implementation 

Implemented using NodeJs

***Dependencies:*** 

mocha.js - Run test<br />
chai.js - Assertion library

# Steps to run

1. Change directory to application's root directory
2. install dependencies
3. Run Test
4. Run the application

### Instruction to install dependencies 

*npm i*

### Instruction to run test 

*npm test*

### Instruction to run the application 

*npm start*

