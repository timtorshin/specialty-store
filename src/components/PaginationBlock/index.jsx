import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './PaginationBlock.module.scss';

export default function PaginationBlock({ onChangePage }) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={evt => onChangePage(evt.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
}
