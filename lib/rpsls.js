export function rps(shot) {
    const hands = ['rock', 'paper', 'scissors'];
    if (shot === undefined) {
        return {"player" : "rock"};
    }
    else {
        let hand = shot.toLowerCase();
        if (!hands.includes(hand)) {
            return 'error';
        }
        else {
            var opponent = hands[Math.floor(Math.random() * hands.length)];
            let result = 'tie';
            if (hand === 'rock') {
                if (opponent === 'paper') {
                    result = 'lose';
                }
                else if (opponent === 'scissors') {
                    result = 'win';
                }
            }
            else if (hand === 'paper') {
                if (opponent === 'scissors') {
                    result = 'lose';
                }
                else if (opponent === 'rock') {
                    result = 'win';
                }
            }
            else if (hand === 'scissors') {
                if (opponent === 'rock') {
                    result = 'lose';
                }
                else if (opponent === 'paper') {
                    result = 'win';
                }
            }

            return {'player' : shot, 'opponent' : opponent, 'result' : result};
        }
    }
}

export function rpsls(shot) {
    const hands = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (shot === undefined) {
        return {"player" : "rock"};
    }
    else {
        let hand = shot.toLowerCase();
        if (!hands.includes(hand)) {
            return 'error';
        }
        else {
            var opponent = hands[Math.floor(Math.random() * hands.length)];
            let result = 'tie';
            if (hand === 'rock') {
                if (opponent === 'paper' || opponent === 'spock') {
                    result = 'lose';
                }
                else if (opponent === 'scissors' || opponent === 'lizard') {
                    result = 'win';
                }
            }
            else if (hand === 'paper') {
                if (opponent === 'scissors' || opponent === 'lizard') {
                    result = 'lose';
                }
                else if (opponent === 'rock' || opponent === 'spock') {
                    result = 'win';
                }
            }
            else if (hand === 'scissors') {
                if (opponent === 'rock' || opponent == 'spock') {
                    result = 'lose';
                }
                else if (opponent === 'paper' || opponent === 'lizard') {
                    result = 'win';
                }
            }
            else if (hand == 'lizard') {
                if (opponent === 'rock' || opponent === 'scissors') {
                    result = 'lose';
                }
                else if (opponent === 'spock' || opponent === 'paper') {
                    result = 'win';
                }
            }
            else if (hand === 'spock') {
                if (opponent === 'lizard' || opponent === 'paper') {
                    result = 'lose';
                }
                else if (opponent === 'scissors' || opponent === 'rock') {
                    result = 'win';
                }
            }

            return {'player' : shot, 'opponent' : opponent, 'result' : result};
        }
    }
}
