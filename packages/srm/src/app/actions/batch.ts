'use server'

import fs from 'fs'
import csvParser from 'csv-parser'
import { json } from 'stream/consumers'

type Member = {
  memberCode: string
  gender: number
  birthDate: string
  affiliation: string
  position: string
  phoneNumber: string
  department: string
  extra: string
}

/**
 * 회원 CSV 파싱 후, DB 일괄 삽입.
 */
export const batchInsertMembers = async () => {
  const CSV_FILE_PATH = 'E:\\sungrak_members_2.csv'

  fs.createReadStream(CSV_FILE_PATH)
    .pipe(csvParser())
    .on('data', (data: Member) => {
      // console.log('🚀 ~ .on ~ data:', data)
      fetch('http://localhost:8080/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.error('Error inserting member:', error))
    })
    .on('end', () => {
      return 'CSV processing completed.'
    })
}
