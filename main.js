document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelectorAll(".bat");
    const tabContents = document.querySelectorAll(".tap-content");
  
    btns.forEach((bat) => {
      bat.addEventListener("click", () => {
        // Remove "active" class from all buttons and tab contents
        btns.forEach((bat) => bat.classList.remove("active"));
        tabContents.forEach(tabContent => tabContent.classList.remove("active"));
        
        // Add "active" class to the clicked button
        bat.classList.add("active");
        
        // Add "active" class to the corresponding tab content
        const targetId = bat.dataset.target;
        const targetContent = document.querySelector(targetId);
        if (targetContent) {
          targetContent.classList.add("active");
        }
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".qna-box");
  
    elements.forEach(element => {
      element.addEventListener('click', () => {
        let contentCon = element.querySelector(".content-con");
        contentCon.classList.toggle("showme");
      });
    });
  });
  
  
  