// $(function() {
// 	$('#draggable').draggable();
// });
// $(document).ready(function() {
//     $('.rectangle1, rectangle2, rectangle3,rectangle4,rectangle5')
//     $('.shadow1, .shadow2, shadow3').draggable()
//     $('.shadows').droppable();
// ]);

// $(document).ready(function () {
//   // // пазл из овцы
//   // let rotat1 = 0;
//   // $(".pzl_1").click(function(){
//   //     rotat1 +=90;
//   //     $(this).css("transform", `rotate(${rotat1}deg)`)
// })
// $('.shadow1, .shadow2, shadow3').draggable()
// const canvas = document.getElementById('drawing')
// const ctx = canvas.getContext('2d')

// const canvasOffsetX = canvas.offsetLeft
// const canvasOffsetY = canvas.offsetTop

// canvas.width = window.innerWidth - canvasOffsetX
// canvas.height = window.innerHeight - canvasOffsetY

// let isPainting = false
// let lineWidth = 5
// let startX
// let startY

// const draw = (e) => {
//   if (!isPainting) {
//     return
//   }

//   ctx.lineCap = 'round'

//   ctx.lineTo(e.clientX - canvasOffsetX, e.clientY)
//   ctx.stroke()
//   ctx.strokeStyle = '#B30000'
//   ctx.lineWidth = 1
// }

// canvas.addEventListener('mousedown', (e) => {
//   isPainting = true
//   startX = e.clientX
//   startY = e.clientY
// })

// canvas.addEventListener('mouseup', (e) => {
//   isPainting = false
//   ctx.stroke()
//   ctx.beginPath()
// })

// canvas.addEventListener('mousemove', draw)
