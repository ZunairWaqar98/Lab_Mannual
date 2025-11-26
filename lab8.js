// Button: Change page background color
document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = ['#f0f8ff', '#ffebcd', '#e6e6fa', '#ffe4e1', '#d1ffd6'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('output').innerText = "Background color changed!";
});

// Button: Change output text
document.getElementById('textBtn').addEventListener('click', function() {
    const messages = [
        "Hello World!",
        "Keep learning JS!",
        "Event listeners are fun!",
        "You clicked the button!",
        "DOM manipulation rocks!"
    ];
    document.getElementById('output').innerText = messages[Math.floor(Math.random() * messages.length)];
});

// Button: Increase size of boxes
document.getElementById('sizeBtn').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        let currentWidth = parseInt(window.getComputedStyle(box).width);
        let currentHeight = parseInt(window.getComputedStyle(box).height);
        box.style.width = (currentWidth + 20) + 'px';
        box.style.height = (currentHeight + 20) + 'px';
    });
    document.getElementById('output').innerText = "Boxes increased in size!";
});

// Box 1: Hover effect
document.getElementById('box1').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'mediumseagreen';
    this.innerText = "Hovered!";
});
document.getElementById('box1').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'coral';
    this.innerText = "Hover Me!";
});

// Box 2: Click effect using 'this'
document.getElementById('box2').addEventListener('click', function() {
    this.style.transform = "rotate(45deg)";
    this.innerText = "Clicked!";
    document.getElementById('output').innerText = "You clicked Box 2!";
});

// Box 3: Move on click
document.getElementById('box3').addEventListener('click', function() {
    let left = Math.floor(Math.random() * 300) - 150; // -150 to +150 px
    let top = Math.floor(Math.random() * 150) - 75;  // -75 to +75 px
    this.style.transform = `translate(${left}px, ${top}px)`;
    document.getElementById('output').innerText = "Box 3 moved!";
});
