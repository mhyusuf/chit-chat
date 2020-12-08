const languageMap = {
  ES: {
    "Recent Activity": "Última Actividad",
    "Chat Rooms": "Salas de Chat",
    Students: "Estudiantes",
    Tasks: "Tareas",
    Resources: "Recursos",
  },
  EN: {
    "Recent Activity": "Recent Activity",
    "Chat Rooms": "Chat Rooms",
    Students: "Students",
    Tasks: "Tasks",
    Resources: "Resources",
  },
};

export default function translate(str, lang) {
  return languageMap[lang][str];
}
