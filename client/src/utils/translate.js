const languageMap = {
  ES: {
    "Recent Activity": "Última Actividad",
    "Chat Rooms": "Salas de Chat",
    "My Assignments": "Mis Tareas",
    Assignments: "Tareas",
    "Team Chat": "Chat de Equipo",
    Team: "Equipo",
    Teammates: "Compañeros de Equipo",
    Teachers: "Profesores",
    Students: "Estudiantes",
    Tasks: "Tareas",
    Resources: "Recursos",
  },
  EN: {
    "Recent Activity": "Recent Activity",
    "Chat Rooms": "Chat Rooms",
    "My Assignments": "My Assignments",
    Assignments: "Assignments",
    "Team Chat": "Team Chat",
    Team: "Team",
    Teammates: "Teammates",
    Teachers: "Teachers",
    Students: "Students",
    Tasks: "Tasks",
    Resources: "Resources",
  },
};

export default function translate(str, lang) {
  return languageMap[lang][str];
}
