


function changeStyle() {
  const divs = document.querySelectorAll(".block");
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    div.classList.toggle("circle")
  }


  const listItems = document.querySelectorAll("li");
  for (let i = 0; i < listItems.length; i++) {
    const li = listItems[i];
    li.classList.toggle("itemCard");
  }

  const spans = document.querySelectorAll("span");
  const paragraphs = document.querySelectorAll("p");
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    const p = paragraphs[i]

    const online = span.classList.toggle("online");

    if (online) {
      span.classList.remove("offline");
      p.innerText = "Online";
    } else {
      span.classList.add("offline");
      p.innerText = "Offline";
    }
  }
}