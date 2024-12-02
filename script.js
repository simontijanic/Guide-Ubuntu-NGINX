document.addEventListener("DOMContentLoaded", () => {
    let sidebarLinks = document.querySelectorAll(".sidebar a");
    let chaptersChapter = document.querySelectorAll(".chapters .chapter")

    sidebarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const targetId = link.getAttribute("href").substring(1);
            const targetChapter = document.getElementById(targetId);


       //     targetChapter.scrollIntoView({
        //        behavior: "smooth",
        //        block: "start"
        //    });

            chaptersChapter.forEach(chapter => {
                chapter.style.display = "none";
            })
            targetChapter.style.display = "flex";

            sidebarLinks.forEach(link => {
                link.classList.remove("active"); 
            });
-            link.classList.add("active"); 
        });
    });
});
