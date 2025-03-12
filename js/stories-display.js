document.addEventListener("DOMContentLoaded", function () {
    console.log("📌 stories-display.js loaded!");

    const storiesContainer = document.getElementById("stories-container");

    if (!storiesContainer) {
        console.error("🚨 stories-container div is missing in HTML!");
        return;
    }

    if (window.stories && window.stories.length > 0) {
        console.log(`✅ Loaded ${window.stories.length} stories.`);
        
        window.stories.forEach((story, index) => {
            const storyDiv = document.createElement("div");
            storyDiv.classList.add("story");

            // Initial content with first paragraph only
            const storyExcerpt = story.content.split("</p>")[0] + "</p>";

            storyDiv.innerHTML = `
                <div class="story-header">
                    <img src="${story.profilePic}" class="profile-pic" alt="${story.username}">
                    <div class="story-user-info">
                        <span class="username">${story.username}</span>
                        <span class="timestamp">${story.timestamp}</span>
                    </div>
                </div>
                <h2>${story.title}</h2>
                <div class="story-content" id="story-${index}">${storyExcerpt}</div>
                <img src="${story.image}" class="story-image" alt="Story Image">
                <button class="read-more" data-index="${index}">Read More</button>
            `;

            storiesContainer.appendChild(storyDiv);
        });

        // Handle Read More functionality
        document.querySelectorAll(".read-more").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                const storyContentDiv = document.getElementById(`story-${index}`);

                if (this.textContent === "Read More") {
                    storyContentDiv.innerHTML = window.stories[index].content;
                    this.textContent = "Read Less";
                } else {
                    storyContentDiv.innerHTML = window.stories[index].content.split("</p>")[0] + "</p>";
                    this.textContent = "Read More";
                }
            });
        });

    } else {
        console.error("🚨 No stories found!");
    }
});