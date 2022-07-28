/* eslint-disable indent */
// const stayHeavy = () => {
//     return 'GET THE FUCK OUT HERE...';
// };

// const bomDia = (callback) => {
//     console.log(callback());
// };

// bomDia(stayHeavy);

// const sumFixAmount = (amount) => {
//     return (number) => amount + number;
// };

// const initialSum = sumFixAmount(15);
// console.log(initialSum(0));

// const repeat = (number, action) => {
//     for (let count = 0; count < number; count += 1) {
//         action(number);
//     }
// };

// const isEven = (number) => {
//     if (number % 2 === 0) {
//         console.log(number, 'is even');
//         return;
//     }
// };

// const isOdd = (number) => {
//     if (number % 2 !== 0) {
//         console.log(number, 'is odd');
//     }
// };

// repeat(3, isOdd);

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback('Pedro Guerra'),
//     id2: callback('Luiza Drummond'),
//     id3: callback('Carla Paiva'),
//   };
//   return employees;
// };

// const pessoaContratada = (nomeCompleto) => {
//   const email = nomeCompleto.toLowerCase().split(' ').join('_');
//   return {nomeCompleto, email: `${email}@trybe.com.br`};
// };

// console.log(newEmployees(pessoaContratada));

// const generateNumber = () => {
//   // return parseInt((Math.random()*5).toFixed());
//   return Math.floor(Math.random()*5)+1;
// };

// const sorteio = (aposta, callback) => {
//   const random = callback();
//   if (aposta === random) {
//     return 'Parabéns você ganhou!';
//   }
//   return `Tente novamente. Numero aposta: ${aposta} | Sorteado: ${typeof(random)}`;
// };

// console.log(sorteio(2, generateNumber));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkCorrectAnswers = (correct, wrong) => {
//   const answer = correct + (wrong * 0.5);
//   return answer;
// };

// const verifyAnswers = (rightAnswers, studentsAnswer, checkCorrectAnswers) => {
//   let correct = 0;
//   let wrong = 0;
//   let na = 0;
//   for (let a = 0; a < rightAnswers.length && a < studentsAnswer.length; a += 1) {
//     if (studentsAnswer[a] === rightAnswers[a]) {
//       correct += 1;
//     }
//     else if(studentsAnswer[a] === 'N.A') {
//       na += 1;
//     }
//     wrong +=1;
//   }
//   const pontuation = checkCorrectAnswers(correct, wrong);
//   return `${pontuation}`;
// };

// console.log(verifyAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkCorrectAnswers));

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDamage: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon};

const dragonDamage = (battleMembers) => {
  const maxDamage = battleMembers['dragon']['strength'] - 15;
  const minDamage = 15;
  const random = Math.floor(Math.random() * (maxDamage - minDamage)) + minDamage;
  return `${random}`;
};

const warriorDamage = (battleMembers) => {
  const maxDamage = battleMembers['warrior']['weaponDamage'] * battleMembers['warrior']['strength'];
  const minDamage = battleMembers['warrior']['strength'];
  const random = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
  return `${random}`;
};

const mageDamage = (battleMembers) => {
  const maxDamage = battleMembers['mage']['intelligence'] * 2;
  const minDamage = battleMembers['mage']['intelligence'];
  const hasMana = (battleMembers['mage']['mana'] < 15) ? 'Não possui mana suficiente' : true;
  const manaStatus = (hasMana === true) ? battleMembers['mage']['mana'] - 15 : battleMembers['mage']['mana'];
  const random = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
  const mageStatus = {
    damage: random,
    mana: manaStatus,
  };
  return mageStatus;
};

const randomGenerate = (numStart, numStrength) => {
  if (numStart === numStrength) return numStart;
  return Math.floor(Math.random() * (numStrength - numStart) + numStart);
};

console.log(dragonDamage(battleMembers));
console.log(warriorDamage(battleMembers));
console.log(mageDamage(battleMembers));
