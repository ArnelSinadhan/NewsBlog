//toggleBtn
function showNavigation() {
  const navContainer = document.querySelector(".nav-container-mobile");
  navContainer.style.display =
    navContainer.style.display === "none" ? "block" : "none";
}

//NewsCard
const newsBlog = [
  {
    image: "main-css/image-8.png",
    title: "Front-End vs Back-End Developer: What's the Difference?",
    date: "January 3, 2023",
    "like-counts": "4.8 k",
  },
  {
    image: "main-css/image-7.png",
    title: "What is a Full Stack Developer?",
    date: "January 12, 2023",
    "like-counts": "3.2 k",
  },
  {
    image: "main-css/image-6.png",
    title: "What are Soft Skills and How Do They Benefit Your Career?",
    date: "January 22, 2023",
    "like-counts": "2.6 k",
  },
  {
    image: "main-css/image-5.png",
    title: "IT Jobs: In-Demand, Available to Everyone, Ripe With Opportunity",
    date: "January 29, 2023",
    "like-counts": "7.6 k",
  },
  {
    image: "main-css/image-4.png",
    title: "7 Learning Tips for Data Science Self-Study",
    date: "February 1, 2023",
    "like-counts": "1.5 k",
  },
  {
    image: "main-css/image-3.png",
    title: "Hard Skills vs. Soft Skills: Do You Really Need Both? Why?",
    date: "February 10, 2023",
    "like-counts": "4.9 k",
  },
  {
    image: "main-css/image-2.png",
    title: "What is JavaScript?",
    date: "February 16, 2023",
    "like-counts": "3.1 k",
  },
  {
    image: "main-css/image-1.png",
    title: "Who  is a Business Analyst: Roles, Skills, Salaries, Job Prospects",
    date: "February 22, 2023",
    "like-counts": "2.4 k",
  },
  {
    image: "main-css/image.png",
    title: "How Much Do Data Analysts Make? 2023 Salary Guide",
    date: "February 24, 2023",
    "like-counts": "2.6 k",
  },
];
const news = document.querySelector("main");
newsBlog.forEach((blog) => {
  news.innerHTML += `<div class="card-container">
                            <img src="${blog.image}" alt="">
                            <i class="fa-regular fa-circle-xmark delete"></i>
                            <div class="card-info-container">
                                <div class="card-info">
                                <i class="fa-regular fa-circle-check read"></i>
                                <p class="title">
                                    ${blog.title}
                                </p>
                                <div class="elements-container">
                                    <hr>
                                    <div class="publish-info">
                                        <div class="publish-date">
                                        <p class="date">${blog.date}</p>
                                        </div>
                                        <div class="reacts">
                                            <i class="fa-regular fa-heart favorite"></i>
                                            <p class="like-counts">${blog["like-counts"]}</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>`;
});

//Remove Function
const remove = document.querySelectorAll(".delete");
remove.forEach((element) => {
  element.addEventListener("click", function () {
    const cards = element.closest(".card-container");
    cards.remove();
  });
});

//Read Function
const read = document.querySelectorAll(".read");
read.forEach((element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("read-active");
  });
});

//Favorite Function
const favorite = document.querySelectorAll(".favorite");
favorite.forEach((fav) => {
  fav.addEventListener("click", function () {
    fav.classList.toggle("favorite-active");
  });
});
