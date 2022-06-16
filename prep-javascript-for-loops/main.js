let loop0 = '';

for (let i = 0; i < 10; i++) {
  loop0 = loop0 + i;
}

console.log(loop0);

let loop1 = '';

for (let i = 0; i < 10; i++) {
  loop1 = loop1 + i * 2;
}

console.log(loop1);

for (let i = 100; i > 0; i--) {
  console.log('Time till explosion: ' + i);
}
