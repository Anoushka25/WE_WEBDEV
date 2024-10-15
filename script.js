document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");
    const tocList = document.querySelector("#table-of-contents ul");

    collapsibles.forEach((heading, index) => {
        heading.addEventListener("click", function() {
            const content = heading.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });

        // Generate Table of Contents
        const tocItem = document.createElement("li");
        tocItem.textContent = heading.textContent;
        tocItem.style.cursor = "pointer";
        tocItem.addEventListener("click", () => {
            heading.scrollIntoView({ behavior: "smooth" });
        });
        tocList.appendChild(tocItem);

        // Add subheadings to Table of Contents
        if (heading.tagName === "H2") {
            const subHeadings = heading.parentNode.querySelectorAll("h3");
            subHeadings.forEach((subHeading) => {
                const subTocItem = document.createElement("li");
                subTocItem.textContent = subHeading.textContent;
                subTocItem.style.marginLeft = "20px"; // Indent subheadings
                subTocItem.style.cursor = "pointer";
                subTocItem.addEventListener("click", () => {
                    subHeading.scrollIntoView({ behavior: "smooth" });
                });
                tocList.appendChild(subTocItem);
            });
        }
    });
});
