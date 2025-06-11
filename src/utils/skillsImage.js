import canva from '../assets/svg/skills/canva.svg';
import css from '../assets/svg/skills/css.svg';
import mysql from '../assets/svg/skills/mysql.svg';
import react from '../assets/svg/skills/react.svg';
import javascript from '../assets/svg/skills/javascript.svg';
import html from '../assets/svg/skills/html.svg';
import excel from '../assets/svg/skills/excel.svg';
import publicspeaking from '../assets/svg/skills/publicspeaking.svg';
import powerpoint from '../assets/svg/skills/powerpoint.svg';


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'canva':
      return canva;
    case 'css':
      return css;
    case 'mysql':
      return mysql;
    case 'react':
      return react;
    case 'javascript':
        return javascript;
    case 'html':
        return html;
    case 'excel':
        return excel;
    case 'publicspeaking':
        return publicspeaking;
    case 'powerpoint':
        return powerpoint;
        default:
            break;
    }
}
