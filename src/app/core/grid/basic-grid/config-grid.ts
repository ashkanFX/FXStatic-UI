import {ReplaySubject} from "rxjs";

export class ConfigGrid {
  configGridUpdate: ReplaySubject<ConfigGrid>
  title: string;
  columnName: string[];
  totalRow ?: number = 1000 ;
  columnNameAlias ?: string[];
  rowBody: any[];
  class: string[]
  columnWeight?: string[]
  operation?: Operation<any, any, any>
}

class Operation<add, update, del> {
  view?: (row: any) => add;
  update?: (row: any) => update;
  delete?: (row: any) => del;
}

interface columnName {
  alias: string
  name: string
}
