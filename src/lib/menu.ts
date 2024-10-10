import {
  AiFillBell,
  AiFillDashboard,
  AiFillHome,
  AiOutlineBell,
  AiOutlineDashboard,
  AiOutlineHome,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoCreate, IoCreateOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { MdCategory, MdOutlineCategory } from "react-icons/md";

interface MenuButtonProps {
  path?: string[];
  item: {
    icon: IconType;
    selectedIcon?: IconType;
    text: string;
  };
}

const leftSideBarMenu: MenuButtonProps[] = [
  {
    path: ["/", "/tl/group", "/tl/category"],
    item: {
      icon: AiOutlineHome,
      selectedIcon: AiFillHome,
      text: "ホーム",
    },
  },
  {
    path: ["/dashboard", "/dashboard/*"],
    item: {
      icon: AiOutlineDashboard,
      selectedIcon: AiFillDashboard,
      text: "ダッシュボード",
    },
  },
  {
    path: ["/category", "/category/*"],
    item: {
      icon: MdOutlineCategory,
      selectedIcon: MdCategory,
      text: "学習カテゴリ",
    },
  },
  {
    path: ["/notifications", "/notifications/*"],
    item: {
      icon: AiOutlineBell,
      selectedIcon: AiFillBell,
      text: "通知",
    },
  },
  {
    path: ["/search", "/search/*"],
    item: {
      icon: AiOutlineSearch,
      text: "探す",
    },
  },
  {
    path: ["/create", "/create/question"],
    item: {
      icon: IoCreateOutline,
      selectedIcon: IoCreate,
      text: "投稿を作成",
    },
  },
];

export { leftSideBarMenu };
