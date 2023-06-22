document.querySelector('#add').onclick = function () {
    if (document.querySelector('#nav input').value.length == 0) {
        alert("Please Enter a Task")
    }

    else {
        document.querySelector('#list').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#nav  input').value}
                </span>
                <button class="delete">
                           <p>Delete</p>
                </button>
            </div>
        `;
        var current_list = document.querySelectorAll(".delete");
        for (var i = 0; i < current_list.length; i++) {
            current_list[i].onclick = function () {
                this.parentNode.remove();
            }
        }


        document.querySelector("#nav input").value = "";
    }
}