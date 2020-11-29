import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  reportLog: any;
  xPos: number;
  yPos: number;
  direction: any;
  posX: any = 4;
  posY: any = 84;
  face: any = "South";
  moveY: any;
  moveX: any;
  classDirection: any;
  insertBlock: any;
  placeX: any;
  placeY: any;
  constructor() {}

  //custom drop down
  customPopupX: any = {
    header: "X:position",
    subHeader: "",
    message: "select X position"
  };
  customPopupY: any = {
    header: "Y:position",
    subHeader: "",
    message: "select Y position"
  };
  customPopupF: any = {
    header: "Face",
    subHeader: "",
    message: "select one direction"
  };

  //------------------- DEFINING X Y AND FACE values -----------------------------------------
  X: any[] = [
    {
      id: 0,
      val: "4"
    },
    {
      id: 1,
      val: "24"
    },
    {
      id: 2,
      val: "44"
    },
    {
      id: 3,
      val: "64"
    },
    {
      id: 4,
      val: "84"
    }
  ];

  Y: any[] = [
    {
      id: 0,
      val: "84"
    },
    {
      id: 1,
      val: "64"
    },
    {
      id: 2,
      val: "44"
    },
    {
      id: 3,
      val: "24"
    },
    {
      id: 4,
      val: "4"
    }
  ];

  Face: any[] = [
    {
      id: 1,
      name: "North"
    },
    {
      id: 2,
      name: "East"
    },
    {
      id: 3,
      name: "West"
    },
    {
      id: 4,
      name: "South"
    }
  ];
  //------------------- DEFINING X Y AND FACE values -----------------------------------------

  placeRobot() {
    // place the toy on the table
    this.moveX = this.posX + "%";
    this.moveY = this.posY + "%";
    this.classDirection = this.face;
    console.log(this.posX + ",  " + this.posY + "  " + this.face);
  }

  report(x, y) {
    // display the X,Y position of the robot along with the its direction
    this.posX = x;
    this.posY = y;
    //converting X,Y position values to X,Y coordinates
    if (this.posX == 4) {
      this.placeX = 0;
    } else if (this.posX == 24) {
      this.placeX = 1;
    } else if (this.posX == 44) {
      this.placeX = 2;
    } else if (this.posX == 64) {
      this.placeX = 3;
    } else if (this.posX == 84) {
      this.placeX = 4;
    }

    if (this.posY == 4) {
      this.placeY = 4;
    } else if (this.posY == 24) {
      this.placeY = 3;
    } else if (this.posY == 44) {
      this.placeY = 2;
    } else if (this.posY == 64) {
      this.placeY = 1;
    } else if (this.posY == 84) {
      this.placeY = 0;
    }

    this.reportLog =
      "   (X,Y,F) :  (" +
      this.placeX +
      ",  " +
      this.placeY +
      "  " +
      this.classDirection +
      ")";
  }

  move() {
    // Move the toy as per directions---------------------------------------
    // NORTH: decrease posY(-) value when going up
    // SOUTH: increase posY(+) value when going down
    // EAST:  increase posX(+) value when going right
    // WEST:  increase posY(-) value when going left

    if (this.classDirection == "North") {
      if (this.posY > 4) {
        this.posY = parseInt(this.posY) - 20;
        console.log("North2 " + this.posY + "--" + this.moveY);
      }
    } else if (this.classDirection == "South") {
      if (this.posY < 84) {
        this.posY = parseInt(this.posY) + 20;
        console.log("South2 " + this.posY + "--" + this.moveY);
      }
    } else if (this.classDirection == "East") {
      if (this.posX < 84) {
        this.posX = parseInt(this.posX) + 20;
        console.log("East2 " + this.posX + "--" + this.moveX);
      }
    } else if (this.classDirection == "West") {
      if (this.posX > 4) {
        this.posX = parseInt(this.posX) - 20;
        console.log("WEST2 " + this.posX + "--" + this.moveX);
      }
    } else {
      alert("Please click on 'Place XYF' key to start");
    }

    this.moveX = this.posX + "%";
    this.moveY = this.posY + "%";
    this.report(this.posX, this.posY);
  }

  //rotate the robot to Left by 90 degree
  leftSwitch() {
    if (this.classDirection == "North") {
      this.classDirection = "West";
      this.report(this.posX, this.posY);
    } else if (this.classDirection == "West") {
      this.classDirection = "South";
      this.report(this.posX, this.posY);
    } else if (this.classDirection == "South") {
      this.classDirection = "East";
      this.report(this.posX, this.posY);
    } else if (this.classDirection == "East") {
      this.classDirection = "North";
      this.report(this.posX, this.posY);
    } else {
      alert("No Left Rotation 'left' !");
    }
  }

  //rotate the robot to right by 90 degree
  rightSwitch() {
    if (this.classDirection == "North") {
      this.classDirection = "East";
      this.report(this.posX, this.posY);
    } else if (this.classDirection == "East") {
      this.classDirection = "South";
      this.report(this.posX, this.posY);
    } else if (this.classDirection == "South") {
      this.classDirection = "West";
      this.report(this.posX, this.posY);
    } else if (this.classDirection == "West") {
      this.classDirection = "North";
      this.report(this.posX, this.posY);
    } else {
      alert("No Right Rotation 'left' !");
    }
  }
}
