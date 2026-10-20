const H = document.createElement("h2")

const P = document.createElement("p")

const B = document.createElement("button")

H.classList.add("text-info")
H.textContent = "Sub Heading"

P.textContent = 
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod autem distinctio labore, ipsum rem dolore eligendi rerum nisi possimus voluptatem magnam mollitia ipsam quidem pariatur? Placeat, nisi temporibus. Quibusdam error eligendi placeat eos ad ratione, cum est dolor sint numquam! Mollitia explicabo sint natus. Nulla, incidunt doloribus et molestias provident sunt. Provident consequatur debitis at iusto veniam deleniti expedita voluptatem odit, ab nulla labore, quidem placeat obcaecati optio nesciunt perferendis eveniet possimus dolor, alias corporis architecto! Tempore ab voluptatibus consequuntur.";

B.classList.add("btn" , "btn-primary")
B.textContent = "Submit";

const div = document.getElementById("task1")

div.appendChild(H)
div.appendChild(P)
div.appendChild(B)







