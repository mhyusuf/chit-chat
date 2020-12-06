import Lion from "../assets/lion.png";
import Cat from "../assets/cat.png";
import Frog from "../assets/frog.png";
import Fox from "../assets/fox.png";
import Dog from "../assets/dog.png";
import Panda from "../assets/panda.png";
import Mouse from "../assets/mouse.png";
import Monkey from "../assets/monkey.png";
import Butterfly from "../assets/butterfly.png";
import TeacherCap from "../assets/teachercap.png";
import Blank from "../assets/blank.png";

export default function getAvatar(string) {
  switch (string) {
    case "lion":
      return Lion;
    case "cat":
      return Cat;
    case "frog":
      return Frog;
    case "fox":
      return Fox;
    case "dog":
      return Dog;
    case "panda":
      return Panda;
    case "mouse":
      return Mouse;
    case "monkey":
      return Monkey;
    case "butterfly":
      return Butterfly;
    case "teacherCap":
      return TeacherCap;
    default:
      return Blank;
  }
}
