import React, { useEffect, useState } from "react";
import Textfield from "../ui/form/textfield";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";


const SearchBar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");
    const isLoading = false;

    const handleSearch = (value: string) => {
        // here we will implement the search api
        setSearchText(value);
    }

    useEffect(() => {
        if (searchText.length > 0) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [searchText]);


    const getContent = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        else if (false) {
            // here id no data found of that search
        }
        else {
            // search list use ListItem component
            return <div>Data</div>
        }
    }


    return (
        <Popover open={open} >
            <PopoverTrigger>
                <div className="text-muted h-full flex my-auto">
                    <Textfield
                        leftIcon="Search"
                        onChange={handleSearch}
                        value={searchText}
                        placeholder="Search"
                        containerClass="min-w-70"
                        className="rounded-2xl"
                    />
                </div>
            </PopoverTrigger> 
            <PopoverContent className='rounded-2xl p-2 w-full'>
                <div className='w-full h-full flex flex-col gap-2'>
                    {getContent()}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default SearchBar;
