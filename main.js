var color="black"
var line=3
var mouse_event="empty"
var current_mouse_x
var current_mouse_y
var last_mouse_x
var last_mouse_y
var width=screen.width
var new_width=screen.width-50
var new_height=screen.height-100
if (width<992) {
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_height
    document.body.style.overflow="hidden"
}
canvas=document.getElementById("myCanvas")
draw=canvas.getContext("2d")

canvas.addEventListener("mouseleave",stopdrawing)
function stopdrawing(e) {
    mouse_event="mouseleave"
    console.log(mouse_event)
}
canvas.addEventListener("mouseup",discontinue)
function discontinue(e) {
    mouse_event="mouseup"
    console.log(mouse_event)
}
canvas.addEventListener("mousedown",start)
function start(e) {
    color=document.getElementById("color").value
    line=document.getElementById("line").value
    mouse_event="mousedown"
    console.log(mouse_event)
}
canvas.addEventListener("mousemove",freedraw)
function freedraw(e) {
    current_mouse_x=e.clientX-canvas.offsetLeft
    current_mouse_y=e.clientY-canvas.offsetTop
    if (mouse_event=="mousedown") {
        draw.beginPath()
        draw.strokeStyle=color
        draw.lineWidth=line
        draw.moveTo(last_mouse_x,last_mouse_y)
        draw.lineTo(current_mouse_x,current_mouse_y)
        draw.stroke()
    }
    last_mouse_x=current_mouse_x
    last_mouse_y=current_mouse_y
    console.log(mouse_event)
}
canvas.addEventListener("touchstart",drawstart)
function drawstart(e) {
    last_touch_x=e.touches[0].clientX-canvas.offsetLeft
    last_touch_y=e.touches[0].clientY-canvas.offsetTop

}
canvas.addEventListener("touchmove",movedraw)
function movedraw(e) {
    current_touch_x=e.touches[0].clientX-canvas.offsetLeft
    current_touch_y=e.touches[0].clientY-canvas.offsetTop
    draw.beginPath()
    draw.strokeStyle=color
    draw.lineWidth=line
    draw.moveTo(last_touch_x,last_touch_y)
    draw.lineTo(current_touch_x,current_touch_y)
    draw.stroke()
    last_touch_x=current_touch_x
    last_touch_y=current_touch_y

}