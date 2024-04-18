class Snake {
   constructor() {
      this.head = createVector(0, 0);
      this.vel = createVector(1, 0);
      this.body = []; // Initialize the body as an empty array
      this.length = 3; // Initial length of the snake
      this.createInitialBody();
  }
  createInitialBody() {
   for (let i = this.length - 1; i >= 0; i--) {
       this.body.push(createVector(this.head.x - i, this.head.y));
   }
}

//   show() {
//       noStroke();
//       fill(155);
//       rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);
      
//       // Draw the rest of the body segments
//       for (let segment of this.body) {
//           rect(segment.x, segment.y, GRID_SIZE, GRID_SIZE);
//       }
//   }

//   update() {
//       // Move the snake's head based on velocity
//       this.head.x += this.vel.x * GRID_SIZE;
//       this.head.y += this.vel.y * GRID_SIZE;

//       // Wrap around the canvas if the head goes out of bounds

//       // Handle wrapping around the X-axis
//       this.head.x = (this.head.x + WIDTH) % WIDTH;

//       // Handle wrapping around the Y-axis
//       this.head.y = (this.head.y + HEIGHT) % HEIGHT;
//   }

update(){
   this.body.push(createVector(this.head.x, this.head.y));

   this.head.x += this.vel.x * GRID_SIZE;
   this.head.y += this.vel.y * GRID_SIZE;
   // this.head.x += this.vel.x;
   // this.head.y += this.vel.y;

   this.head.x = (this.head.x + WIDTH) % WIDTH;
   this.head.y = (this.head.y + HEIGHT) % HEIGHT;

   if(this.length < this.body.length)
   {
      this.body.shift();
   }
   for(let vector of this.body)
      {
         if(vector.x == this.head.x && vector.y == this.head.y)
         {
            this.isDead = true;
         }
      }
}
show() {
   noStroke();
   // Draw snake head
   fill(255);
   rect(this.head.x, this.head.y, GRID_SIZE, GRID_SIZE);

   // Draw snake body
   fill(155);
   for(let vector of this.body)
   {
      rect(vector.x, vector.y, GRID_SIZE, GRID_SIZE);
   }
}

 }