require('./main.css');

const name = 'Scotch.io';

setTimeout(() => alert(`Hello there from ${name}`), 300);

const persons = [
  new Person("Kurt", "Wonnegut","Socker"),
  new Person("Jan", "Peterson","Hockey"),
  new Person("Jane", "Peterson","Skating"),
  new Person("John", "Hansen","Socker"),
]


function Person(fn,ln,s){
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}


function makeTable(arr){
  return listPersons = arr.map(function(person){
    return '<tr><td>' + person[0] + '</td><td>' + person[1] + '</td><td>'+person[2] +'</td></tr>';
  })
}

const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;
