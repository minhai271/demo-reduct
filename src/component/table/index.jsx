/* eslint-disable react/prop-types */
import React from 'react'
import "./index.scss"
function Table({columns , dataSource}
) {
  return (
    <table className={"table"}>
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.title}>{column.title}
                        
                    </th>
                ))}</tr>
        </thead>
        <tbody>
        {dataSource.map((dataSource) => (
          <tr key={dataSource}>
            {columns.map((column) => (
              <td key={dataSource[column.dataIndex]}>
                {dataSource[column.dataIndex]}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
    </table>
  )
}

export default Table