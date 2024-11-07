const str = 'The Quick Brown Fox Jumps Over The Lazy Dog.'

const title = document.querySelector('h1')

title.textContent = str

const lists = document.querySelectorAll('ul li')

// change uppercase
lists[0].textContent = str.toUpperCase()

// to lowercase
lists[1].textContent = str.toLowerCase()

//lenght method
lists[2].innerHTML = '<strongLength of string: </strong>' + str.length

//charAt method
lists[3].innerHTML = '<strong>Character at 10</strong>: '.concat(str.charAt(10))  

//replace method
lists[4].innerHTML = str.replace('Dog', 'Cat')

// replace all
lists[5].innerText = str.toLowerCase().replaceAll('the', 'that')

document.getElementById('week1').innerText = 
'Society grows when \nMen plant trees \nWhose shade they will \nNever seat under.'

document.getElementById('week2').textContent = `Fox is at index ${str.indexOf('Fox')}`

document.getElementById('week3').textContent = `Cat is at index ${str.indexOf('Cat')}`

document.querySelector('#week4').textContent = str.lastIndexOf('o')

document.getElementsByClassName('front')[0].textContent = 'Does the string contain "lazy": ' + str.includes('Lazy')

document.getElementsByClassName('front')[1].textContent = 'Does the string contain "hardworking": ' + str.includes('hardworking')

document.querySelectorAll('.front')[2].innerHTML = 'Does the string start with "The": ' + str.startsWith('The')

document.querySelectorAll('.front')[3].innerHTML = 'count the number of words: ' + str.split(' ').length

//slice method
document.getElementsByTagName('li')[10].textContent = str.slice(0,str.indexOf('x')+1) 
