import Lion from "../assets/lion.png";
import Cat from "../assets/cat.png";
import Dragon from "../assets/dragon.png";
import Fox from "../assets/fox.png";
import Dog from "../assets/dog.png";
import Panda from "../assets/panda.png";
import Penguin from "../assets/penguin.png";
import Rhino from "../assets/rhino.png";
import Unicorn from "../assets/unicorn.png";
import TeacherCap from "../assets/teachercap.png";

export default function getAvatar(string) {
  switch (string) {
    case "lion":
      return Lion;
    case "cat":
      return Cat;
    case "dragon":
      return Dragon;
    case "fox":
      return Fox;
    case "dog":
      return Dog;
    case "panda":
      return Panda;
    case "penguin":
      return Penguin;
    case "rhino":
      return Rhino;
    case "unicorn":
      return Unicorn;
    case "teacherCap":
      return TeacherCap;
    default:
      return Dragon;
  }
}
