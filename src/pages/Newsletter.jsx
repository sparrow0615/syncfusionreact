import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Search, Print, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, newsletterGrid } from '../data/dummy';
import { Header } from '../components';

const Newsletter = () => {
  const toolbarOptions = ['Print', 'Edit', 'Search'];

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Newsletter" />
        <GridComponent
        allowPaging
        allowSorting
        toolbar={toolbarOptions}>
            <ColumnsDirective>
{newsletterGrid.map((item, index) => (
    <ColumnDirective key={index} {...item} />
))}
            </ColumnsDirective>
            <Inject services={[Search, Page, Print, Edit]} />
        </GridComponent>
    </div>
  )
}

export default Newsletter