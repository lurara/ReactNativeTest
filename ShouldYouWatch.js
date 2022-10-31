// - se recommend = true
// 	- se 20% (dropa + on_hold). não sei se legal
// 	- se menos, recomenda
// - se recommend = false
// 	- se 5% dropa, nao recomenda

export default function decide(anime) {
    const bad_rep = anime.on_hold + anime.dropped;

    if(anime.recommend == false)  {
        if (bad_rep > (anime.total)*0.05) return 'no';
    }
    else {
        if (bad_rep > (anime.total)*0.5) return 'no';
        else if (bad_rep > (anime.total)*0.3) return 'maybe';
    }

    return 'yes';
}