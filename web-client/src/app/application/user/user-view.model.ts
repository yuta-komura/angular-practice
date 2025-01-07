import { Attribute } from '../attribute/attribute-view.model';

export interface User {
  id: number; // 一意のID
  name: string; // ユーザー名
  attributes: Attribute[]; // 属性
}
