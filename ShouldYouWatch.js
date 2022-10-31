/* Functions related to recommendation logic & random recommendation generator */

export function decide(anime) {
    const bad_rep = anime.on_hold + anime.dropped;
    if(anime.total == 0)
        return -1;
        
    if(anime.recommend == false)  {
        if ((anime.score < 1)|| bad_rep > (anime.total)*0.05) return -1;
    }
    else {
        if (bad_rep > (anime.total)*0.5) return -1;
        else if (bad_rep > (anime.total)*0.3) return 0;
    }

    return 1;
}


export function randomRecExpression(likeliness) {
    const rand = (Math.floor(Math.random()*100))%3;
    let expr = "";
    console.log('random:' + rand);
    switch (likeliness) {
        case -1:
            if (rand == 0) expr = 'Oh... No.';
            else if (rand == 1) expr = 'Seriously? No.';
            else expr = 'Nope.';

            break;
        case 0:
            if (rand == 0) expr = 'Hmmm... Maybe.';
            else if (rand == 1) expr = 'Maybe!'
            else expr =	'I guess?'

            break;
        default:
            if (rand == 0) expr = 'YES.'
            else if (rand == 1) expr = 'Definitely.'
            else expr = 'Please do!';		
    }

    return expr;
}
