import { FaCat, FaDog } from 'react-icons/fa';
import { MdOutlinePets } from 'react-icons/md';
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

export const data = [{ icon: iconStyle(FaCat) }, { icon: iconStyle(FaDog) }];

export const headerIcon = iconStyle(MdOutlinePets);
