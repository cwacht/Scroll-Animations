import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


const h1 = document.querySelector("h1");
const main = document.querySelector("#main");

h1?.animate(
    {
        transform: [
            'translate(0,0)',
            'translate(0,-5000%)'
        ]
    },
    {
        fill: 'both',
        timeline: new ViewTimeline({ subject: main }),
        delay: { phase: 'cover', percent: CSS.percent(0) },
        endDelay: { phase: 'cover', percent: CSS.percent(50) },
    }
);


const fadeUpObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("animate");
          fadeUpObserver.unobserve(entry.target);
        }
      })
    },
    { rootMargin: "-20%" }
  );
  
  function init(){
    document.querySelectorAll(".fade-up").forEach(fadeUp => {
      fadeUp.classList.remove("animate");
      fadeUpObserver.observe(fadeUp);
    });
  }
  init();
  
  
  const TopObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          // alert("OMG")
          init();
        }
      })
    },
    { threshold: 1 }
  );
  
    TopObserver.observe(document.getElementById("intro"));


const elem = document.getElementById("second");

elem?.animate(
    {
    transform: [
        'translate(0,100px) scale(0.5)',
        'translate(0,0) scale(1)'
    ],
    opacity: [0,1]
    },
    {
    fill: 'both',
    timeline: new ViewTimeline({ subject: elem }),
    delay: { phase: 'cover', percent: CSS.percent(30) },
    endDelay: { phase: 'contain', percent: CSS.percent(30) },
    }
);

function categoryAnimation(container, path){
    let animation = bodymovin.loadAnimation({
        container: container,
        path: path
    });
    container.addEventListener('click', function() {
        animation.playSegments([0,30], true);
    });
    return animation;
}

let animationBAM = categoryAnimation( document.getElementById("BAM"), "./jfiles/05_Animation_V05.json" );
const second = document.getElementById("second");
const secondObserver = new IntersectionObserver(
    entries => { entries.forEach(entry => {
        if(entry.isIntersecting){
            animationBAM.playSegments([0,30], true);
        }
    })},
    { threshold: 1 }
);
secondObserver.observe(second);

let animationBN = categoryAnimation( document.getElementById("BN"), "./jfiles/04_Animation_V03.json" );
const first = document.getElementById("first");
const firstObserver = new IntersectionObserver(
    entries => { entries.forEach(entry => {
        if(entry.isIntersecting){
            animationBN.playSegments([0,30], true);
        }
    })},
    { threshold: 1 }
);
firstObserver.observe(first);

let animationRealEstate = categoryAnimation( document.getElementById("RealEstate"), "./jfiles/05_Icon01_v01.json" );
let animationInfrastructure = categoryAnimation( document.getElementById("Infrastructure"), "./jfiles/05_Icon02_v01.json" );
let animationPrivateEquity = categoryAnimation( document.getElementById("PrivateEquity"), "./jfiles/05_Icon03_v01.json" );
let animationRenewables = categoryAnimation( document.getElementById("Renewables"), "./jfiles/05_Icon04_v01.json" );
let animationCredit = categoryAnimation( document.getElementById("Credit"), "./jfiles/05_Icon05_v01.json" );


const categories = document.getElementById("categories");
const animationObserver = new IntersectionObserver(
    entries => { entries.forEach(entry => {
        if(entry.isIntersecting){
            animationRealEstate.playSegments([0,30], true);
            animationInfrastructure.playSegments([0,30], true);
            animationPrivateEquity.playSegments([0,30], true);
            animationRenewables.playSegments([0,30], true);
            animationCredit.playSegments([0,30], true);
        }
    })},
    { threshold: 1 }
);
animationObserver.observe(categories);