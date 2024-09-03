import TableCard from '@/components/molecules/TableCard'
import { TTables } from '@/types/tableType'
import { FC } from 'react'

import ReactLoading from 'react-loading'

const BodyTables: FC<{ data: TTables; loading: boolean }> = ({
  data,
  loading,
}) => {
  return loading ? (
    <ReactLoading
      className="self-center"
      width={36}
      type="spin"
      color="black"
    />
  ) : (
    <div
      className={
        'grid w-full max-w-screen-2xl grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      }
    >
      {data.map((table, index) => (
        <TableCard
          key={index}
          code={table.code}
          id={table.id}
          seats={table.seats}
          status={table.status}
        />
      ))}
    </div>
  )
}

export default BodyTables
