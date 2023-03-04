let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain=[".com", ".es", ".gob", ".net"]

let fullDomain = "";

for (firstWord of pronoun) {
  for (secondWord of adj) {
    for (thirdWord of noun) {
        for(fourthWord of domain){
            console.log(firstWord+secondWord+thirdWord+fourthWord);
        }
    }
  }
}
