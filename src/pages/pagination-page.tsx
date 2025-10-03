// import CountriesPagination from "@/components/countries";
import CountriesPagination from "@/components/countries-pagination";
import RickAndMortyPagination from "@/components/rick-and-morty-pagination";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const paginationVariants: string[] = [
    "Client side pagination",
    "Server side pagination"
]

const PaginationPage = () => {
    const [changePagination, setChangePagination] = useState<string>("Server side pagination")


    return (
        <>
            <h1>Pagination</h1>

            <div className="flex flex-row py-3 gap-2">
                {paginationVariants.map((paginationVariant, index) => (
                    <Button key={index} onClick={() => setChangePagination(paginationVariant)}>{paginationVariant}</Button>
                ))}
            </div>

            <section>
                {changePagination === "Client side pagination" &&
                    <CountriesPagination />
                }
                {changePagination === "Server side pagination" &&
                    <RickAndMortyPagination />
                }
            </section>
        </>

    );
};

export default PaginationPage