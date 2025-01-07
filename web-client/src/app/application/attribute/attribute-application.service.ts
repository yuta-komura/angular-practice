import { Injectable } from '@angular/core';
import { Attribute } from './attribute-view.model';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  private attributes: Attribute[] = [
    { value: 'Attribute1' },
    { value: 'Attribute2' },
    { value: 'Attribute3' },
  ];

  getAttributes(): Attribute[] {
    return this.attributes;
  }
}
