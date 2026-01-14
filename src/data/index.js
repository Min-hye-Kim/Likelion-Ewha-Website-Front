import projects from "./projects.json";
import members from "./members.json";
import intercollegiates from "./intercollegiates.json";
import curriculums from "./curriculums.json";
import { getFaqData } from "./faq.js";

export {
  projects,
  members,
  intercollegiates,
  curriculums,
  getFaqData,
};

//사용하는 페이지에서 import { projects, members } from "@/data"; 이렇게 불러와서 사용