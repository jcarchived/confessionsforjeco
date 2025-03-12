document.addEventListener("DOMContentLoaded", function () {
    console.log("stories-display.js loaded!");

    const storiesContainer = document.getElementById("stories-container");

    if (typeof stories !== "undefined") {
        stories.forEach((story, index) => {
            const storyDiv = document.createElement("div");
            storyDiv.classList.add("story");

            // Extract first paragraph for preview
            const firstParagraph = story.content.match(/<p>(.*?)<\/p>/)[0];

            storyDiv.innerHTML = `
                <div class="story-header">
                    <img src="${story.profilePic}" class="profile-pic" alt="${story.username}">
                    <div class="story-user-info">
                        <span class="username">${story.username}</span>
                        <span class="timestamp">${story.timestamp}</span>
                    </div>
                </div>
                <h2>${story.title}</h2>
                <div class="story-content">${firstParagraph}</div>
                ${story.image ? `<img src="${story.image}" class="story-image" alt="Story Image">` : ""}
                <button class="read-more" data-index="${index}">Read More</button>
            `;

            storiesContainer.appendChild(storyDiv);
        });

        // "Read More" Button Logic
        document.querySelectorAll(".read-more").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                const storyContentDiv = this.previousElementSibling;

                // Toggle between full content and short preview
                if (storyContentDiv.innerHTML === stories[index].content) {
                    storyContentDiv.innerHTML = stories[index].content.match(/<p>(.*?)<\/p>/)[0]; // Show first paragraph
                    this.textContent = "Read More";
                } else {
                    storyContentDiv.innerHTML = stories[index].content; // Show full content
                    this.textContent = "Read Less";
                }
            });
        });

        console.log("Stories loaded successfully!");
    } else {
        console.error("Stories data is missing!");
    }
});