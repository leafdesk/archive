'use client'

import {
  CaretSortIcon,
  DotsHorizontalIcon,
  Pencil2Icon,
} from '@radix-ui/react-icons'

import { ColumnDef } from '@tanstack/react-table'
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

import { Member } from '@/types/member'
import dayjs from 'dayjs'
import { Gender } from '@/constants/enums/form'
import { useRouter } from 'next/navigation'
import { ROUTE_MEMBER } from '@/constants/routes'

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
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    cell: ({ row }) => {
      const gender = row.getValue('gender')
      const genderString =
        gender == Gender.MALE
          ? 'Male'
          : gender == Gender.FEMALE
          ? 'Female'
          : '-'

      return <div className="capitalize">{genderString}</div>
    },
  },
  {
    accessorKey: 'birthDate',
    header: 'Birth Date',
    cell: ({ row }) => {
      const birthDate = dayjs(row.getValue('birthDate')).format('YYYY-MM-DD')
      return <div className="capitalize">{birthDate}</div>
    },
  },
  {
    accessorKey: 'nation',
    header: 'Nation',
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue('nation')}</div>
    ),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated At',
    cell: ({ row }) => {
      const updatedAt = dayjs(row.getValue('updatedAt')).format(
        'YYYY-MM-DD HH:mm:ss',
      )
      return <div className="capitalize">{updatedAt}</div>
    },
  },
  // {
  //   accessorKey: 'birthDate',
  //   header: () => <div className="text-right">BirthDate</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue('amount'))

  //     // Format the amount as a dollar amount
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount)

  //     return <div className="text-right font-medium">{formatted}</div>
  //   },
  // },
  {
    id: 'edit',
    enableHiding: false,
    cell: ({ row }) => {
      const router = useRouter()

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
          onClick={() => router.push(`${ROUTE_MEMBER}/${row.original.id}`)}
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
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {/* 회원 이름 복사 */}
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(row.original.name)
              }}
            >
              Copy member name
            </DropdownMenuItem>

            {/* 구분선 */}
            <DropdownMenuSeparator />

            {/* 회원 상세 */}
            <DropdownMenuItem
              onClick={() => {
                router.push(`${ROUTE_MEMBER}/${row.original.id}`)
              }}
            >
              View member details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
