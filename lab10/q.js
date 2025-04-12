function DOMActions() {
    document.getElementById("title").innerHTML = "Updated Title";
    document.querySelector("[name='username']").value = "John Doe";

    document.getElementsByName("gender").forEach(button => {
        if (button.checked) {
            const p = document.createElement("p");
            p.innerHTML = button.value;
            document.body.appendChild(p);
        }
    });

    const paraCount = document.createElement("p");
    paraCount.innerHTML = `The number of para tags: ${document.getElementsByTagName("p").length}`;
    document.body.appendChild(paraCount);

    document.querySelectorAll("ul li").forEach(li => console.log(li.innerHTML));

    document.querySelectorAll(".input-field").forEach(input => {
        input.style.backgroundColor = "lightblue";
    });

    const firstPara = document.querySelector("p.info");
    if (firstPara) {
        firstPara.innerHTML = "This is the first paragraph";
    }

    const gender = document.querySelector("[name='gender']:checked");
    if (gender) {
        const genderP = document.createElement("p");
        genderP.innerHTML = `Selected Gender: ${gender.value}`;
        document.body.appendChild(genderP);
    }

    const hobbiesP = document.createElement("p");
    hobbiesP.innerHTML = "The Selected Person's Hobbies are: ";
    document.body.appendChild(hobbiesP);

    document.querySelectorAll(".hobby").forEach(hobby => {
        hobby.checked = true;
        const hobbyP = document.createElement("p");
        hobbyP.innerHTML = hobby.value;
        document.body.appendChild(hobbyP);
    });
}