let flirt = [
    "When I send your pic to my group chat, which one would you like me to use?",
    "When your parents made you, they were really just showing off.",
    "I know your name is [insert their name], but can I call you mine?",
    "Do you believe in love at first sight, or do you need to look at my profile again?",
    "Aside from being this good-looking, what else do you do in your free time?",
    "I don’t believe in love at first sight, but you have me considering love at first swipe.",
    "I’d say bless you, but it looks like you already have been.",
    "Do you have a map? I just got lost in your eyes.",
    "My mom told me not to talk to strangers online, but I’ll make an exception for you",
    "Something’s wrong with my eyes because I can’t take them off of you.",
    "Well, here I am! What are your other two wishes?",
    "They say dating is a numbers game, so can I get yours?",
    "Are you a magician? 'Cuz when I look at you, everyone else disappears.",
    "Not to be cheesy, but oh my god you’re gorgeous!",
  "My sweet tooth has been driving me crazy since the second I saw your profile!",
  "I had this awesome pickup line, but I forgot it the moment I laid eyes on you.",
  "I tripped while looking at you. I guess you owe me a new pair of shoes.",
  "I had the best pickup line on the way, but I saw you and now I'm speechless.",
  "If you were a fruit, you’d be a fineapple. Ba dum tss.",
  "I assumed happiness started with an ‘H’ but I believe it actually starts with ‘U.’",
  "Are you my appendix? ‘Cuz this feeling in my stomach makes me want to take you out.",
  "On a scale of 1 to 10, you’re a 9, and I’m the 1 you need.",
  "Are you a fruit ‘cuz we could make a great pear.",
  "Are you a time traveler? ‘Cuz I see you in my future.",
  "Do you like bagels? Because you’re bae goals.",
  "Roses are red, violets are blue, how did I get so lucky to match with you?",
  "Do you watch Star Wars? Because Yoda only one for me.",
  "Hi, my name is [insert your name], but you can call me tonight or tomorrow.",
  "I’m no organ donor but I’d be happy to give you my heart.",
  "Are you a bank loan? ‘Cuz you have my interest.",
  "Life without you is like a broken pencil… pointless.",
  "Are you religious? ‘Cuz you’re the answer to all of my prayers.",
  "I must be in a museum because you truly are a work of art.",
  "Let’s commit the perfect crime. I’ll steal your heart, you steal mine.",
  "Even if there was no gravity on Earth, I’d still fall for you."
];


document.querySelector(".generate").addEventListener("click", pickup);

function pickup() {
    let number = Math.floor(Math.random() * 13) + 1;
    document.querySelector(".text").innerHTML = flirt[number];

}