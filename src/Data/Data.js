// Sidebar imports
import { 
    LocalAtm, 
    MenuBook 
} from '@mui/icons-material'
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    // UilUsdSqure,
    // UilSignOutAlt,
} from "@iconscout/react-unicons";

// Import Images
import img1 from '../imgs/img1.png';
import img2 from '../imgs/img2.png';
import img3 from '../imgs/img3.png';

// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: 'Dashboard',
    },
    {
        icon: UilClipboardAlt,
        heading: 'Orders',
    },
    {
        icon: UilUsersAlt,
        heading: 'Customers',
    },
    {
        icon: UilPackage,
        heading: 'Products',
    },
    {
        icon: UilChart,
        heading: 'Analytics',
    },
]; 

export const CardsData = [
    {
        title: 'Sales',
        color: {
            backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
            boxShodow: '0px 10px 20px 0px #e0c6f5',
        },
            barValue: 70,
            value: '25,970',
            png: LocalAtm,
            series: [
            {
                name: 'Sales',
                data: [31, 40, 28, 51, 42, 109, 100]
            },
        ],
    },
    {
        title: 'Revenue',
        color: {
            backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
             boxShodow: '0px 10px 20px 0px #FDC0C7',
        },
            barValue: 80,
            value: '14,270',
            png: UilMoneyWithdrawal,
            series: [
                {
                    name: 'Revenue',
                    data: [100, 50, 70, 80, 30, 40]
                },
           ],
    },
    {
        title: 'Expense',
        color: {
                backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(225 202 113) -46.42%)',
                boxShodow: '0px 10px 20px 0px #F9D59B',
            },
            barValue: 60,
            value: '4,270',
            png: MenuBook,
            series: [
                {
                        name: 'Expenses',
                        data: [10, 25, 15, 30, 12, 15, 20]
                 },
        ],
    },
]

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500wh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 seconds ago"
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart, samsug Gear 2500wh battery.",
        time: "2 hours ago",
    }
]