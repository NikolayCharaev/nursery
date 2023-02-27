import { MdOutlineFoodBank } from 'react-icons/md'; // еда
import { FaChalkboardTeacher } from 'react-icons/fa'; // кинолог-учитель
import { AiFillMedicineBox, AiFillSafetyCertificate } from 'react-icons/ai'; // 1 доктор,медицина 2 безопасность питомца
import { BiGame, BiHappyAlt } from 'react-icons/bi'; // 1 игры питомцев 2 хорошее настроение питомца


import { iconSize } from '../components/Advantages/AdvantagesStyles';

const iconStyle = (Icon) => <Icon size={`${iconSize}rem`} color="#fff" />;

export const data = [
  {
    title: 'Еда',
    subtitle: 'Только высококачественная еда для вашего питомца',
    icon: iconStyle(MdOutlineFoodBank),
    id: 1,
  },
  {
    title: 'Обучение',
    subtitle: 'Лучшие кинологи будут обучать вашего любимца',
    icon: iconStyle(FaChalkboardTeacher),
    id: 2,
  },
  {
    title: 'Медицина',
    subtitle: 'Своевременная медицинская помощь',
    icon: iconStyle(AiFillMedicineBox),
    id: 3,
  },
  {
    title: 'Безопасность',
    subtitle: 'Охраняемая территория питомника',
    icon: iconStyle(AiFillSafetyCertificate),
    id: 4,
  },
  {
    title: 'Игры',
    subtitle: 'Интерактивные игры',
    icon: iconStyle(BiGame),
    id: 5,
  },
  {
    title: 'Счастье',
    subtitle: 'Хорошее настроение для вас и вашего любимца',
    icon: iconStyle(BiHappyAlt),
    id: 6,
  },
];
