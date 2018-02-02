export default class MaiorEMenor {

  constructor(nums) {
    this.nums = nums;
    var menor;
    var maior;
  }

  encontra() {
    menor = Number.MAX_VALUE;
    maior = Number.MIN_VALUE;

    nums.array.forEach(num => {
      if (num < menor)
        menor = num;
      if (num > maior)
        maior = num;
    });
  }

  pagaMenor() {
    menor;
  }

  pegaMaior() {
    maior;
  }
}