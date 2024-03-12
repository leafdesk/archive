'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  CaretSortIcon,
  DotsHorizontalIcon,
  Pencil2Icon,
} from '@radix-ui/react-icons'

import { ColumnDef } from '@tanstack/react-table'

import dayjs from 'dayjs'
import { Gender } from '@/constants/enums/form'
import { useRouter } from 'next/navigation'
import { Member } from '@/types/member'
import { ROUTE_MEMBER } from '@/constants/routes'

/**
 * 공통 헤더 컴포넌트 생성 함수.
 */
const createHeader =
  (title: string, sort = true) =>
  ({ column }: { column: any }) => {
    return sort ? (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        {title}
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ) : (
      <div>{title}</div>
    )
  }

/**
 * 공통 셀 렌더링 함수
 */
const renderCell =
  (accessor: keyof Member) =>
  ({ row }: { row: any }) => <div>{row.getValue(accessor)}</div>

/**
 * 칼럼 정의.
 */
export const columns: ColumnDef<Member>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'memberCode',
    header: createHeader('성도 코드'),
    cell: renderCell('memberCode'),
  },
  {
    accessorKey: 'name',
    header: createHeader('이름'),
    cell: renderCell('name'),
  },
  {
    accessorKey: 'gender',
    header: createHeader('성별'),
    cell: renderCell('gender'),
  },
  {
    accessorKey: 'birthDate',
    header: createHeader('생년월일'),
    cell: renderCell('birthDate'),
  },
  {
    accessorKey: 'affiliation',
    header: createHeader('소속'),
    cell: renderCell('affiliation'),
  },
  {
    accessorKey: 'position',
    header: createHeader('직분'),
    cell: renderCell('position'),
  },
  {
    accessorKey: 'phoneNumber',
    header: createHeader('핸드폰 번호'),
    cell: renderCell('phoneNumber'),
  },
  {
    accessorKey: 'department',
    header: createHeader('봉사 기관'),
    cell: renderCell('department'),
  },

  {
    id: 'edit',
    enableHiding: false,
    cell: ({ row }) => {
      const router = useRouter()

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => router.push(`${ROUTE_MEMBER}/${row.original.uuid}`)}
        >
          <span className="sr-only">Open menu</span>
          <Pencil2Icon className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const router = useRouter()

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>더 보기</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(row.original.name)
              }}
            >
              회원 이름 복사
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                router.push(`${ROUTE_MEMBER}/${row.original.id}`)
              }}
            >
              회원 상세 보기
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
