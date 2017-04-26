function c1() {
  let a = 1;

  {
    console.log(a);
  }
}

function c2() {
  let a = 1;

  {
    let a = 2;
    console.log(a);
  }
}

function c3() {
  let a = 1;

  {
    console.log(a);
    let a = 2;
  }
}

c1();
c2();
c3();

