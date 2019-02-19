var scoresJohn = 116 + 120 + 103;
var scoresMike = 116 + 120 + 123;
var scoresMary = 97 + 134 + 205;

var avJohns = scoresJohn / 3;
var avMike = scoresMike / 3;
var avMary = scoresMary / 3;

console.log(avJohns + ' ' + avMike + ' ' + avMary);

if (avJohns > avMike && avJohns > avMary){
    console.log('Johm, your team is the winner! Avarage of your final points is: ' + avJohns);
} else if (avJohns < avMike && avMike > avMary){
    console.log('Mike, your team is the winner! Avarage of your final points is: ' + avMike);
} else if (avMary > avJohns && avMary && avMike){
    console.log('Look who\'s the winner! Mary\'s Team won the game and their average score is: ' + avMary);
} else {
    console.log('It seems to be noone ho wins the game!' + avJohns);
}