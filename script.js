let phrases = [
  { text: '2. Что 2? 2 пива, естесственно. Вы получаете 2 пива', image: 'https://sun9-58.userapi.com/impg/lOAYnIexe8WhvSzIG3TdXx53hxbrV1NJwuHabg/HYvuEX9BqvA.jpg?size=453x604&quality=96&sign=7d8427e3cd9803be25531e04a4bd5a3e&type=album' },
  { text: 'Лёха-квадробер. Вы получаете вкусняшку для шерстяных пи...томцев', image: 'https://sun9-74.userapi.com/impg/JnUW8izojfmuPaAYb3Tm-YYxdbwT0YFIY0xmnQ/hrzz5EELtfI.jpg?size=1215x2160&quality=96&sign=4033f9ad1f8e07a8d2f7e108b6aba5ec&type=album' },
  { text: 'Кальянный Лёха. Сегодня все кальяны забивает Никитос(опять работать)', image: 'https://sun9-45.userapi.com/impf/c840237/v840237465/59f1d/0IS-i_90c9o.jpg?size=1213x2160&quality=96&sign=736518dcd7fc864ba838d98a5b201bd5&type=album' },
  { text: 'Лёха под флешкой...Вы получаете светлую тему!(Сорри)', image: 'https://sun9-35.userapi.com/impg/3HMekZiz_6_J9ULjuLXlDI8JztLh-bkDzpyo2g/ClACJaavTYw.jpg?size=1215x2160&quality=96&sign=e82287a1d020684c4c60e5ff63d697ec&type=album' },
  { text: 'Ну нахер это светлую тему. Тут Лёха с Борисом Белозёровым. Уважаемые знатоки, сколько будет "2" + 8 в языке Javascript?', image: 'https://sun9-25.userapi.com/impf/c840331/v840331626/8390/Iv1uVZz30tk.jpg?size=592x1052&quality=96&sign=971e36c3f9470745d46dcb705a4924c8&type=album' },
  { text: 'Молодой Лёха. С волосами и со стопкой в руке. Волосы вернуть не так просто, а вот стопку можно. Накатим?', image: 'https://sun9-12.userapi.com/impf/c840134/v840134517/2142a/3BjfJKrrSIw.jpg?size=2080x1168&quality=96&sign=c327fb40a2fcbb8bd476382bf4114772&type=album' },
  { text: 'Криповый Лёха. Обосрались? Тогда вам полагается рулон туалетной бумаги', image: 'https://sun9-19.userapi.com/impf/c837138/v837138132/31633/k3VQWJeXZ0E.jpg?size=2304x1296&quality=96&sign=4128246140f301154771e3146241d6f8&type=album' },
  { text: 'Финальный Лёха. С др, дед!', image: 'https://sun9-59.userapi.com/impf/c633721/v633721408/1ac26/ItFjoROqiLw.jpg?size=1620x2160&quality=96&sign=20e03de9c7648d9b9f1ac7d1a650fd50&type=album' },
  { text: 'Какой же Леха выпадет? Сейчас увидим...', image: 'https://sun9-47.userapi.com/impg/bC3ML6YwvyQQf98qfiF-6tqMNKz1ca_os0QBOA/S4M4io0c1ak.jpg?size=1280x720&quality=96&sign=0c09bd4edb3d394c5fc8f593bbaeef06&type=album'}
];


let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
var i = 0;

button.addEventListener('click', function () {
  if (i === 9) i = 0;
  if (i === 3) {
    document.getElementById('elem').style.color="black";
    document.getElementById('elem').style.backgroundColor="white";
    document.getElementById('buttonid').style.border="1px solid black";
  } else {
    document.getElementById('elem').style.color="white";
    document.getElementById('elem').style.backgroundColor="#323131";
    document.getElementById('buttonid').style.border="1px solid white";
  }
  let randomElement = phrases[i];
  smoothly(phrase, 'textContent', randomElement.text);
  smoothly(image, 'src', randomElement.image);
  i++;
});