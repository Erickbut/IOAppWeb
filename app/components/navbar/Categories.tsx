'use client';

import Container from '../Container';

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { FaHome, FaSkiing } from 'react-icons/fa';

import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiWindmill } from 'react-icons/gi';
import { IoBusiness, IoDiamond } from 'react-icons/io5';


import { MdOutlineVilla } from 'react-icons/md';
import { GiWoodCabin } from 'react-icons/gi';


import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

export const categories = [
    {
        label: 'Residential',
        icon: FaHome,
        description: 'This properties are destinated to a good life in family!'
    },
    {
        label: 'Urban',
        icon: IoBusiness,
        description: 'This property is close to center of Cochabamba!'
    },
    {
        label: 'Rural',
        icon: GiWoodCabin,
        description: 'This property is in the rural area!'
    },
    {
        label: 'SwimmingPool',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a Lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Tours',
        icon: GiCastle,
        description: 'This property has tours!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activities!'
    },
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to a Beach!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in the cave!'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the barn!'
    },
    {
        label: 'Luxury',
        icon: IoDiamond,
        description: 'This property is in luxurious!'
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Categories