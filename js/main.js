'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const resuluts = ['大吉', '中吉', '凶', '末吉'];
    const n = Math.floor(Math.random() * resuluts.length);
    btn.textContent = resuluts[n];
  });
}