const menuItems = document.querySelectorAll('.menu__item');
const sections = document.querySelectorAll("main > section");
const observer = new IntersectionObserver(observerHandler, {threshold: 0.1});
function observerHandler(allSections) {
    allSections.map((section) => {
        let sectionClassName = section.target.className;
        let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassName}]`);
        if (section.isIntersecting) {
            sectionMenuItem.classList.add("menu__item--active");
        } else {
            sectionMenuItem.classList.remove("menu__item--active");
        }
    })
}
function removeActiveClass(className) {
    document.querySelector(`.${className}`).classList.remove(className);
}
sections.forEach(section => {
    observer.observe(section);
})
menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        removeActiveClass('menu__item--active');
        item.classList.add("menu__item--active");
        let sectionClass = item.dataset.section;
        let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop;
        window.scrollTo({
            top: sectionOffsetTop - 130,
            behavior: "smooth"
        });
    })
})
AOS.init();
let resumeArray=[
    {id:1,title:"DECO SHICK دکو شیک",img:"images/deco.webp",number:"140050140001119941",register:"429193",date:"1400/11/16",floor:[6,20,35,42]},
    {id:2,title:"ساراسا هوم",img:"images/sarsa.webp",number:"139950140001071770",register:"405521",date:"1399/06/29",floor:[18,35]},
    {id:3,title:"ماه بانو کناره",img:"images/banoo.webp",number:"139950140001120453",register:"399259",date:"1399/10/20",floor:[30]},
    {id:4,title:"هامرز",img:"images/hamorz.webp",number:"139750140001008534",register:"313667",date:"1397/02/06",floor:[3,8,11,16,35]},
    {id:5,title:"رفیق rafigh",img:"images/rafigh.webp",number:"139350140001020881",register:"229358",date:"1393/05/28",floor:[29,30,31,32,35]},
    {id:6,title:"مبلمان تای نور",img:"images/tay.webp",number:"139850140001070175",register:"353055",date:"1398/07/21",floor:[20]},
    {id:7,title:"ایران لوله جمالی",img:"images/jamali.webp",number:"139850140001049793",register:"342797",date:"1398/05/28",floor:[6,17]},
    {id:8,title:"چارتانChaartan",img:"images/chartan.webp",number:"139950140001023969",register:"365343",date:"1399/03/12",floor:[3,35]},
    {id:9,title:"سپینود SEPINOD",img:"images/sepinod.webp",number:"139550140001049387",register:"262380",date:"1395/08/05",floor:[3,35,39]},
    {id:10,title:"توکا نوین پلیمر صادقی",img:"images/sadeghi.webp",number:"139950140001061993",register:"379016",date:"1399/06/05",floor:[2,17,35]},
    {id:11,title:"برنج پشتکار زمین",img:"images/poshtkar.webp",number:"140050140001034249",register:"404041",date:"1400/03/26",floor:[30]},
    {id:12,title:"راچینه",img:"images/rachine.webp",number:"139850140001035536",register:"340025",date:"1398/04/22",floor:[29]},
    {id:13,title:"مینا س فلور minasflor",img:"images/flor.webp",number:"139750140001043277",register:"316877",date:"1397/06/13",floor:[3,35]},
    {id:14,title:"نخ کوک",img:"images/nakh.webp",number:"139850140001117949",register:"365392",date:"1398/11/20",floor:[25]},
    {id:15,title:"Ibach",img:"images/ibach.webp",number:"139650140001022889",register:"285147",date:"1396/04/01",floor:[9,15,35]},
    {id:16,title:"نوای کلاویه باران",img:"images/nava.webp",number:"139950140001140536",register:"412094",date:"1399/12/01",floor:[15,35]},
    {id:17,title:"Nice star نایس استار",img:"images/nice.webp",number:"139950140001046299",register:"375405",date:"1399/04/30",floor:[25,35]},
    {id:18,title:"بهشت نیاتوس",img:"images/niatos.webp",number:"139950140001147108",register:"406572",date:"1399/12/13",floor:[35,43,45]},
    {id:19,title:"خرقه kherghe",img:"images/kherghe.webp",number:"140050140001093796",register:"425396",date:"1400/09/03",floor:[25]},
]
const resumeWrapper=document.querySelector('#resume__wrapper')
window.addEventListener('load',()=>{
    resumeArray.forEach(resume=>{
        resumeWrapper.insertAdjacentHTML('afterbegin',
            `<div data-aos="zoom-in-down" class="col-span-1 xs:col-span-6 md:col-span-4 xl:col-span-3 flex flex-col items-center rounded-lg shadow p-4 bg-slate-600/60">
                <img src="${resume.img}" alt="brand" class="w-16 h-16 rounded shadow-sm">
                <h5 class="mt-3 font-estedadMedium text-sm md:text-lg">${resume.title}</h5>
                <h6 class="mt-4 font-estedadMedium text-xs md:text-base">شماره اظهارنامه</h6>
                <p class="text-2xs md:text-sm mt-2">${resume.number}</p>
                <h6 class="mt-4 font-estedadMedium text-xs md:text-base">شماره ثبت</h6>
                <p class="text-2xs md:text-sm mt-2">${resume.register}</p>
                <h6 class="mt-4 font-estedadMedium text-xs md:text-base">تاریخ ثبت اظهارنامه</h6>
                <p class="text-2xs md:text-sm mt-2">${resume.date}</p>
                <h6 class="mt-4 font-estedadMedium text-xs md:text-base">طبقه/طبقات بین المللی</h6>
                <p class="text-2xs md:text-sm mt-2">${resume.floor}</p>
            </div>
    `)
    })
})