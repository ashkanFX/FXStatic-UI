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
  view?: () => add;
  update?: () => update;
  delete?: (row: any) => del;
}
