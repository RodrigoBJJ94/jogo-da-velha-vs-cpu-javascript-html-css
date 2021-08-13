
        let game = [];
        let board = [];
        let whosPlay = 0; // = 0 Jogador, = 1 CPU
        let verify;
        let playing = true;
        let level = 2;
        let moveCpu = 1;
        let whosStart = 1;
        let move = 0;

        function easy() {
            level = 1;
        }

        function hard() {
            level = 2;
        }
 
        function cpuPlay() {
            if (playing) {
                let l, c;
                if (level === 1) {
                    do {
                        l = Math.round(Math.random() * 2);
                        c = Math.round(Math.random() * 2);
                    } while (game[l][c] !== '');
                    game[l][c] = 'O';
                } else if (level === 2) {
                    if ((game[0][0] === 'O') && (game[0][1] === 'O') && (game[0][2] === '')) {
                        game[0][2] = 'O';
                    } else if ((game[0][0] === 'O') && (game[0][2] === 'O') && (game[0][1] === '')) {
                        game[0][1] = 'O';
                    } else if ((game[0][2] === 'O') && (game[0][1] === 'O') && (game[0][0] === '')) {
                        game[0][0] = 'O';
                    } else if ((game[1][0] === 'O') && (game[1][1] === 'O') && (game[1][2] === '')) {
                        game[1][2] = 'O';
                    } else if ((game[1][0] === 'O') && (game[1][2] === 'O') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[1][2] === 'O') && (game[1][1] === 'O') && (game[1][0] === '')) {
                        game[1][0] = 'O';
                    } else if ((game[2][0] === 'O') && (game[2][1] === 'O') && (game[2][2] === '')) {
                        game[2][2] = 'O';
                    } else if ((game[2][0] === 'O') && (game[2][2] === 'O') && (game[2][1] === '')) {
                        game[2][1] = 'O';
                    } else if ((game[2][2] === 'O') && (game[2][1] === 'O') && (game[2][0] === '')) {
                        game[2][0] = 'O';
                    } else if ((game[0][0] === 'O') && (game[1][0] === 'O') && (game[2][0] === '')) {
                        game[2][0] = 'O';
                    } else if ((game[0][0] === 'O') && (game[2][0] === 'O') && (game[1][0] === '')) {
                        game[1][0] = 'O';
                    } else if ((game[1][0] === 'O') && (game[2][0] === 'O') && (game[0][0] === '')) {
                        game[0][0] = 'O';
                    } else if ((game[0][1] === 'O') && (game[1][1] === 'O') && (game[2][1] === '')) {
                        game[2][1] = 'O';
                    } else if ((game[0][1] === 'O') && (game[2][1] === 'O') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[1][1] === 'O') && (game[2][1] === 'O') && (game[0][1] === '')) {
                        game[0][1] = 'O';
                    } else if ((game[0][2] === 'O') && (game[1][2] === 'O') && (game[2][2] === '')) {
                        game[2][2] = 'O';
                    } else if ((game[0][2] === 'O') && (game[2][2] === 'O') && (game[1][2] === '')) {
                        game[1][2] = 'O';
                    } else if ((game[1][2] === 'O') && (game[2][2] === 'O') && (game[0][2] === '')) {
                        game[0][2] = 'O';
                    } else if ((game[0][0] === 'O') && (game[1][1] === 'O') && (game[2][2] === '')) {
                        game[2][2] = 'O';
                    } else if ((game[0][0] === 'O') && (game[2][2] === 'O') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[2][2] === 'O') && (game[1][1] === 'O') && (game[0][0] === '')) {
                        game[0][0] = 'O';
                    } else if ((game[0][2] === 'O') && (game[1][1] === 'O') && (game[2][0] === '')) {
                        game[2][0] = 'O';
                    } else if ((game[0][2] === 'O') && (game[2][0] === 'O') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[2][0] === 'O') && (game[1][1] === 'O') && (game[0][2] === '')) {
                        game[0][2] = 'O';
                    } else if ((game[0][0] === 'X') && (game[0][1] === 'X') && (game[0][2] === '')) {
                        game[0][2] = 'O';
                    } else if ((game[0][0] === 'X') && (game[0][2] === 'X') && (game[0][1] === '')) {
                        game[0][1] = 'O';
                    } else if ((game[0][2] === 'X') && (game[0][1] === 'X') && (game[0][0] === '')) {
                        game[0][0] = 'O';
                    } else if ((game[1][0] === 'X') && (game[1][1] === 'X') && (game[1][2] === '')) {
                        game[1][2] = 'O';
                    } else if ((game[1][0] === 'X') && (game[1][2] === 'X') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[1][2] === 'X') && (game[1][1] === 'X') && (game[1][0] === '')) {
                        game[1][0] = 'O';
                    } else if ((game[2][0] === 'X') && (game[2][1] === 'X') && (game[2][2] === '')) {
                        game[2][2] = 'O';
                    } else if ((game[2][0] === 'X') && (game[2][2] === 'X') && (game[2][1] === '')) {
                        game[2][1] = 'O';
                    } else if ((game[2][2] === 'X') && (game[2][1] === 'X') && (game[2][0] === '')) {
                        game[2][0] = 'O';
                    } else if ((game[0][0] === 'X') && (game[1][0] === 'X') && (game[2][0] === '')) {
                        game[2][0] = 'O';
                    } else if ((game[0][0] === 'X') && (game[2][0] === 'X') && (game[1][0] === '')) {
                        game[1][0] = 'O';
                    } else if ((game[1][0] === 'X') && (game[2][0] === 'X') && (game[0][0] === '')) {
                        game[0][0] = 'O';
                    } else if ((game[0][1] === 'X') && (game[1][1] === 'X') && (game[2][1] === '')) {
                        game[2][1] = 'O';
                    } else if ((game[0][1] === 'X') && (game[2][1] === 'X') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[1][1] === 'X') && (game[2][1] === 'X') && (game[0][1] === '')) {
                        game[0][1] = 'O';
                    } else if ((game[0][2] === 'X') && (game[1][2] === 'X') && (game[2][2] === '')) {
                        game[2][2] = 'O';
                    } else if ((game[0][2] === 'X') && (game[2][2] === 'X') && (game[1][2] === '')) {
                        game[1][2] = 'O';
                    } else if ((game[1][2] === 'X') && (game[2][2] === 'X') && (game[0][2] === '')) {
                        game[0][2] = 'O';
                    } else if ((game[0][0] === 'X') && (game[1][1] === 'X') && (game[2][2] === '')) {
                        game[2][2] = 'O';
                    } else if ((game[0][0] === 'X') && (game[2][2] === 'X') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[2][2] === 'X') && (game[1][1] === 'X') && (game[0][0] === '')) {
                        game[0][0] = 'O';
                    } else if ((game[0][2] === 'X') && (game[1][1] === 'X') && (game[2][0] === '')) {
                        game[2][0] = 'O';
                    } else if ((game[0][2] === 'X') && (game[2][0] === 'X') && (game[1][1] === '')) {
                        game[1][1] = 'O';
                    } else if ((game[2][0] === 'X') && (game[1][1] === 'X') && (game[0][2] === '')) {
                        game[0][2] = 'O';
                    } else {
                        if (move < 8) {
                            do {
                                l = Math.round(Math.random() * 2);
                                c = Math.round(Math.random() * 2);
                            } while (game[l][c] !== '');
                            game[l][c] = 'O';
                        } else {
                            for (let l = 0; l < 3; l++) {
                                for (let c = 0; c < 3; c++) {
                                    if (game[l][c] === '') {
                                        game[l][c] = 'O';
                                    }
                                }
                            }
                        }
                    }
                }
                verify = verifyVictory();
                if (verify !== '') {
                    alert(verify + ' venceu!');
                    playing = false;
                }
                updateBoard();
                move++;
                whosPlay = 0;
            }
        }

        function verifyVictory() {
            let l, c;

            for (l = 0; l < 3; l++) {
                if ((game[l][0] === game[l][1]) && (game[l][1] === game[l][2])) {
                    return game[l][0];
                }
            }

            for (c = 0; c < 3; c++) {
                if ((game[0][c] === game[1][c]) && (game[1][c] === game[2][c])) {
                    return game[0][c];
                }
            }

            if ((game[0][0] === game[1][1]) && (game[1][1] === game[2][2])) {
                return game[0][0];
            }

            if ((game[0][2] === game[1][1]) && (game[1][1] === game[2][0])) {
                return game[0][2];
            }

            return '';

        }

        function play(position) {
            if ((playing) && (whosPlay === 0)) {
                switch (position) {
                    case 1:
                        if (game[0][0] === '') {
                            game[0][0] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 2:
                        if (game[0][1] === '') {
                            game[0][1] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 3:
                        if (game[0][2] === '') {
                            game[0][2] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 4:
                        if (game[1][0] === '') {
                            game[1][0] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 5:
                        if (game[1][1] === '') {
                            game[1][1] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 6:
                        if (game[1][2] === '') {
                            game[1][2] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 7:
                        if (game[2][0] === '') {
                            game[2][0] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 8:
                        if (game[2][1] === '') {
                            game[2][1] = 'X';
                            whosPlay = 1;
                        }
                        break;
                    case 9:
                        if (game[2][2] === '') {
                            game[2][2] = 'X';
                            whosPlay = 1;
                        }
                        break;
                }

                if (whosPlay === 1) {
                    updateBoard();
                    verify = verifyVictory();
                    if (verify !== '') {
                        alert(verify + ' venceu!');
                        playing = false;
                    }
                    move++;
                    cpuPlay();
                }
            }
        }

        function updateBoard() {
            for (let l = 0; l < 3; l++) {
                for (let c = 0; c < 3; c++) {
                    if (game[l][c] === 'X') {
                        board[l][c].innerHTML = 'X';
                        board[l][c].style.cursor = 'default';
                    } else if (game[l][c] === 'O') {
                        board[l][c].innerHTML = 'O';
                        board[l][c].style.cursor = 'default';
                    } else {
                        board[l][c].innerHTML = '';
                        board[l][c].style.cursor = 'pointer';
                    }
                }
            }
        }

        function start() {
            easy();
            hard();
            playing = true;
            moveCpu = 1;
            move = 0;
            game = [['', '', ''], ['', '', ''], ['', '', '']];
            board = [
                [document.querySelector('#p1'), document.querySelector('#p2'), document.querySelector('#p3')],
                [document.querySelector('#p4'), document.querySelector('#p5'), document.querySelector('#p6')],
                [document.querySelector('#p7'), document.querySelector('#p8'), document.querySelector('#p9')]
            ];

            updateBoard();

            if (whosStart === 1) {
                whosStart = 0;
                whosPlay = whosStart;
                document.querySelector('.whos-start').innerHTML = 'Quem começa: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jogador';
            } else {
                whosStart = 1;
                whosPlay = whosStart;
                document.querySelector('.whos-start').innerHTML = 'Quem começa: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CPU';
                cpuPlay();
            }
        }

        window.addEventListener('load', start);