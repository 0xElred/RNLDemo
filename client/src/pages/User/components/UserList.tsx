import { useEffect, useState, type FC } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../../components/table";
import UserService from "../../../services/UserService";
import Spinner from "../../../components/Spinner/Spinner";
import type { UserColumns } from "../../../interfaces/UserInterface";

interface UserListProps {
    onAddUser: () => void;
    onEditUser: (user: UserColumns | null) => void
    onDeleteUser: (user: UserColumns | null) => void
    refreshKey: boolean;
    reloadKey?: number;
}

const UserList: FC<UserListProps> = ({ onAddUser, onEditUser, onDeleteUser, refreshKey }) => {
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [users, setUsers] = useState<UserColumns[]>([]);

    const handleLoadUsers = async () =>  {
        try {
            setLoadingUsers(true)

            const res = await UserService.loadUsers()

            if (res.status === 200) {
                setUsers(res.data.users)
            } else {
                console.error('Unexpected Status error during loading Users: ' , res.status);
            }

        } catch (error) {
            console.error('Unexpected Server error during loading Users: ', error);
        }finally {
            setLoadingUsers(false);
        }
    };


    useEffect(() => {
        handleLoadUsers();
    }, [refreshKey]);

    const handleUserFullNameFormat = (user: UserColumns) => {
        let fullName =  ''
        if (user.middle_name) {
            fullName = `${user.last_name}, ${user.first_name}, ${user.middle_name.charAt(0)}.`;
        } else {
            fullName = `${user.last_name}, ${user.first_name}`;
        }
        if (user.suffix_name) {
            fullName += `${user.suffix_name}`;
        }
        return fullName;
    };

    return (
        <>
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="max-full max-h-[calc(100vh)] overflow-x-auto">
                    <Table>
                        <caption className="mb-4">
                            <div className="border-b border-gray-100">
                                <div className="p-4 flex justify-end">
                                    <button type="button" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition cursor-pointer" onClick={onAddUser}>
                                        Add User </button>
                                </div>
                            </div>
                        </caption>
                        <TableHeader className="border-b border-gray-200 bg-blue-500 sticky top-0 text-white text-xs">
                            <TableRow >
                                <TableCell isHeader className=" px-5 py-3 font-medium text-center ">No.
                                </TableCell>

                                <TableCell isHeader className=" px-5 py-3 font-medium text-center ">Full Name
                                </TableCell>

                                <TableCell isHeader className=" px-5 py-3 font-medium text-center ">Gender
                                </TableCell>

                                <TableCell isHeader className=" px-5 py-3 font-medium text-center ">Birth Date
                                </TableCell>

                                <TableCell isHeader className=" px-5 py-3 font-medium text-center ">Age
                                </TableCell>

                                <TableCell isHeader className=" px-5 py-3 font-medium text-start ">Action

                                </TableCell>

                            </TableRow>
                        </TableHeader>
                        <TableBody className="divide-y divide-gray-100 text-gray-600 text-sm ">

                            {loadingUsers ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="px-4 py-4 text-center"> 
                                    <Spinner size="md"/>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                users.map((user, index) =>(
                                    <TableRow className="hover:bg-gray-100" key={index}>
                                        <TableCell className="px-4 py-3 text-center">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-start">
                                            {handleUserFullNameFormat(user)}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-start">
                                            {user.gender?.gender ?? "—"}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-start">
                                            {user.birth_date}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-start">
                                            {user.age}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-center">
                                            <div className="flex  gap-4">
                                            <button type="button" className="text-green-600 hover:underline" onClick={() => onEditUser(user)}> Edit</button>
                                            <button type="button" className="text-red-600 hover:underline" onClick={() => onDeleteUser(user)}>Delete</button>
                                            </div>
                                        </TableCell>

                                    </TableRow>
                                ))

                            )}
                           
                        </TableBody>

                    </Table>
                </div>
            </div>
        </>
    )
}

export default UserList;