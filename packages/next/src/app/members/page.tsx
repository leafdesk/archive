'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import useDataTable from '@/hooks/use-data-table'
import { ROUTE_MEMBER_REGISTRATION } from '@/constants/routes'
import { Member } from '@/types/member'

import { columns } from '@/app/members/columns'
import { getMembers } from '@/app/actions/members'
import ColumnFilters from '@/components/react-table/column-filters'
import ColumnSelector from '@/components/react-table/column-selector'
import MemberDataTable from '@/app/members/member-data-table'
import RowCountDisplay from '@/components/react-table/row-count-display'
import RowsPerPageSelector from '@/app/members/rows-per-page-selector'
import PageNavigationButtons from '@/components/react-table/page-navigation-buttons'

const MemberPage = () => {
  const router = useRouter()

  const { setData, createDataTable, pageSize, setPageSize } =
    useDataTable<Member>()

  useEffect(() => {
    getMembers().then((members) => {
      setData(members)
    })
  }, [])

  const table = createDataTable(columns)

  return (
    <main className="p-5">
      <div className="flex items-end py-4">
        {/* 테이블 열 필터 */}
        <ColumnFilters table={table} />

        {/* 페이지 당 행 개수 선택 */}
        <RowsPerPageSelector
          pageSize={pageSize}
          onPageSizeChange={(newSize: string) => {
            setPageSize(newSize)
            table.setPageSize(Number(newSize))
          }}
        />

        {/* 표시 열 선택 */}
        <ColumnSelector table={table} />

        {/* 신규 회원 등록 */}
        <Button
          className="ml-2"
          onClick={() => router.push(ROUTE_MEMBER_REGISTRATION)}
        >
          신규 등록
        </Button>
      </div>

      <div className="rounded-md border">
        {/* 회원 데이터 테이블 */}
        <MemberDataTable table={table} />
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        {/* 열 개수 표시 */}
        <RowCountDisplay table={table} />

        {/* 페이지 이동 버튼 */}
        <PageNavigationButtons table={table} />
      </div>
    </main>
  )
}

export default MemberPage
