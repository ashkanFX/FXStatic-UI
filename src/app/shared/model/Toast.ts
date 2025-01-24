export class Toast {
  constructor(private severity :severity  , private  summary  :string, private detail :string) {
  }
}
export enum severity {
  success =  'success',
  info =  'info',
  Warn =  'warn',
  Error =  'error',
  secondary =  'secondary',
 }
