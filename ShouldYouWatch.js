// - se recommend = true
// 	- se 20% (dropa + on_hold). não sei se legal
// 	- se menos, recomenda
// - se recommend = false
// 	- se 5% dropa, nao recomenda

export default function decide(anime) {
    const bad_rep = anime.on_hold + anime.dropped;
    
    if(!anime.recommend)  {
        if (bad_rep > (anime.total)*0.05) return -1;
    }
    else {
        if (bad_rep > (anime.total)*0.2) return -1;
        else if (bad_rep > (anime.total)*0.1) return 0;
    }

    return 1;
}