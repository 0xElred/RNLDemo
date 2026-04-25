
import { useEffect, useState, type FC } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../../components/table"
import type { GenderColumns } from "../../../interfaces/GendercColumns";
import GenderService from "../../../services/GenderService";
import Spinner from "../../../components/Spinner/Spinner";

interface GenderListProps {
    refreshkey: boolean
}

const GenderList: FC<GenderListProps> = ({refreshkey}) => {
    const [ loadingGenders, setLoadingGenders] = useState(false) 
    const [ genders, setGenders] = useState <GenderColumns[]>([])
    const handleLoadGenders = async () => {
        try {
            
            setLoadingGenders(true)

            const res = await GenderService.loadGenders()
            if (res.status === 200) {
                setGenders(res.data.genders)
            } else {
                console.error('Unexpected Status Error Occured during loading Genders: ', res.status)
            }
        } catch (error ) {
            console.error('Unexpected server Error Occured during loading Genders: ', error)

        } finally {
            setLoadingGenders(false);
        }
    };

    useEffect( () => {
        handleLoadGenders();
    }, [refreshkey]);

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="max-full max-h-[calc(100vh)] overflow-x-auto">
                    <Table>
                        <TableHeader className="border-b border-gray-200 bg-blue-500 sticky top-0 text-white text-xs">
                            <TableRow >
                                <TableCell isHeader className=" px-5 py-3 font-medium text-center ">No.

                                </TableCell>
                                <TableCell isHeader className=" px-5 py-3 font-medium text-start ">Gender

                                </TableCell>
                                {/* <TableCell isHeader className=" px-5 py-3 font-medium text-start ">Action

                                </TableCell> */}

                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-gray-100 text-gray-600 text-sm ">
                           {loadingGenders ? (
                            <TableRow>
                                <TableCell colSpan={2} className="px-4 py-3 text-center"> 
                                    <Spinner size="md"/>
                                </TableCell>
                            </TableRow>
                           ) : genders.map((gender, index) => (
                            <TableRow className="hover:bg-gray-100" key={index}>
                                <TableCell className="px-4 py-3 text-center">{index + 1}</TableCell>
                                <TableCell className="px-4 py-3 text-start">{gender.gender}</TableCell>
                            </TableRow>
                           )) }
                        </TableBody>

                    </Table>
                </div>
            </div>
        </>
    )
}

export default GenderList