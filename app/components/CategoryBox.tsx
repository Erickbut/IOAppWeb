'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import { useCallback } from "react";
import qs from "query-string";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
    //? hooks
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        //? Define an empty query
        let currentQuery = {};

        //? we look into the params as an object
        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            //? spread the current query an category
            ...currentQuery,
            category: label
        }
        //? if this category is selected we togle like an on off deleting the actua
        if (params?.get('category') === label) {
            delete updatedQuery.category;
        }

        //? Generate URL, filter empty options in skipNull and pathname '/'
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
            flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800' : 'border-transparent'}
            ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Icon size={26} />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    )
}

export default CategoryBox;