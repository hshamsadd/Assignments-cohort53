export function giveCompliment(name) {
  const compliments = ['brilliant', 'awesome', 'kind', 'creative', 'smart', 'reliable', 'talented', 'thoughtful', 'amazing', 'inspiring']
  const randomIndex = Math.floor(Math.random() * compliments.length);
  const randomCompliment = compliments[randomIndex];
  return `You are ${randomCompliment}, ${name}!`;

}

function main() {
  const myName = 'Hussein';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Zain';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}