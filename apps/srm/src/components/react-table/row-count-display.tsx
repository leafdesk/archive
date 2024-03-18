import { Table } from '@tanstack/react-table'
import { Member } from '@/types/member'

const RowCountDisplay = ({ table }: { table: Table<Member> }) => {
  return (
    <div className="flex-1 text-sm text-muted-foreground">
      선택 {table.getFilteredSelectedRowModel().rows.length}개 / 전체{' '}
      {table.getFilteredRowModel().rows.length}개
    </div>
  )
}

export default RowCountDisplay
