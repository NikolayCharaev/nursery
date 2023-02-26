import { MdDriveFileRenameOutline } from 'react-icons/md';
import { BsEye, BsLightningCharge } from 'react-icons/bs';
import { FaDog, FaCat } from 'react-icons/fa';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

export const data = [
  {
    imageUrl:
      'https://koshka.top/uploads/posts/2021-11/1636737917_1-koshka-top-p-koshki-dvorovaya-koshka-1.jpg',
    petName: {
      name: 'Бонни',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Пушистый комочек с энергией дикой кошки',
    petCharacter: {
      character: 'Игривый',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Зеленый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl: 'https://kotvokoshke.by/sites/default/files/shelter_cats_mr/mila.jpg',
    petName: {
      name: 'Зоя',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Ласковая красавица с ярко-зелеными глазами',
    petCharacter: {
      character: 'Спокойный',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Зеленый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl:
      'https://marchelache.com/storage/c9/18/c9183f8c-192e-4d23-aca8-54910e937351/cbuzte7sij.jpg',
    petName: {
      name: 'Ника',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Грациозная длинношерстная кошка с обаянием ',
    petCharacter: {
      character: 'Хулиганистый',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Зеленый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl: 'https://lemiki.ru/wp-content/uploads/2017/04/image2.jpeg',
    petName: {
      name: 'Персик',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Шерсть как у персика и нежный характер',
    petCharacter: {
      character: 'Cпокойный',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Коричневый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/1/21/756578052747211.jpg',
    petName: {
      name: 'Шершень',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Добрый и верный друг с мягким шерстяным пушком',
    petCharacter: {
      character: 'Cпокойный',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Коричневый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl:
      'https://vetandlife.ru/wp-content/uploads/2022/10/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%BE%D0%B2%D1%87%D0%B0%D1%80%D0%BA%D0%B0.jpg',
    petName: {
      name: 'Чочо',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Жизнерадостный хвостатый красавец с ярко-коричневой шерстью',
    petCharacter: {
      character: 'Игривый',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Коричневый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl: 'https://mirfauni.cdnbro.com/posts/257426-poroda-sobaki-dvorniaga-1.jpg',
    petName: {
      name: 'Марбл',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Подвижный и ловкий микс с мраморной окраской ',
    petCharacter: {
      character: 'Игривый',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Коричневый',
      icon: iconStyle(BsEye),
    },
  },
  {
    imageUrl: 'https://www.purina.ru/sites/default/files/2020-09/harakter_2.jpg',
    petName: {
      name: 'Геркулес',
      icon: iconStyle(MdDriveFileRenameOutline),
    },
    text: 'Сильный и мощный дворняга с внушительной грудью ',
    petCharacter: {
      character: 'Cпокойный',
      icon: iconStyle(BsLightningCharge),
    },
    colorEyes: {
      color: 'Коричневый',
      icon: iconStyle(BsEye),
    },
  },
];

export const bannerImages = {
  dogImage: {
    icon: iconStyle(FaDog),
  },
  catImage: {
    icon: iconStyle(FaCat),
  },
};

