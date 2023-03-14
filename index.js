let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = [ '.com', '.net', '.us', '.io']

for (let x of pronoun){
    for (let y of adj){
        for (let z of noun){
            for (let w of extension){
            console.log(x+y+z+w)}
        }
    }
}
