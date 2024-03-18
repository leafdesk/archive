import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Member } from '@/types/member'

const ColumnFilters = ({ table }: { table: Table<Member> }) => {
  return (
    <div className="flex gap-2">
      {table
        .getAllColumns()
        // select, edit, actions 열 제외.
        .filter((column) => !['select', 'edit', 'actions'].includes(column.id))
        .map((column) => (
          <div key={column.id} className="flex flex-col w-[120px]">
            <label
              htmlFor={`filter-${column.id}`}
              className="text-sm font-semibold"
            >
              {column.columnDef.meta?.displayName ?? '-'}
            </label>
            <Input
              id={`filter-${column.id}`}
              value={(column.getFilterValue() as string) ?? ''}
              onChange={(event) => column.setFilterValue(event.target.value)}
              // placeholder={`Filter ${column.id}...`}
              className="mt-1"
            />
          </div>
        ))}
    </div>
  )
}

export default ColumnFilters
