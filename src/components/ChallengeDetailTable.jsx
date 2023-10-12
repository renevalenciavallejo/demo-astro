import { useEffect, useState } from "react";
import classNames from "classnames";
import { rankItem } from "@tanstack/match-sorter-utils";
import CountryFlag from "./CountryFlags.jsx";
import personIcon from "@assets/images/person.svg";
import kingIcon from "@assets/images/king.png";
import notFoundSearch from "@assets/images/icon-not-found-search.svg";
import { useTranslations } from "src/i18n/utils";
import "src/utils/styles/ChallengeTable.css";

import {
  MagnifyingGlassIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronUpDownIcon,
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({ itemRank });

  return itemRank.passed;
};

const DebouncedInput = ({ value: keyWord, onChange, ...props }) => {
  const [value, setValue] = useState(keyWord);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

function ChallengeDetailTable({ challenge }) {
  const containParticipants = challenge.data.participants != null;
  let t = useTranslations(challenge.data.lang);
  let defaultData = [];

  if (containParticipants) {
    defaultData = challenge.data.participants.sort(
      (a, b) => b.Points - a.Points
    );
  }

  const [data, setData] = useState(defaultData);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      accessorKey: "Participant",
      header: () => <span>{t("table.title-participant")}</span>,
      cell: (info) => {
        return (
          <div className="flex items-center justify-start gap-2">
            <img
              src={info.row.id == 0 ? kingIcon.src : personIcon.src}
              alt={t("table.title-participant")}
            />
            <div>{info.getValue()}</div>
          </div>
        );
      },
    },
    {
      accessorKey: "Distance",
      header: () => <span>{t("table.title-distance")}</span>,
      enableGlobalFilter: false,
    },
    {
      accessorKey: "Time",
      header: () => <span>{t("table.title-time")}</span>,
      enableGlobalFilter: false,
    },
    {
      accessorKey: "Pace",
      header: () => <span>{t("table.title-pace")}</span>,
      enableGlobalFilter: false,
    },
    {
      accessorKey: "Elevation",
      header: () => <span>{t("table.title-elevation")}</span>,
      enableGlobalFilter: false,
    },
    {
      accessorKey: "Points",
      header: () => <span>{t("table.title-points")}</span>,
    },
    {
      accessorKey: "Country",
      header: () => <span>{t("table.title-country")}</span>,
      enableGlobalFilter: true,
      cell: (info) => {
        return <CountryFlag countryName={info.getValue()} />;
      },
    },
  ];

  const getStateTable = () => {
    const totalRows = table.getFilteredRowModel().rows.length;
    const pageSize = table.getState().pagination.pageSize;
    const pageIndex = table.getState().pagination.pageIndex;
    const rowsPerPage = table.getRowModel().rows.length;

    const firstIndex = pageIndex * pageSize + 1;
    const lastIndex = pageIndex * pageSize + rowsPerPage;

    return {
      totalRows,
      firstIndex,
      lastIndex,
    };
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <div className="bg-black px-1 md:px-16 pt-6 lg:pt-0 lg:mt-[-47px]">
      <div className="my-2 flex justify-end">
        <div className="relative">
          <DebouncedInput
            type="text"
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="px-12 py-2 bg-[#161616] text-white border border-[#161616] focus:border-white rounded-full outline-none"
            placeholder=""
          />
          <MagnifyingGlassIcon className="w-5 h-5 mx-2 absolute top-3 left-1 text-[#777777]" />
        </div>
      </div>
      <div className="overflow-auto lg:mt-14 table-container">
        <table className="table-auto w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-b border-opacity-25 border-white text-xl font-['Poppins'] font-bold leading-[32px] text-white"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-2 px-4 text-left capitalize"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={classNames({
                          "cursor-pointer select-none flex justify-between":
                            header.column.getCanSort(),
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <BarsArrowUpIcon className="w-5 h-5" />,
                          desc: <BarsArrowDownIcon className="w-5 h-5" />,
                        }[header.column.getIsSorted()] ??
                          (header.column.getCanSort() ? (
                            <ChevronUpDownIcon className="w-5 h-5" />
                          ) : null)}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows == 0 ? (
              <tr>
                <td colSpan="7">
                  <div className="flex flex-col items-center justify-center py-[100px]">
                    <img
                      src={notFoundSearch.src}
                      alt={t("table.result-not-results")}
                    />
                    <h2 className="text-center text-2xl font-['Poppins'] font-medium text-[#414141] w-[220px]">
                      {containParticipants
                        ? t("table.result-not-found-search")
                        : t("table.result-not-participant")}
                    </h2>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="text-white hover:bg-[#222222]">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-4 px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-center flex-col-reverse">
        <div className="flex items-center gap-2">
          <button
            className="text-slate-50 bg-black py-0.5 px-1 rounded border border-white
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          </button>
          <button
            className="text-slate-50 bg-black py-0.5 px-1 rounded border border-white
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {table.getPageOptions().map((value, key) => (
            <button
              key={key}
              className={classNames({
                "text-slate-50 bg-black py-0.5 px-2 font-bold rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-300": true,
                "bg-white text-slate-950":
                  value === table.getState().pagination.pageIndex,
              })}
              onClick={() => table.setPageIndex(value)}
            >
              {value + 1}
            </button>
          ))}

          <button
            className="text-slate-50 bg-black py-0.5 px-1 rounded border border-white
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
          <button
            className="text-slate-50 bg-black py-0.5 px-1 rounded border border-white
            disabled:hover:bg-white disabled:hover:text-gray-300"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronDoubleRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="text-gray-600 font-semibold">
          Mostrando de {getStateTable().firstIndex}&nbsp; a{" "}
          {getStateTable().lastIndex}&nbsp; del total de{" "}
          {getStateTable().totalRows} registros
        </div>
        {/*
        <select
          className="text-gray-600 border border-gray-300 rounded outline-indigo-700 py-2"
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          <option value="5">5 pág.</option>
          <option value="10">10 pág.</option>
          <option value="20">20 pág.</option>
          <option value="25">25 pág.</option>
          <option value="50">50 pág.</option>
        </select>
        */}
      </div>
    </div>
  );
}

export default ChallengeDetailTable;
