function set_active_list(clicked_id) {
    if(clicked_id == "bullets_button") {
        document.getElementById("numbers_button").classList.remove("active");
    }
    if(clicked_id == "numbers_button") {
        document.getElementById("bullets_button").classList.remove("active");
    }
    if(document.getElementById(clicked_id).classList.contains("active")) {
        document.getElementById(clicked_id).classList.remove("active");
    }
    else
        document.getElementById(clicked_id).classList.add("active");
}

function toggle_active(clicked_id) {
    if(document.getElementById(clicked_id).classList.contains("active"))
        document.getElementById(clicked_id).classList.remove("active");
    else
        document.getElementById(clicked_id).classList.add("active");
}