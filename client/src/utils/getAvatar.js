import Lion from "../assets/lion.png";
import Cat from "../assets/cat.png";
import Frog from "../assets/frog.png";
import Fox from "../assets/fox.png";
import Dog from "../assets/dog.png";
import Panda from "../assets/panda.png";
import Mouse from "../assets/mouse.png";
import Monkey from "../assets/monkey.png";
import Butterfly from "../assets/butterfly.png";
import Deer from "../assets/deer.png";
import Koala from "../assets/koala.png";
import Octopus from "../assets/octopus.png";
import Owl from "../assets/owl.png";
import Rabbit from "../assets/rabbit.png";
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
    case "deer":
      return Deer;
    case "koala":
      return Koala;
    case "octopus":
      return Octopus;
    case "owl":
      return Owl;
    case "rabbit":
      return Rabbit;
    case "teacherCap":
      return TeacherCap;
    default:
      return Blank;
  }
}
