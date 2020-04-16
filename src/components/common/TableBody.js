import React from 'react';
import _ from 'lodash';

const TableBody = ({ data, columns }) => {

  function renderCell(item, column) {
    if (column.content) return column.content(item);
    return _.get(item, column.path)
  }

  return (
    <tbody>
      {data.map(item => <tr key={item.id}>
        {
          columns.map(column =>
            <td key={item.id + (column.path || column.key)}>
              {renderCell(item, column)}
            </td>
          )
        }
      </tr>)}
    </tbody>
  )
}

export default TableBody