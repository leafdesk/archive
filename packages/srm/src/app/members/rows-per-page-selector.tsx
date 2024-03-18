import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type RowsPerPageSelectorProps = {
  pageSize: string
  onPageSizeChange: (pageSize: string) => void
}

const RowsPerPageSelector = ({
  pageSize,
  onPageSizeChange,
}: RowsPerPageSelectorProps) => {
  return (
    <Select value={pageSize} onValueChange={onPageSizeChange}>
      <SelectTrigger className="w-16 ml-auto">
        <SelectValue placeholder={pageSize} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default RowsPerPageSelector
