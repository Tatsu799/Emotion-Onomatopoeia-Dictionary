class Word{
    constructor(word, definition, pictureUrl){
        this.word = word;
        this.definition = definition;
        this.pictureUrl = pictureUrl;
    }
}

class EmotionObject{
    constructor(emotion, face, description, color, onomatopoeia){
        this.emotion = emotion;
        this.face = face;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }

    getOnomatopoeiaWords(){
        let onoWordArr = []; 
        for (let i = 0; i < this.onomatopoeia.length; i++) {
            let current = this.onomatopoeia[i];
            onoWordArr.push(new Word(current, dictionary[current], pictureDictionary[current]));
        }
        return onoWordArr;
    }

    getHtmlContainerString(){
        let bottomSection = 
        `
            <div class="bottomContainer bg-${this.color}">
                <h2>${this.emotion}</h2>
                <h3>${this.description}</h3>
                <div class="emotionBox">
        `;

        for (let i = 0; i < this.getOnomatopoeiaWords().length; i++) {
            let currentWord = this.getOnomatopoeiaWords()[i];
            bottomSection += 
            `
                <div class="emotionCard">
                    <div>
                        <h2>${currentWord.word}</h2>
                        <p>${currentWord.definition}</p>
                    </div>
                    <div class="imageBox">
                        <img class="image" src="${currentWord.pictureUrl}">
                    </div>
                </div>
            `
        }
        bottomSection += 
        `   
                </div>
            </div>
        `;

        return bottomSection;
    }
}

const dictionary = {
    "bark":"The sound made by a dog",
    "grunt":"Issue a low, animal-like noise",
    "roar":"Make a loud noise, as of an animal",
    "whack":"The act of hitting vigorously",
    "smack":"A blow from a flat object (as an open hand)",
    "hiss":`Make a sharp, elongated "s" sound`,
    "ahem":"The utterance of a sound similar to clearing the throat",
    "bawl":"Cry loudly",
    "bling":"Flashy, ostentatious jewelry",
    "boom":"A deep prolonged loud noise",
    "buzz":"The sound of rapid vibration",
    "caw":"Utter a cry, characteristic of crows, rooks, or ravens",
    "chatter":"Talk socially without exchanging too much information",
    "chant":"A repetitive song in which syllables are assigned to a tone",
    "clatter":"A continuous rattling sound as of hard objects falling or striking each other.",
    "clunk":"A heavy dull sound (as made by impact of heavy objects)",
    "crawl":"Move forward on the hands and knees or by dragging the body close to the ground.",
    "flick":"Throw or toss with a quick motion",
    "giggle":"A light, silly laugh.",
    "gargle":"An act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    "honk":"The cry of a goose or any loud sound resembling it",
    "oink":"The short low gruff noise of the kind made by hogs",
    "whine":"Complaint uttered in a plaintive way",
    "waah":"Sound made when crying by babies",
    "zing":"Ound my by something energetic"
};

const pictureDictionary = {
    "bark":"https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
    "grunt":"https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg",
    "roar":"https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
    "whack":"https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
    "smack":"https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
    "hiss":"https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
    "ahem":"https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
    "bawl":"https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
    "bling":"https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
    "boom":"https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
    "buzz":"https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
    "caw":"https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
    "chatter":"https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_960_720.jpg",
    "chant":"https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg",
    "clatter":"https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
    "clunk":"https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
    "crawl":"https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg",
    "flick":"https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
    "giggle":"https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
    "gargle":"https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
    "honk":"https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
    "oink":"https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
    "whine":"https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
    "waah":"https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
    "zing":"https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg"
};

const emotions = [
    new EmotionObject("Angry", "😠", "Feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("Happy", "🤗", "Feeling or showing pleasure or contentment.", "yellow", ["bling","chatter","chant","giggle"]),
    new EmotionObject("Bad", "😓", "Not such as to be hoped for or desired; unpleasant or unwelcome.", "beige", ["ahem","clatter","clunk"]),
    new EmotionObject("Sad", "😢", "Feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
    new EmotionObject("Surprised", "😮", "To feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
    new EmotionObject("Fearful", "😨",  "Feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
    new EmotionObject("Disgusted", "😩", "Feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
];

let topContainer = "";
for (let i = 0; i < emotions.length; i++) {
    let current = emotions[i];
    topContainer += 
    `           
        <a href="#sec${i}" style="text-decoration: none;">
            <div class="box bg-${current.color}">
                <h2>${current.emotion}</h2>
                <h1>${current.face}</h1>
                <p>${current.description}</p>
            </div>
        </a>
    `
}

let bottomContainer = "";
for (let i = 0; i < emotions.length; i++) {
    let current = emotions[i];
    bottomContainer +=
    `
        <div id="sec${i}">
            ${current.getHtmlContainerString()}
        </div>
    `
}

let htmlStrings = 
`
    <div class="topContainer">
        <div class="wordBox">
            ${topContainer}
        </div>
    </div> 
    ${bottomContainer}
</div>
`;

document.getElementById("target").innerHTML = htmlStrings;