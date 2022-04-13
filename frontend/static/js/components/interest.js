import { Modal } from "./modal.js";

export class Interest {
  constructor(id, data) {
    this.data = data[id];
    // this.el = document.getElementById(id);
    // this.el.className = "interest col-6-sm";
    this.createInterestNode = this.createInterestNode.bind(this);
    this.createSkillsNode = this.createSkillsNode.bind(this);
    this.openModal = this.openModal.bind(this);

    this.interest =
      this.data.name == "Skills"
        ? this.createSkillsNode(id, this.data)
        : this.createInterestNode(id, this.data);
    // this.el.appendChild(interest);
  }
  createInterestNode(id, data) {
    const node = document.createElement("div");
    node.className = "interest__container";
    node.addEventListener("click", this.openModal);
    const cardData = data;
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
        <div class="interest__text modal__hide">${
          cardData.data.slice(0, 25) + "..."
        }
        </div>
        <div class="interest__text-modal modal__show">${cardData.data}
        </div>
      </div>
    `;
    return node;

    this.el.appendChild(node);
  }
  createSkillsNode(id, data) {
    const node = document.createElement("div");
    node.className = "interest__container";
    node.addEventListener("click", this.openModal);
    const cardData = data;

    const skillContainer = createSkills(cardData.data);

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
    `;
    node.appendChild(skillContainer);
    return node;
  }
  openModal() {
    const nodeCopy = this.getNode().cloneNode(true);
    new Modal(nodeCopy);
  }
  getNode() {
    return this.interest;
  }
}

function createSkills(cardData) {
  const skillContainer = document.createElement("div");
  skillContainer.className = "skillContainer";

  cardData.forEach((skillData) => {
    skillContainer.insertAdjacentHTML(
      "beforeend",
      `
          <div class="skill">
            <div class="skill__image" style="background-image: url('${skillData.imageUrl}')"></div>
            <div class="skill__name">${skillData.name}</div>        
          </div>  
        `
    );
  });
  return skillContainer;
}

export const INTERESTS = {
  development: {
    name: "Why development?",
    data: "I started out as a quality engineer, finding problems and solving them within a medical device production facility. What I soon learned is that the activities I enjoyed the most involved getting behind the scenes of MicroSoft Excel, tinkering with VBA to make our data collection and analysis better. After a while, I decided that this small part of my job should just be my job. I got a job at a softare company as a project manager, hoping to learn about the SDLC environment (which I did) and then move into a technical role (which I didn't). So during COVID times I dedicated myself full-time to learning everything I could about coding, focusing on TypeScript and Angular. Now that I've been around the block a little, I'm entirely convinced that development is my forever job because I love it. I can literally do this all day and happily come back for more the next. It gives me the opportunity to strive for my goal of becoming a master craftsman in a creative pursuit and I'm filled with joy thinking of how my efforts may be multiplied a thousand times over as people benefit from the carefully crafted features I've put together.",
    imgUrl:
      "https://res.cloudinary.com/sventerprise/image/upload/v1649620498/CT-Portfolio/softwaredev_obsloz.png",
  },
  tinkering: {
    name: "Tinkering",
    data: "I grew up in a lower-than-middle-class home, so I've always known the value of doing things for myself. It's not all about the expense: with a little bit of effort, I can make things that fit my particular needs better than commercially available products. Often times, the product form I'm looking for just doesn't exist. So I've learned to build things on my own. Gorilla glue, paints,  heavy tools, and a soldering iron are my friends and co-workers as I make whatver it is that suits my fancy at that particular moment. It's empowering and sometimes cost saving. Mostly it's fun.",
    imgUrl:
      "https://res.cloudinary.com/sventerprise/image/upload/v1649367104/CT-Portfolio/diy_zsszqy.jpg",
  },
  // gaming: {
  //   name: "Gaming",
  //   data: "My mind is happiest when it's busy. It's nice to relax watching an episode of something now and again, but on the whole, I'd much rather be forming a strategy to beat my opponent into submission (often my loving wife). Board games like Settlers of Catan, Scythe, Gloomhaven, and Dominion are great for folding strategies together. Blowing up some bad guys in one of the Borderlands games or commanding thousands of troops to wipe out an opposing army is fine when I just need to blow off somme steam. Either way, relaxation tends to be fast and furious.",
  //   imgUrl:
  //     "https://res.cloudinary.com/sventerprise/image/upload/v1649367702/CT-Portfolio/tabletop1_ckh2sq.jpg",
  // },
  travel: {
    name: "Travel",
    data: "It turns out that it really is worth the trip. Although my favorite travel has involved taking up temporary residence (Berlin, Istanbul), a short visit also tends to be highly satisfying and elucidating. Having seen many of Europe's monuments, I find I like speaking to inhabitants more. Understanding political and economic troubles, what constitutes as funny, and what tastes good in a region makes me feel like I know the place and it reminds me of what not to take for granted in my own locale. And it helps me discover a few recipes of various types as well.",
    imgUrl:
      "https://res.cloudinary.com/sventerprise/image/upload/v1649367460/CT-Portfolio/travel3_birxip.jpg",
  },
  skills: {
    name: "Skills",
    data: [
      {
        name: "Python",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789720/skills/download_etkt0c.png",
      },
      {
        name: "JavaScript",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789784/skills/download_wojg2z.png",
      },
      {
        name: "TypeScript",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789889/skills/download_y0tqut.jpg",
      },
      {
        name: "Angular",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789766/skills/download_msfomv.png",
      },
      {
        name: "CSS/SASS",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789804/skills/download_ddriua.png",
      },
      {
        name: "HTML",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789850/skills/download_dy1fdf.png",
      },
      {
        name: "Git",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789836/skills/download_kcqdkh.png",
      },
      {
        name: "RxJs/NGRX",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649789746/skills/download_lh5fun.png",
      },
      {
        name: "SQL",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649790087/skills/download_s0xu84.png",
      },
      {
        name: "Jira",
        imageUrl:
          "https://res.cloudinary.com/sventerprise/image/upload/v1649790282/skills/download_qmimit.jpg",
      },
    ],
    imgUrl:
      "https://res.cloudinary.com/sventerprise/image/upload/v1649791216/CT-Portfolio/hero_akfxys.webp",
  },
};
