{
const play = function playGame(playerInput) {
  clearMessages();

  const moveName = function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    }
    if (argMoveId == 2) {
      return 'papier';
    }
    if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis. Zagraj jeszcze raz.');
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Przegrałeś :(');
    }
    if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
      printMessage('Nie wybrałeś poprawnie ruchu. Spróbuj ponownie.');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Przegrałeś :(');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Remis. Zagraj jeszcze raz.');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    }
    if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
      printMessage('Nie wybrałeś poprawnie ruchu. Spróbuj ponownie.');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Wygrałeś!');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Przegrałeś :(');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Remis. Zagraj jeszcze raz.');
    }
    if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
      printMessage('Nie wybrałeś poprawnie ruchu. Spróbuj ponownie.');
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1),
        argComputerMove = moveName(randomNumber),
        argPlayerMove = moveName(playerInput);

  console.log('Wylosowana liczba to: ' + randomNumber);

  printMessage('Mój ruch to: ' + argComputerMove);

//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  printMessage('Twój ruch to: ' + argPlayerMove);

  displayResult(argComputerMove, argPlayerMove);

  console.log('Ruchy graczy to: ' + argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
  play(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  play(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  play(3);
});
}