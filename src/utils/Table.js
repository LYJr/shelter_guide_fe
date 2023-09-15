import "./Table.css"
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const mockData = [
    {
        id : 1,
        stateCode : "1",
        stateName : "영업중",
        address : "서울시 어디 뭐시기",
    
    },
    {   id : 2,
        stateCode : "2",
        stateName : "안 영업중",
        address : "경기시 어디 뭐시기",
    },
]

//Column Defs 객체를 함수형으로 선언함. 컬럼 설정값을 담고, 호출하면 반환함.
const columnHelper = createColumnHelper();

function Table () {
    const [data, setData] = useState([...mockData]);
    
    const columns = [
        columnHelper.accessor("id", {header: "아이디"}),
        columnHelper.accessor("stateCode", {header: "영업상태코드"}),
        columnHelper.accessor("stateName", {header: "영업상태명"}),
        columnHelper.accessor("address", {header: "주소"}),
    ]

    const table = useReactTable({
        data, 
        columns, 
        getCoreRowModel: getCoreRowModel(),  // 이게 있어야 객체를 html 테이블로 출력 가능함.
    })

    return (
        <>
            <div className="Table">
                <table>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup)=>(
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceHolder ? null : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map((row)=> (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table