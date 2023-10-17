import { useEffect, useState } from "react";
import classNames from "classnames";
import { rankItem } from "@tanstack/match-sorter-utils";
import notFoundSearch from "@assets/images/icon-not-found-search.svg";
import kingIcon from "@assets/images/king.png";
import { useTranslations } from "src/i18n/utils";
import CountryFlag from "@components/CountryFlag";

import {
  MagnifyingGlassIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronUpDownIcon,
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

function formatDuration(value) {
  let hours = value / 3600;
  let mins = (value % 3600) / 60;
  let secs = (mins * 60) % 60;

  hours = Math.trunc(hours);
  mins = Math.trunc(mins);
  secs = Math.trunc(secs);

  if (!hours && !mins && !secs) {
    return "0";
  }

  if (hours) {
    if (mins) {
      return `${hours}h ${mins}m`;
    } else {
      return secs ? `${hours}h ${secs}s` : `${hours}h`;
    }
  } else {
    if (mins) {
      return secs ? `${mins}m ${secs}s` : `${mins}m`;
    } else {
      return secs ? `${secs}s` : ``;
    }
  }
}

function formatDistance(value) {
  if (!value) {
    return "0 km";
  }

  return `${Math.round(value / 100) / 10} km`;
}

function formatElevation(value) {
  if (value >= 1000) {
    const elevationInKilometers = (value / 1000).toFixed(1);
    return `${elevationInKilometers} km`;
  } else {
    const elevationInMeters =
      value % 1 === 0 ? value.toString() : value.toFixed(1);
    return `${elevationInMeters} m`;
  }
}

function formatPace(value) {
  const minutes = Math.floor(value);
  const seconds = Math.round((value - minutes) * 60);

  if (seconds === 60) {
    return `${minutes + 1}:00/km`;
  }

  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${secondsString}/km`;
}

function formatSpeed(value) {
  const kilometersPerHour = value * 3.6;
  return `${kilometersPerHour.toFixed(1)} km/h`;
}

function ChallengeParticipantsGrid({ participants, activityType, lang }) {
  if (!participants) {
    return null;
  }

  let t = useTranslations(lang);
  let defaultData = [];
  if (participants) {
    defaultData = participants.sort((a, b) => b.totalPoints - a.totalPoints);
  }

  const [data, setData] = useState(defaultData);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      accessorKey: "name",
      header: () => <span>{t("challenge-participants-grid.header.name")}</span>,
      cell: (info) => {
        return (
          <div className="flex items-center justify-start gap-2">
            <CountryFlag countryCode={info.row.original.countryCode} />
            {info.getValue()}
            {info.row.original.isCompleted === true && (
              <img
                src={kingIcon.src}
                alt={t("challenge-participants-grid.header.winner")}
              />
            )}
          </div>
        );
      },
      enableGlobalFilter: true,
    },
    {
      accessorKey: "distance",
      header: () => (
        <span>{t("challenge-participants-grid.header.distance")}</span>
      ),
      cell: (info) => {
        return formatDistance(info.getValue());
      },
      enableGlobalFilter: false,
    },
    {
      accessorKey: "duration",
      header: () => (
        <span>{t("challenge-participants-grid.header.duration")}</span>
      ),
      cell: (info) => {
        return formatDuration(info.getValue());
      },
      enableGlobalFilter: false,
    },
    {
      accessorKey: activityType === "Cycling" ? "speed" : "pace",
      header: () => (
        <span>
          {activityType === "Cycling"
            ? t("challenge-participants-grid.header.speed")
            : t("challenge-participants-grid.header.pace")}
        </span>
      ),
      cell: (info) => {
        return activityType === "Cycling"
          ? formatSpeed(info.getValue())
          : formatPace(info.getValue());
      },
      enableGlobalFilter: false,
    },
    {
      accessorKey: "elevation",
      header: () => (
        <span>{t("challenge-participants-grid.header.elevation")}</span>
      ),
      cell: (info) => {
        return formatElevation(info.getValue());
      },
      enableGlobalFilter: false,
    },
    {
      accessorKey: "totalPoints",
      header: () => (
        <span>{t("challenge-participants-grid.header.points")}</span>
      ),
      enableGlobalFilter: false,
    },
    {
      accessorKey: "country",
      header: () => (
        <span>{t("challenge-participants-grid.header.country")}</span>
      ),
      enableGlobalFilter: true,
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
        pageSize: 50,
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
    <div>
      <div className="pb-4 flex justify-end">
        <div className="relative mt-1">
          <DebouncedInput
            type="text"
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="px-12 py-2 bg-[#161616] text-white border border-[#161616] focus:border-white rounded-full outline-none w-[17.5rem] md:w-[25rem]"
            placeholder={t("challenge-participants-grid.search.placeholder")}
          />
          <MagnifyingGlassIcon className="w-5 h-5 mx-2 absolute top-3 left-1 text-[#777777]" />
        </div>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full table-auto text-sm text-left text-white">
          <thead className="text-lg font-bold leading-8 border-b border-opacity-25 border-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} scope="col" className="px-6 py-3">
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
                <td colSpan="6">
                  <div className="flex flex-col items-center justify-center py-[100px]">
                    <img
                      src={notFoundSearch.src}
                      alt={t("grid.message.no-results-found")}
                    />
                    <p className="text-center text-xl font-medium text-[#414141] w-[220px]">
                      {t("grid.message.no-results-found")}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-[#222222]">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-6 py-3">
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

      <div className="flex flex-col items-center py-8">
        <span className="text-sm text-gray-400">
          {t("grid.message.pagination-showing")}
          <span className="font-semibold text-white">
            {getStateTable().firstIndex}
          </span>
          {t("grid.message.pagination-to")}
          <span className="font-semibold text-white">
            {getStateTable().lastIndex}
          </span>
          {t("grid.message.pagination-of-total")}
          <span className="font-semibold text-white">
            {getStateTable().totalRows}
          </span>
          {t("grid.message.pagination-records")}
        </span>

        <div className="inline-flex mt-2 xs:mt-0">
          <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a
                  disabled={!table.getCanPreviousPage()}
                  onClick={() => {
                    if (table.getCanPreviousPage()) table.previousPage();
                  }}
                  className="flex items-center justify-center px-4 h-10 ml-0 leading-tight rounded-l-lg bg-[#161616] border-[#222222] text-gray-400 hover:bg-[#222222] hover:text-white cursor-pointer"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              {table.getPageOptions().map((value, key) => (
                <li key={key}>
                  <a
                    onClick={() => table.setPageIndex(value)}
                    className={
                      value === table.getState().pagination.pageIndex
                        ? "z-10 flex items-center justify-center px-4 h-10 leading-tight border bg-[#222222] border-[#222222] text-white"
                        : "flex items-center justify-center px-4 h-10 leading-tight bg-[#161616] border-[#222222] text-gray-400 hover:bg-[#222222] hover:text-white cursor-pointer"
                    }
                  >
                    {value + 1}
                  </a>
                </li>
              ))}
              <li>
                <a
                  onClick={() => {
                    if (table.getCanNextPage()) table.nextPage();
                  }}
                  className="flex items-center justify-center px-4 h-10 leading-tight rounded-r-lg bg-[#161616] border-[#222222] text-gray-400 hover:bg-[#222222] hover:text-white cursor-pointer"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default ChallengeParticipantsGrid;
