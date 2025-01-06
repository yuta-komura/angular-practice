import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttributeSelectorComponent } from './attribute-selector.component';

@Injectable({
  providedIn: 'root',
})
export class AttributeSelectorService {
  constructor(private dialog: MatDialog) {}

  openSelector(
    title: string,
    options: { label: string; value: string }[],
  ): Promise<string | undefined> {
    const dialogRef = this.dialog.open(AttributeSelectorComponent, {
      width: '400px',
      data: { title, options },
    });

    return dialogRef.afterClosed().toPromise();
  }
}
