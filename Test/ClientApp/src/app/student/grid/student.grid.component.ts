import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ChangeDetectorRef, DoCheck } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentModel, SexModel, Stock } from '../model/student.model';
import { StudentCrudService } from '../service/StudentCRUD.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-child',
  template: `
      <kendo-grid
          [data]="gridView"
          [pageSize]="pageSize"
          [skip]="skip"
          [pageable]="true"
          [height]="400"
          (pageChange)="pageChange($event)"
          (edit)="editHandler($event)"
          (remove)="removeHandler($event)"
        >
          <kendo-grid-column field="firstName" title="firstName" width="200"></kendo-grid-column>
          <kendo-grid-column field="lastName" title="lastName" width="200"></kendo-grid-column>
          <kendo-grid-column field="phoneNumber" title="phoneNumber" width="200"></kendo-grid-column>
          <kendo-grid-column field="email" title="email" width="200"></kendo-grid-column>
          <kendo-grid-column field="city" title="city" width="200"></kendo-grid-column>
          <kendo-grid-column field="enrolledDate" title="enrolledDate" width="200"></kendo-grid-column>
          <kendo-grid-command-column title="command" width="220">
            <ng-template kendoGridCellTemplate let-isNew="isNew">
              <button kendoGridEditCommand [primary]="true">Edit</button>
              <button kendoGridRemoveCommand>Remove</button>
            </ng-template>
          </kendo-grid-command-column>
      </kendo-grid>
  `
})
export class StudentGridComponent {
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any[] = [];
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  @Output() onDeleteVoted: EventEmitter<any> = new EventEmitter();
  constructor() {
    
  }
  public editHandler({ sender, rowIndex, dataItem }) {
    this.onVoted.emit(dataItem.id);
  }

  public removeHandler({ dataItem }): void {
    this.onDeleteVoted.emit(dataItem.id);
  }

  public GetGridData(result: any[]) {
    this.items = result;
    this.loadItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
    };
  }
}
