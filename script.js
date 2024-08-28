let point = 0;
let limit = RNG(13, 25);
document.getElementById("limit").innerText = "남은 생성 횟수 : "+limit;
let nums = new Array(8);

function RNG(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genNum(gen) {
  if (limit > 0) {
    const randomNumber = RNG((2*gen+1), gen);
    document.getElementById("res"+gen).innerText = ""+randomNumber;
    limitDown();
    inputPoint(randomNumber, gen)
  } else {
    document.getElementById("limit").innerText = "유감이네요...";
  }
}

function inputPoint(num, gen) {
  nums[gen-1] = num;
  calcPoint(nums);
  for (let i = 0; i < 8; i++)
    if (nums[i] != undefined)
      document.getElementById("willadd").innerText = "결과 : "+Math.round(Math.log2(nums[0]*nums[1]*nums[2]*nums[3]*nums[4]*nums[5]*nums[6])*nums[7]);
}
function calcPoint(nums) {
  let res = 0;
  for (let i = 0; i < 7; i++)
    if (nums[i] != undefined)
      res += Math.log2(nums[i]);
    
  if (nums[7] != undefined)
    res = res*nums[7];

}
function genNum_8() {
  if (limit > 0) {
    const randomFloat = Math.random() * (3 - 0.2) + 0.2;
    const lastNum = Math.round(randomFloat * 10) / 10;
    document.getElementById("res"+8).innerText = ""+lastNum;
    limitDown();
    inputPoint(lastNum, 8);
  } else {
    document.getElementById("limit").innerText = "유감이네요...";
  }
}
function limitDown() {
  limit--;
  document.getElementById("limit").innerText = "남은 생성 횟수 : "+limit;
}