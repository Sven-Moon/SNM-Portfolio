// import activateDropdowns from "./components/dropdown";

// activateDropdowns();

class Interest {
  constructor(id, data) {
    this.el = document.getElementById(id);
    this.el.className = "interest col-6-sm";
    this.createContainer = this.appendContainer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // add eventlistener
    this.el.addEventListener("click", this.handleClick);

    this.appendContainer(id, data);
  }
  appendContainer(id, data) {
    const node = document.createElement("article");
    node.className = "interest__container";
    const cardData = data[id];
    node.innerHTML = `    
      <div
        class="interest__header"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            url('${cardData.imgUrl}');
        "
      >
        ${cardData.name}
      </div>
      <div class="interest__content">
        <div class="interest__text">${cardData.copy.slice(0, 20) + "..."}
        </div>
      </div>
    `;

    this.el.appendChild(node);
  }
  handleClick(e) {
    const backdrop = document.getElementById("backdrop");
    backdrop.classList.toggle("show");
  }
}

const INTERESTS = {
  development: {
    name: "Why develop-ment?",
    copy: "I started out as a quality engineer, finding problems and solving them within a medical device production facility. What I soon learned is that the activities I enjoyed the most involved getting behind the scenes of MicroSoft Excel, tinkering with VBA to make our data collection and analysis better. After a while, I decided that this small part of my job should just be my job. I got a job at a softare company as a project manager, hoping to learn about the SDLC environment (which I did) and then move into a technical rol (which I didn't). So during COVID times I dedicated myself full-time to learning everything I could about coding, focusing on TypeScript and Angular. Now that I've been aroudn the block a little, I'm entirely convinced that development is my forever job because I love it. I can literally do this all day and happily come back for more the next. It gives me the opportunity to strive for my goal of becoming a master craftsman in a creative pursuit and I'm filled with joy thinking of how my efforts may be multiplied a thousand times over as people benefit from the carefully crafted features I've put together.",
    imgUrl: "https://picsum.photos/id/237/200/300",
  },
  tinkering: {
    name: "Tinkering",
    copy: "I grew up in a lower-than-middle-class home, so I've always known the value of doing things for myself. It's not all about the expense: with a little bit of effort, I can make things that fit my particular needs better than commercially available products. Often times, the product form I'm looking for just doesn't exist. So I've learned to build things on my own. Gorilla glue, paints,  heavy tools, and a soldering iron are my friends and co-workers as I make whatver it is that suits my fancy at that particular moment. It's empowering and sometimes cost saving. Mostly it's fun.",
    imgUrl: "https://picsum.photos/id/237/200/300",
  },
  gaming: {
    name: "Gaming",
    copy: "My mind is happiest when it's busy. It's nice to relax watching an episode of someething now and again, but on the whole, I'd much rather be forming a strategy to beat my opponent into submission (often my loving wife). Board games like Settlers of Catan, Scythe, Gloomhaven, and Dominion are great for folding strategies together. Blowing up some bad guys in one of the Borderlands games or commanding thousands of troops to wipe out an opposing army is fine when I just need to blow off somme steam. Either way, relaxation tends to be fast and furious.",
    imgUrl: "https://picsum.photos/id/237/200/300",
  },
  travel: {
    name: "Travel",
    copy: "It turns out that it really is worth the trip. Although my favorite travel as involved taking up temporary residence (Berlin, Istanbul), a short visit also tends to be highly satisfying and elucidating. Having seen many of Europe's monuments, I find I like speaking to inhabitants more. Understanding political and economic troubles, what constitutes as funny, and what tastes good in a region makes me feel like I know the place and it reminds me of what not to take for granted in my own locale. And it helps me discover a few recipes of various types as well.",
    imgUrl: "https://picsum.photos/id/237/200/300",
  },
  skills: {
    name: "Skills",
    copy: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Angular",
      "NGRX",
      "CSS/SASS",
      "HTML",
      "Git",
      "RxJs",
      "SQL",
      "Jira",
    ],
    imgUrl: "https://picsum.photos/id/237/200/300",
  },
  focus: {
    name: "Skills",
    copy: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Angular",
      "NGRX",
      "CSS/SASS",
      "HTML",
      "Git",
      "RxJs",
      "SQL",
      "Jira",
    ],
    imgUrl: "https://picsum.photos/id/237/200/300",
  },
};
const development = new Interest("development", INTERESTS);
const tinkering = new Interest("tinkering", INTERESTS);
const travel = new Interest("travel", INTERESTS);
// const gaming = new Interest("gaming", INTERESTS);
const focus = new Interest("focus", INTERESTS);
