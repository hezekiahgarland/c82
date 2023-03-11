canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
pen_colour = "red";
pen_width = 2;
prev_mouse_x = "";
prev_mouse_y = "";
mouse_event = "";

canvas.addEventListener("mousedown", mymd);

function mymd(e) {
    mouse_event = "md";
    console.log("mousedown " + mouse_event);
}
canvas.addEventListener("mouseup", mymu);

function mymu(e) {
    mouse_event = "mu";
    console.log("mouseup " + mouse_event);

}
canvas.addEventListener("mouseleave", myml);

function myml(e) {
    mouse_event = "ml";
    console.log("mouseleave " + mouse_event);

}
canvas.addEventListener("mousemove", mymm);

function mymm(e) {
    cur_mouse_x = e.clientX - canvas.offsetLeft;
    cur_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouse_event == "md") {
        pen.beginPath();
        pen.strokeStyle = pen_colour;
        pen.lineWidth = pen_width;
        pen.arc(cur_mouse_x,cur_mouse_Y,15,0,2*Math.PI)
        pen.stroke();
    }
}