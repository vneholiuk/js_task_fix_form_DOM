"use strict";
const inputs = document.querySelectorAll("input");
inputs.forEach((item)=>{
    const label = document.createElement("label");
    const labelText = item.getAttribute("name").toUpperCase().replace("T", "T ");
    label.textContent = labelText;
    const placeholder = item.getAttribute("name").charAt(0).toUpperCase() + item.getAttribute("name").slice(1).replace("t", "t ");
    label.textContent = labelText;
    label.classList.add("field-label");
    label.setAttribute("for", item.id);
    item.parentElement.insertBefore(label, item);
    item.setAttribute("placeholder", placeholder);
});

//# sourceMappingURL=index.f75de5e1.js.map