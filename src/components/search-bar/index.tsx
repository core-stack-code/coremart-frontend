import React from "react";
import Textfield from "../ui/form/textfield";

const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = React.useState<string>("");

    const handleSearch = (value: string) => {
        // here we will implement the search api
        setSearchText(value);
    }

    return (
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
    );
};

export default SearchBar;
