/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[] | any;
    endpoint: string;
}

export function DataTable<TData, TValue>({ columns, data, endpoint }: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState({
        pageIndex: data?.current_page - 1, // Initial page index
        pageSize: data.per_page, // Rows per page
    });

    const table = useReactTable({
        data: data.data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
        rowCount: data.total,
    });

    // console.log(data);

    const getAll = () => {
        try {
            router.visit(endpoint, {
                method: 'get',
                data: {
                    page: pagination.pageIndex + 1,
                    perPage: pagination.pageSize,
                },
                replace: true,
                preserveState: true,
                preserveScroll: true,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAll();
    }, [pagination.pageIndex, pagination.pageSize]);

    // console.log(table.getCanNextPage());

    return (
        <>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
                <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                    Previous
                </Button>

                <small className="text-gray-400">{`Page ${data.current_page} of ${data.last_page}`}</small>

                <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                    Next
                </Button>
            </div>
        </>
    );
}
