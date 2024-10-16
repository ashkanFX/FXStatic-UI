import {ReplaySubject} from "rxjs";

export class ConfigGrid {
  configGridUpdate: ReplaySubject<ConfigGrid>
  name: string;
  columnName: string[];
  rowBody: any[];
  class: string[]
  operation?: Operation<any, any, any>
}

class Operation<add, update, del> {
  view?: (row: any) => add;
  update?: (row: any) => update;
  delete?: (row: any) => del;
}
