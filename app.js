document.addEventListener("DOMContentLoaded", function () {
  let generateDie = document.getElementById("generate-die");
  generateDie.addEventListener("click", function () {
    new Die(value);
  });

  let rollAll = document.getElementById("roll-all");
  //let sumAll = document.getElementById('sum-dice');

  let container = document.createElement("div");
  container.classList = "container";
  document.body.appendChild(container);

  let max = 6;
  let min = 1;
  let value = Math.floor(Math.random() * (max - min)) + min;
  let id = 1;

  class Die {
    constructor(value) {
      this.showDie();
      this.roll();
      rollAll.addEventListener("click", () => this.roll());
      //sumAll.addEventListener('click', () => this.sumDice())
    }

    showDie() {
      this.div = document.createElement("div");
      this.div.className = "dice";
      this.div.id = `dice${id}`;
      id++;
      this.dieValue = document.createTextNode(value);
      container.appendChild(this.div);
    }

    roll() {
      let randomNum = Math.floor(Math.random() * (max - min)) + min;
      this.div.innerText = randomNum;
    }
  }
});
